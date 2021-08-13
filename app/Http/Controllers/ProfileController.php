<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class ProfileController extends Controller
{
    public function update(Request $request) {
        Log::debug(__METHOD__ . " : BOF");
        Log::debug(print_r($request->all(),true));
        if ($request->hasFile("image_file")) {
            $user = auth()->user();

            // ToDo:: Move file storage to cloud storage
            // Create image and store in path
            $profileImage = $request->file("image_file");
            $reImage = time() . $user->name . Str::random(10) . '.' . $profileImage->getClientOriginalExtension();
            $destination = public_path("profile-images");
            $profileImage->move($destination, $reImage);

            // Save image
            $user->profile_picture = $reImage;
            $user->save();
        } else {
            Log::debug(__METHOD__ . " : EOF");
            return response("Unable to process data!", ResponseAlias::HTTP_BAD_REQUEST);
        }
        Log::debug(__METHOD__ . " : EOF");
        return response("Updated!", ResponseAlias::HTTP_ACCEPTED);
    }
}
