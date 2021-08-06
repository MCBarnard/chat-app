<?php

namespace App\Domain;

use App\Models\Message;
use App\Models\Thread;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

use function Psy\debug;

class Messages
{
    public function createNewMessage($messageObject) {
        Log::info(__METHOD__ . " : BOF");

        // Find or create Thread
        $thread = Thread::where('participants', json_encode(array(Auth::user()->id, $messageObject['recipient'])))->first();

        if (blank($thread)) {
            $thread = Thread::create([
                'participants' => array(Auth::user()->id, $messageObject['recipient'])
            ]);
        }

        // create message
        Message::create([
            'creator_id' => Auth::user()->id,
            'thread_id' => $thread->id,
            'message' => $messageObject['message']
        ]);

        // save message and thread
        Log::info(__METHOD__ . " : EOF");
        return response("Message Created Successfully!", ResponseAlias::HTTP_CREATED);
    }
}
