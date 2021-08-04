<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\ScraperController;
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

Route::get('/scrape', [ScraperController::class, 'index'])->name('scrape');
Route::get('/{any?}', [AppController::class, 'index']);
