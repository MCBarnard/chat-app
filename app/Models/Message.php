<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
}
