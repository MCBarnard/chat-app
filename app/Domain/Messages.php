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
        if ($messageObject['new_thread']) {
            // ToDo:: Replace with Auth::user()->id
            $thread = Thread::where('participants', json_encode(array(1, $messageObject['recipient'])))->first();

            if (blank($thread)) {
                $thread = Thread::create([
                    // ToDo:: Replace with Auth::user()->id
                    'participants' => array(1, $messageObject['recipient'])
                ]);
            }
        } else {
            $thread = Thread::find($messageObject['recipient']);
            if (!$thread) {
                return response("Thread does not exist! Could not create message", ResponseAlias::HTTP_NOT_FOUND);
            }
        }

        // create message
        Message::create([
            // ToDo:: Replace with Auth::user()->id
            'creator_id' => 1,
            'thread_id' => $thread->id,
            'message' => $messageObject['message']
        ]);

        // save message and thread
        Log::info(__METHOD__ . " : EOF");
        return response("Message Created Successfully!", ResponseAlias::HTTP_CREATED);
    }
}
