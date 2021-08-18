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

    $router->group(['prefix'=>'messages'], function ($router) {
        $router->get('', [MessageController::class, 'index']);
        $router->get('{thread?}', [MessageController::class, 'view'])->where('thread', '[0-9]*');
        $router->get('{messageId?}/delete', [MessageController::class, 'delete'])->where('messageId', '[0-9]*');
        $router->post('new', [MessageController::class, 'create']);
    });

    $router->group(['prefix'=>'threads'], function ($router) {
        $router->get('', [ThreadController::class, 'view']);
        $router->get('{thread?}', [ThreadController::class, 'index'])->where('thread', '[0-9]*');
        $router->get('{thread?}/delete', [ThreadController::class, 'delete'])->where('thread', '[0-9]*');
        $router->post('new', [ThreadController::class, 'create']);
    });

    $router->group(['prefix'=>'connection-requests'], function ($router) {
        $router->get('', [ConnectionRequestController::class, 'index']);
        $router->post('new', [ConnectionRequestController::class, 'create']);
        $router->post('{requestId?}', [ConnectionRequestController::class, 'update'])->where('requestId', '[0-9]*');
    });
});
