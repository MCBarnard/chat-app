<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\ConnectionRequestController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ThreadController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['middleware' => ['auth']], function ($router) {
    $router->group(['prefix' => 'messages'], function () use ($router) {
        $router->post('/new', [MessageController::class, 'create']);
    });
    $router->group(['prefix' => 'profile-data'], function () use ($router) {
        $router->post('/update', [ProfileController::class, 'update']);
    });


    $router->group(['prefix'=>'data'], function ($router) {
        $router->group(['prefix'=>'messages'], function ($router) {
            $router->get('{thread?}', [MessageController::class, 'view'])->where('thread', '[0-9]*');
            $router->get('{thread?}/read', [MessageController::class, 'setMessagesAsRead'])->where('thread', '[0-9]*');
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

        $router->group(['prefix'=>'contacts'], function ($router) {
            $router->get('', [ContactController::class, 'index']);
        });
    });

    $router->get('/account-details', [AppController::class, 'account']);
    $router->get('/logout', [AppController::class, 'logout']);
    $router->get('/{any?}', [AppController::class, 'index'])->where('any', '^((?!js|css|fonts|images|vendors~js)[\/\w\.-]*)');
});
