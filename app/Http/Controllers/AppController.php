<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index() {
        $optionValues = [];
        $optionValues['csrfToken'] = csrf_token();
        $optionValues = json_encode($optionValues);
        return view('home', compact('optionValues'));
    }
}
