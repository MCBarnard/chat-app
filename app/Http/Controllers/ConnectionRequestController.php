<?php

namespace App\Http\Controllers;

use App\Domain\ConnectionRequests;
use App\Models\ConnectionRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ConnectionRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
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

        $request->validate([
            'recipient' => 'required|integer'
        ]);

        // ToDo:: Implement logged in user check
        $owner_id = 1;
        $recipient = User::find($request->input('recipient'));

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
     * @param  \App\Models\ConnectionRequest  $connectionRequest
     * @return Response
     */
    public function edit(ConnectionRequest $connectionRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ConnectionRequest  $connectionRequest
     * @return Response
     */
    public function update(Request $request, ConnectionRequest $connectionRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ConnectionRequest  $connectionRequest
     * @return Response
     */
    public function destroy(ConnectionRequest $connectionRequest)
    {
        //
    }
}
