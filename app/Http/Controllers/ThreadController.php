<?php

namespace App\Http\Controllers;

use App\Domain\Threads;
use App\Models\Message;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ThreadController extends Controller
{
    public function create(Request $request)
    {
        Log::info(__METHOD__ . " : BOF");
        // Validate request
        $request->validate([
               'participants' => 'required|string',
               'name' => 'required|string',
               'owner' => 'required|string'
        ]);
        Log::info(__METHOD__ . " : EOF");
        return response('Successfully created the thread', ResponseAlias::HTTP_CREATED);
    }

    public function view()
    {
        Log::info(__METHOD__ . " : BOF");
        $user = Auth::user();
        $responseThreads = [];

        $threadObj = App::make(Threads::class);

        // loop through each thread
        foreach ($user->threads as $item) {
            Log::debug(print_r($item, true));
            $cleanThreads = [];
            $currentThread = Thread::find($item);
            $threadName = "";

            // get thread name
            if ($currentThread->name == "" || $currentThread->name == null) {
                foreach ($currentThread->participants as $item) {
                    if (Auth::user()->id != $item) {
                        Log::debug("==================");
                        Log::debug("Item: " . print_r($item, true));
//                        Log::debug("User find: " . print_r(User::find($item), true));
                        Log::debug("find first item: " . print_r(User::find($item)['name'], true));
                        Log::debug("==================");
                        $threadName = User::find($item)->name;
                    }
                }
            } else {
                $threadName = $currentThread->name;
            }

            $hasUnread = false;
            $messages = Message::where('thread_id', $currentThread->id)->limit(100)->get();
            foreach($messages as $msg) {
                Log::debug(print_r($msg->read, true));
                if ($msg->creator_id !== Auth::user()->id && $msg->read == false) {
                    $hasUnread = true;
                    Log::debug("Has unread messages!");
                } else {
                    Log::debug("Does not have unread messages!");
                }
            }

            $lastMessage = $threadObj->lastMessage($currentThread->id);
            $data = [];
            $data['name'] = $threadName;
            $data['last_message'] = $lastMessage->message;
            $data['thread_id'] = $currentThread->id;
            $data['newMessage'] = $hasUnread;
            array_push($responseThreads, $data);
        }
        Log::info(__METHOD__ . " : EOF");
        return response($responseThreads, ResponseAlias::HTTP_OK);
    }
}
