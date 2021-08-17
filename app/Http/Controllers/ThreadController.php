<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ThreadController extends Controller
{
    public function index()
    {
        Log::info(__METHOD__ . " : BOF");
        return response('Success 2', ResponseAlias::HTTP_OK);
        Log::info(__METHOD__ . " : EOF");
    }

    public function create(Request $request)
    {
        Log::info(__METHOD__ . " : BOF");

        // Check if users are contacts

        // create new thread for both users and update their threads field

        // save message to thread
//        Thread::create([
//
//                       ]);
        return response('Successfully created the thread', ResponseAlias::HTTP_CREATED);
        Log::info(__METHOD__ . " : EOF");
    }
}
