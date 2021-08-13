<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
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
    $router->get('/account-details', [AppController::class, 'account']);
    $router->get('/logout', [AppController::class, 'logout']);
    $router->get('/{any?}', [AppController::class, 'index'])->where('any', '^((?!js|css|fonts|images|vendors~js)[\/\w\.-]*)');
});
