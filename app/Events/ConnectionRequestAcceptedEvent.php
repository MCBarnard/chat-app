<?php

namespace App\Events;

use App\Models\ConnectionRequest;
use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Support\Facades\Log;

class ConnectionRequestAcceptedEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets;

    public $connectionRequest;
    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($connectionRequest, $user)
    {
        $this->connectionRequest = ConnectionRequest::find($connectionRequest->id);
        $this->user = User::find($user);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        Log::info(__METHOD__ . " : BOF");
        Log::info(__METHOD__ . " : EOF");
        return new PrivateChannel('connections-accepted.' . $this->user->id);
    }

    public function broadcastWith(): array
    {
        Log::info(__METHOD__ . " : BOF");
        $creator = User::find($this->connectionRequest->owner);
        $payload = [
            'id' => $this->connectionRequest->id,
            'owner' => $creator->name,
            'recipient' => $this->user,
            'message' => $this->connectionRequest->message
        ];
        Log::info(__METHOD__ . " : EOF");
        return $payload;
    }
}
