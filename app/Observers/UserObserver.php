<?php

namespace App\Observers;

use App\Models\Contact;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Log;

class UserObserver
{
    /**
     * Handle the Product "created" event.
     *
     * @param User $user
     * @return void
     * @throws Exception
     */
    public function creating(User $user)
    {
        // Generate a new code until it doesn't find the User with unique connection_id
        do {
            $code = random_int(100000000, 999999999);
        } while (User::where("connection_id", "=", $code)->first());
        $contacts = Contact::create([
            'users' => json_encode(array())
        ]);
        $user->contacts_id = $contacts->id;
        $user->profile_picture = null;
        $user->connection_id = $code;
    }
}
