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
        $messages = Message::where('thread_id', $thread)->latest('created_at')->limit(100)->get();
        $data = [];

        foreach($messages as $msg) {
            $user = $msg->creator()->first();
            array_push($data, [
                'id' => $msg->id,
                'message' => $msg->message,
                'username' => $user->name,
                'owner' => Auth::user()->id == intval($msg->creator_id),
                'picture' => $user->profile_picture
            ]);
        }
        $data = array_reverse($data);
        Log::info(__METHOD__ . " : EOF");
        return response(['messages' => $data], ResponseAlias::HTTP_OK);
    }
    /**
     * Set Messages as read in the thread.
     *
     * @return Response
     */
    public function setMessagesAsRead($thread)
    {
        Log::info(__METHOD__ . " : BOF");
        $messages = Message::where('thread_id', $thread)->get();

        foreach($messages as $msg) {
            if ($msg->creator_id !== Auth::user()->id) {
                $msg->read = true;
                $msg->save();
            }
        }
        Log::info(__METHOD__ . " : EOF");
        return response("Success!", ResponseAlias::HTTP_OK);
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
           ],
           'new_thread' => 'required|boolean'
       ]);

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
