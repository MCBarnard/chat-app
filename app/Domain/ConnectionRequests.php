<?php

namespace App\Domain;

use App\Models\ConnectionRequest;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ConnectionRequests
{
    public function stateReadyToAccept($recipient, $owner): bool
    {
        Log::info(__METHOD__ . ' : BOF');
        $accepted = config('constantValues.defaultValues.states')['accepted'];
        $pending = config('constantValues.defaultValues.states')['pending'];
        $connections = ConnectionRequest::where('owner', $owner)->where('recipient', $recipient)->get();
        if (count($connections) > 0) {
            $unAnswered = ConnectionRequest::where('owner', $owner)->where('recipient', $recipient)->where('state', $pending)->first();
            if (!$unAnswered) {
                $accepted = ConnectionRequest::where('owner', $owner)->where('recipient', $recipient)->where('state', $accepted)->first();
                Log::info(__METHOD__ . ' : EOF');
                return (bool)$accepted;
            }
            Log::info(__METHOD__ . ' : EOF');
            return (bool)$unAnswered;
        }

        Log::info(__METHOD__ . ' : EOF');
        return false;
    }

    public function sanityCheck($recipient, $owner): array
    {
        Log::info(__METHOD__ . " : BOF");
        $error = false;
        $message = "";
        $code = null;

        // Check if Recipient is owner
        if($recipient->id == $owner) {
            $error = true;
            $message = "Cannot send yourself a connection request";
            $code = ResponseAlias::HTTP_BAD_REQUEST;
        }

        // Check if there is a pending state request still waiting on a response
        if ($this->stateReadyToAccept($recipient->id, $owner)) {
            $error = true;
            $message = "Request has already been made";
            $code = ResponseAlias::HTTP_ALREADY_REPORTED;
        }

        return [
            'error' => $error,
            'message' => $message,
            'code' => $code,
        ];
    }

    public function connectUsersAsContacts($recipientId, $creatorId)
    {
        Log::info(__METHOD__ . ' : BOF');
        // Get accounts
        $user1 = User::find($recipientId);
        $user2 = User::find($creatorId);

        if (!$user1 || !$user2) {
            Log::info(__METHOD__ . ' : EOF');
            return false;
        }
        // Get their current contacts
        $user1Contacts = json_decode($user1->contacts->users);
        $user2Contacts = json_decode($user2->contacts->users);

//        Log::debug(print_r($user1Contacts, true));
//        Log::debug(print_r($user2Contacts, true));

        // Push to array if they aren't friends yet
        if (!in_array($user2->id, $user1Contacts)) {
            array_push($user1Contacts, $user2->id);
            $user1->contacts->users = json_encode($user1Contacts);
        }

        if (!in_array($user1->id, $user2Contacts)) {
            array_push($user2Contacts, $user1->id );
            $user2->contacts->users = json_encode($user2Contacts);
        }

        $user1->contacts->save();
        $user2->contacts->save();

        Log::info(__METHOD__ . ' : EOF');
        return true;
    }
}
