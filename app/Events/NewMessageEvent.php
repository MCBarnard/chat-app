<?php

namespace App\Events;

use App\Models\Thread;
use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Support\Facades\Log;

class NewMessageEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets;

    public $message;
    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($message, $user)
    {
        $this->message = $message;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        Log::info(__METHOD__ . " : BOF");
        $thread = Thread::find($this->message->thread_id);
        $receivers = [];
        $receiver_ids = [];
        foreach ($thread->participants as $participant) {
            $recipient = User::find($participant);
            array_push($receivers, $recipient);
        }
        foreach ($receivers as $participant) {
            if ($this->user->id != $participant->id) {
                array_push($receiver_ids, new PrivateChannel('messages.' . $participant->id));
            }
        }
        Log::info(__METHOD__ . " : EOF");
        return $receiver_ids;
    }

    public function broadcastWith(): array
    {
        Log::info(__METHOD__ . " : BOF");
        $creator = User::find($this->message->creator_id);
        $payload = [
            'id' => $this->message->id,
            'username' => $creator->name,
            'picture' => $creator->profile_picture,
            'message' => $this->message->message,
            'thread' => $this->message->thread_id
        ];
        Log::debug("Data: " . print_r($payload, true));
        Log::info(__METHOD__ . " : EOF");
        return $payload;
    }
}
