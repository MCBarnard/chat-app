<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AppController extends Controller
{
    public function index() {
        Log::debug(__METHOD__ . " : BOF");
        $optionValues = [];
        $optionValues['csrfToken'] = csrf_token();
        $optionValues = json_encode($optionValues);
        Log::debug(__METHOD__ . " : EOF");
        return view('home', compact('optionValues'));
    }
    public function logout(Request $request) {
        Log::debug(__METHOD__ . " : BOF");
        Auth::logout();
        Log::debug(__METHOD__ . " : EOF");
        return redirect('/');
    }
}
