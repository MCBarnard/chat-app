<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ThreadController extends Controller
{
    public function create(Request $request)
    {
        Log::info(__METHOD__ . " : BOF");
        // Validate request
        $request->validate([
               'participants' => 'required|string',
               'name' => 'required|string',
               'owner' => 'required|string'
        ]);

        // Check if users are contacts
        $user = Auth::user();

        // ToDo:: Solve this...
        // create new thread for both users and update their threads field

        // save message to thread
//        Thread::create([
//
//                       ]);
        Log::info(__METHOD__ . " : EOF");
        return response('Successfully created the thread', ResponseAlias::HTTP_CREATED);
    }

    public function view()
    {
        Log::info(__METHOD__ . " : BOF");
        $user = Auth::user();
        $responseThreads = [];
        foreach ($user->threads as $item) {
            array_push($responseThreads, Thread::find($item));
        }
        Log::info(__METHOD__ . " : EOF");
        return response($responseThreads, ResponseAlias::HTTP_OK);
    }
}
