<?php

namespace App\Http\Controllers;

use App\Domain\ConnectionRequests;
use App\Events\ConnectionRequestAcceptedEvent;
use App\Events\NewConnectionRequestEvent;
use App\Events\NewMessageEvent;
use App\Models\ConnectionRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ConnectionRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        Log::info(__METHOD__ . " : BOF");
        $pendingState = config('constantValues.defaultValues.states.pending');
        $connectionRequests = ConnectionRequest::where('recipient', Auth::user()->id)->where('state', $pendingState)->get();
        $payload =[];
        if ($connectionRequests->isEmpty()) {
            Log::info(__METHOD__ . " : EOF");
            return response(json_encode($payload), ResponseAlias::HTTP_OK);
        }

        foreach($connectionRequests as $req) {
            $creator = $req->owner()->first();
            array_push($payload, [
                'from' => $creator->name,
                'message' => $req->message ?? '',
                'owner_profile_picture' => $creator->profile_picture,
                'id' => $req->id
            ]);
        }

        Log::info(__METHOD__ . " : EOF");
        return response($payload, ResponseAlias::HTTP_OK);
    }

    /**
     * Show create a new resource.
     *
     * @param Request $request
     * @return Response
     */
    public function create(Request $request): Response
    {
        Log::info(__METHOD__ . " : BOF");

        $validator = Validator::make($request->all(),
             [
                 'connectionId' => 'string',
                 'message' => 'nullable|string'
             ]
        );

        if ($validator->fails())
        {
            return response("Your request does not meet our parameters!", ResponseAlias::HTTP_BAD_REQUEST);
        }

        $owner_id = Auth::user()->id;
        $recipient = User::where('connection_id', $request->input('connectionId'))->first();

        // Check if recipient exists
        if (!$recipient) {
            Log::info(__METHOD__ . " : EOF");
            return response("Recipient does not exist!", ResponseAlias::HTTP_NOT_FOUND);
        }
        $connectionObj = App::make(ConnectionRequests::class);
        $response = $connectionObj->sanityCheck($recipient, $owner_id);

        if($response['error']) {
            return response($response['message'], $response['code']);
        }

        // Create Request
        $connectionRequest = ConnectionRequest::create([
            'owner' => $owner_id,
            'recipient' => $recipient->id,
            'message' => $request->input('message'),
            'state' => 0
        ]);

        NewConnectionRequestEvent::dispatch($connectionRequest, $recipient->id);

        Log::info(__METHOD__ . " : EOF");
        return response("Successfully created connection request!", ResponseAlias::HTTP_CREATED);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param $requestId
     * @param Request $request
     * @return Response
     */
    public function update($requestId, Request $request): Response
    {
        Log::info(__METHOD__ . " : BOF");
        $accepted = config('constantValues.defaultValues.states')['accepted'];
        $rejected = config('constantValues.defaultValues.states')['rejected'];

        $validate = Validator::make($request->only('state'), [
            'state' => [
                'required',
                'integer',
                'min:1',
                'max:2',
                Rule::in([intval($accepted), intval($rejected)]),
            ]
        ]);

        if ($validate->fails()) {
            Log::info(__METHOD__ . " : EOF");
            return response("Parameters Incorrectly specified", ResponseAlias::HTTP_BAD_REQUEST);
        }
        // Find Request
        $connectionRequest = ConnectionRequest::find($requestId);

        if (!$connectionRequest) {
            Log::info(__METHOD__ . " : EOF");
            return response("Request not found!", ResponseAlias::HTTP_NOT_FOUND);
        }

        $cleanState = $request->input('state') == $accepted ? intval($accepted) : intval($rejected);

        // Update Request
        $connectionRequest->state = $cleanState;

        // If user has accepted the request, add them to their contacts
        if ($cleanState == $accepted) {
            $connectionObj = App::make(ConnectionRequests::class);
            $response = $connectionObj->connectUsersAsContacts($connectionRequest->recipient, $connectionRequest->owner);

            if (!$response) {
                Log::info(__METHOD__ . " : EOF");
                return response("Could not create contacts and could not save connection request as requested", ResponseAlias::HTTP_BAD_REQUEST);
            }
        }
        $connectionRequest->save();
        ConnectionRequestAcceptedEvent::dispatch($connectionRequest, $connectionRequest->owner);

        Log::info(__METHOD__ . " : EOF");
        return response($requestId, ResponseAlias::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ConnectionRequest $connectionRequest
     * @return Response
     */
    public function destroy(ConnectionRequest $connectionRequest)
    {
        //
    }
}
