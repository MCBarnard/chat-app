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
     * Display all Messages in the thread.
     *
     * @return Response
     */
    public function view($thread)
    {
        Log::info(__METHOD__ . " : BOF");
        $messages = Message::where('thread_id', $thread)->latest()->limit(100)->get();
        $data = [];

        foreach($messages as $msg) {
            $user = $msg->creator()->first();
            array_push($data, [
                'id' => $msg->id,
                'message' => $msg->message,
                'username' => $user->name,
                'owner' => Auth::user()->id == $msg->id,
                'picture' => $user->profile_picture
            ]);
        }
        Log::info(__METHOD__ . " : EOF");
        return response($data, ResponseAlias::HTTP_OK);
    }

    /**
     * Create a new thread.
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
        $user = Auth::user();

        if(!$user) {
            Log::info(__METHOD__ . " : EOF");
            return response("You need to be logged in!", ResponseAlias::HTTP_UNAUTHORIZED);
        }

        $contacts = json_decode($user->contacts->users);

        if (!in_array($request->input('recipient'), $contacts)) {
            Log::info(__METHOD__ . " : EOF");
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
     * Set specific message as delete.
     *
     * @param $messageId
     * @return Response
     * @throws BindingResolutionException
     */
    public function delete($messageId)
    {
        Log::info(__METHOD__ . " : BOF");
        $message = Message::find($messageId);
        // Delete message
        $messagesDomain = app()->make(Messages::class);
        return $messagesDomain->deleteMessage($message);
    }
}
