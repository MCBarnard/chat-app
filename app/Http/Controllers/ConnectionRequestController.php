<?php

namespace App\Http\Controllers;

use App\Domain\ConnectionRequests;
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
        $connectionRequests = ConnectionRequest::where('recipient', 2)->where('state', $pendingState)->get();
        if ($connectionRequests->isEmpty()) {
            Log::info(__METHOD__ . " : EOF");
            return response("No results", ResponseAlias::HTTP_OK);
        }

        $payload = [
            'data'=> $connectionRequests,
        ];

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

        $validator = Validator::make($request->only('connectionId'),
             ['connectionId' => 'required|alphaNum|string|size:9']
        );

        if ($validator->fails())
        {
            return response("Your request does not meet our parameters!", ResponseAlias::HTTP_BAD_REQUEST);
        }

        // ToDo:: Implement logged in user check
        // $owner_id = Auth::user()->id;
        $owner_id = 1;
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
        ConnectionRequest::create([
            'owner' => $owner_id,
            'recipient' => $recipient->id,
            'state' => 0
        ]);

        Log::info(__METHOD__ . " : EOF");
        return response("Successfully created connection request!", ResponseAlias::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ConnectionRequest $connectionRequest
     * @return Response
     */
    public function edit(ConnectionRequest $connectionRequest)
    {
        //
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
                'string',
                'size:1',
                Rule::in([strval($accepted), strval($rejected)]),
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
//        $connectionRequest->save();

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
