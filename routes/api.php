<?php

use App\Http\Controllers\ConnectionRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\MessageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix'=>'testing'], function ($router) {
    $router->get('messages', [MessageController::class, 'index']);
    $router->get('messages/{thread?}', [MessageController::class, 'view'])->where('thread', '[0-9]*');
    $router->post('messages/new', [MessageController::class, 'create']);
    $router->get('threads/{thread?}', [ThreadController::class, 'index'])->where('thread', '[0-9]*');
    $router->post('threads/new', [ThreadController::class, 'create']);
    $router->get('connection-requests/', [ConnectionRequestController::class, 'index']);
    $router->post('connection-requests/new', [ConnectionRequestController::class, 'create']);
});
