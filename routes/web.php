<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\MessageController;
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
    $router->get('/{any?}', [AppController::class, 'index']);
});
