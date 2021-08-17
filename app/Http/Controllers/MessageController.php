<?php

namespace App\Http\Controllers;

use App\Domain\Messages;
use App\Models\Message;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        Log::info(__METHOD__ . " : BOF");
        return response('Success', ResponseAlias::HTTP_OK);
        Log::info(__METHOD__ . " : EOF");
    }

    /**
     * Display a single item of the resource.
     *
     * @return Response
     */
    public function view($thread)
    {
        Log::info(__METHOD__ . " : BOF");
        return response('Success', ResponseAlias::HTTP_OK);
        Log::info(__METHOD__ . " : EOF");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|ResponseFactory|Response
     * @throws BindingResolutionException
     */
    public function create(Request $request)
    {
        Log::info(__METHOD__ . " : BOF");
        $recipientRequired = $request->input('new_thread') == "1" || $request->input('new_thread') == true;
        // Validate request
        $request->validate([
           'message' => 'required|string',
           'recipient' => [
               Rule::requiredIf($recipientRequired),
               'integer'
           ],
           'new_thread' => 'required|boolean'
       ]);

        // Check if contact exists in contact list
        // ToDo: implement auth()->user->id
        $user = User::find(1);

        if(!$user) {
            return response("You need to be logged in!", ResponseAlias::HTTP_UNAUTHORIZED);
        }

        $contacts = json_decode($user->contacts->users);

        if (!in_array($request->input('recipient'), $contacts)) {
            return response("You are not connected to the recipient of this message", ResponseAlias::HTTP_BAD_REQUEST);
        }

        // format
        $messageObject = [
            'message' => $request->input('message'),
            'recipient' => $request->input('recipient'),
            'new_thread' => $request->input('new_thread')
        ];

        // Create message
        $messagesDomain = app()->make(Messages::class);
        $response = $messagesDomain->createNewMessage($messageObject);

        Log::info(__METHOD__ . " : EOF");
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  \App\Models\Message  $message
     * @return Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
