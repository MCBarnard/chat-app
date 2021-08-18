<?php

namespace App\Domain;

use App\Models\Message;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Support\Facades\App;
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

                // ToDo:: Replace with Auth::user()->id
                $users = [1, $messageObject['recipient']];
                foreach ($users as $item) {
                    $user = User::find($item);
                    $userThread = $user->threads;
                    array_push($userThread, $thread->id);
                    $user->threads = $userThread;
                    $user->save();
                }
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

    public function deleteMessage($message) {
        if(!$message){
            Log::info(__METHOD__ . " : EOF");
            return response("Message not found!", ResponseAlias::HTTP_BAD_REQUEST);
        }
        // ToDo:: Implement Auth::user()->id
        if ($message->creator_id != 1) {
            Log::info(__METHOD__ . " : EOF");
            return response("You are not authorized to delete this message!", ResponseAlias::HTTP_UNAUTHORIZED);
        }

        // Check if this was the last message in the thread
        $messagesInSameThread = Message::where('thread_id', $message->thread_id)->count();
        if ($messagesInSameThread == 1) {
            Log::info("Last message in chat deleted, deleting thread...");
            $message->delete();
            $threadObj = App::make(Threads::class);
            $threadObj->deleteThread($message->thread_id);
            Log::info("Last message in chat deleted, deleting thread...");
        } else {
            $message->delete();
        }

        Log::info(__METHOD__ . " : EOF");
        return response("Message deleted successfully!", ResponseAlias::HTTP_UNAUTHORIZED);
    }
}
