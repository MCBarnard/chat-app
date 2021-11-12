<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;

class Message extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'creator_id',
        'thread_id',
        'message',
        'read'
    ];

    /**
     * Get the user that owns the Message.
     */
    public function creator()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the thread that the Message was meant for.
     */
    public function thread()
    {
        return $this->belongsTo(Thread::class, 'foreign_key');
    }

    public function getMessageAttribute ($value) {
        Log::info(__METHOD__ . ' : BOF');
        try {
            Log::info(__METHOD__ . ' : EOF');
            return Crypt::decryptString($value);
        } catch (DecryptException $e) {
            Log::info(__METHOD__ . ' : EOF');
            return $value;
        }
    }
}
