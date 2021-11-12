<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AppController extends Controller
{
    public function index() {
        Log::info(__METHOD__ . " : BOF");
        $optionValues = [];
        $optionValues['csrfToken'] = csrf_token();
        $optionValues['states'] = json_encode(config('constantValues.states'));
        $optionValues = json_encode($optionValues);
        Log::info(__METHOD__ . " : EOF");
        return view('home', compact('optionValues'));
    }
    public function account(Request $request) {
        Log::info(__METHOD__ . " : BOF");
        $user = Auth::user();
        $data = [
            'username' => $user->name,
            'user_id' => $user->id,
            'threads' => $user->threads,
            'email' => $user->email,
            'connection_id' => $user->connection_id,
            'profile_picture' => $user->profile_picture,
        ];
        Log::info(__METHOD__ . " : EOF");
        return response($data, Response::HTTP_OK);
    }
    public function logout(Request $request) {
        Log::info(__METHOD__ . " : BOF");
        Auth::logout();
        Log::info(__METHOD__ . " : EOF");
        return redirect('/');
    }
}
