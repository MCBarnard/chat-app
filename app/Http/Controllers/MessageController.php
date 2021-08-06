<?php

namespace App\Http\Controllers;

use App\Domain\Messages;
use App\Models\Message;
use App\Models\Thread;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
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
        //
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

        // Validate request
        $request->validate([
           'message' => 'required|string',
           'recipient' => 'required|integer',
       ]);

        // format
        $messageObject = [
            'message' => $request->input('message'),
            'recipient' => $request->input('recipient')
        ];

        // Create message
        $messagesDomain = app()->make(Messages::class);
        $response = $messagesDomain->createNewMessage($messageObject);

        // save message and thread
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
