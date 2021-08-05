<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Thread extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'participants',
    ];

    /**
     * Accessor for the participants JSON object.
     *
     * @return mixed
     * @var array
     */
    public function getParticipantsAttribute($value)
    {
        return json_decode($value, true);
    }

    /**
     * Set the participants as JSON object.
     *
     * @return false|string
     * @var array
     */
    public function setParticipantsAttribute($value)
    {
        return json_encode($value, true);
    }
}
