<?php

namespace App\Domain;

use App\Models\ConnectionRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ConnectionRequests
{
    public function isNotPending($recipient, $owner)
    {
        Log::info(__METHOD__ . ' : BOF');
        $exists = ConnectionRequest::where('owner', $owner)->where('recipient', $recipient)->first();

        Log::info(__METHOD__ . ' : EOF');
        return (bool)$exists;
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
        if ($this->isNotPending($recipient->id, $owner)) {
            $error = true;
            $message = "Request is still pending";
            $code = ResponseAlias::HTTP_ALREADY_REPORTED;
        }

        return [
            'error' => $error,
            'message' => $message,
            'code' => $code,
        ];
    }
}
