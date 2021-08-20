<?php

namespace App\Domain;

use App\Models\Message;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class Threads
{
    public function lastMessage($threadId)
    {
        Log::info(__METHOD__ . ' : BOF');
        $message = Message::where('thread_id', $threadId)->latest()->limit(1)->first();
        Log::info(__METHOD__ . ' : EOF');
        return $message;
    }

    public function deleteThread($threadId)
    {
        Log::info(__METHOD__ . " : BOF");
        $thread = Thread::find($threadId);
        $participants = $thread->participants;

        Log::debug("Removing Thread from users...");
        foreach ($participants as $item) {
            $user = User::find($item);
            $userThreads = json_decode($user->threads);
            $indexToSplice = array_search($threadId, $userThreads,true);

            // remove item
            unset($userThreads[$indexToSplice]);

            // Re-index the array elements
            $cleanUserThreads = array_values($userThreads);
            $user->threads = json_encode($cleanUserThreads);
            $user->save();
        }
        Log::debug("Threads, removed from users...");
        $thread->delete();
        Log::info(__METHOD__ . " : EOF");
    }
}
