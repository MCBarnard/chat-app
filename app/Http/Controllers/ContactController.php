<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info(__METHOD__ . " : BOF");
        $contacts = json_decode(Auth::user()->contacts()->first()->users);
        $payload = [];

        if (count($contacts) == 0) {
            $payload = $contacts;
        } else {
            foreach ($contacts as $contact) {
                $user = User::find($contact);
                $threadId = null;
                foreach ($user->threads as $thread) {
                    Log::debug(print_r($thread, true));
//                    fetch thread
                    $currentThread = Thread::find($thread);
                    if ($currentThread->participants === [Auth::user()->id, $user->id] || $currentThread->participants === [$user->id, Auth::user()->id]) {
                        Log::debug("found!!");
                        $threadId = $currentThread->id;
                    }
                }

                array_push($payload, [
                    'name' => $user->name,
                    'image' => $user->profile_picture,
                    'threadId' => $threadId,
                    'connectionId' => $user->connection_id,
                ]);
            }
        }

        Log::info(__METHOD__ . " : EOF");
        return response(json_encode($payload), Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
