<?php

namespace App\Domain;

use App\Events\NewMessageEvent;
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


        // Check if contact exists in contact list
        $user = Auth::user();

        if(!$user) {
            Log::info(__METHOD__ . " : EOF");
            return response("You need to be logged in!", ResponseAlias::HTTP_UNAUTHORIZED);
        }

        // Find or create Thread
        if ($messageObject['new_thread']) {
            $contacts = json_decode($user->contacts->users);
            $receiver = User::where('connection_id', $messageObject['recipient'])->first();

            if (!in_array($receiver->id, $contacts)) {
                Log::info(__METHOD__ . " : EOF");
                return response("You are not connected to the recipient of this message", ResponseAlias::HTTP_BAD_REQUEST);
            }

            $recipient = User::where('connection_id', $messageObject['recipient'])->first();
            $thread = Thread::where('participants', json_encode(array(Auth::user()->id, $recipient->id)))->first();

            if (blank($thread)) {
                $thread = Thread::create([
                    'participants' => array(Auth::user()->id, $recipient->id)
                ]);

                $users = [Auth::user()->id, $recipient->id];
                foreach ($users as $item) {
                    $user = User::find($item);
                    $userThread = $user->threads;
                    array_push($userThread, $thread->id);
                    $user->threads = $userThread;
                    $user->save();
                }
            }

            // create message
            $message = Message::create([
                                           'creator_id' => Auth::user()->id,
                                           'thread_id' => $thread->id,
                                           'message' => $messageObject['message'],
                                       ]);

            NewMessageEvent::dispatch($message, $recipient);

        } else {
            $thread = Thread::find($messageObject['recipient']);
            if (!$thread) {
                return response("Thread does not exist! Could not create message", ResponseAlias::HTTP_NOT_FOUND);
            }
            // create message
            $message = Message::create([
                                           'creator_id' => Auth::user()->id,
                                           'thread_id' => $thread->id,
                                           'message' => $messageObject['message'],
                                       ]);

            NewMessageEvent::dispatch($message, Auth::user());
        }

        // save message and thread
        Log::info(__METHOD__ . " : EOF");
        return response($message, ResponseAlias::HTTP_CREATED);
    }

    public function deleteMessage($message) {
        if(!$message){
            Log::info(__METHOD__ . " : EOF");
            return response("Message not found!", ResponseAlias::HTTP_BAD_REQUEST);
        }

        if ($message->creator_id != Auth::user()->id) {
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

    public function fetchLastMessages($threadId) {
        Log::info(__METHOD__ . " : BOF");
        $data = [
            ['id' => 1, 'message'=> "", 'name'=>"fred", 'owner'=>Auth::user()->id, "picture"=> ""],
            ['id' => 1, 'message'=> "", 'name'=>"fred", 'owner'=>Auth::user()->id, "picture"=> ""],
            ['id' => 1, 'message'=> "", 'name'=>"fred", 'owner'=>Auth::user()->id, "picture"=> ""],
            ['id' => 1, 'message'=> "", 'name'=>"fred", 'owner'=>Auth::user()->id, "picture"=> ""],
        ];
        Log::info(__METHOD__ . " : EOF");
        return $data;
    }
}
