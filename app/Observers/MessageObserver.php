<?php

namespace App\Observers;

use Illuminate\Support\Facades\Crypt;
use App\Models\Message;
use Exception;
use Illuminate\Support\Facades\Log;

class MessageObserver
{
    /**
     * @param Message $message
     * @return void
     * @throws Exception
     */
    public function creating(Message $message)
    {
        Log::info(__METHOD__ . ' : BOF');
        $message->message = Crypt::encryptString($message->message);
        Log::info(__METHOD__ . ' : EOF');
    }
}
