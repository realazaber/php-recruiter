<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\UserController;


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


Route::post('/register', [AuthController::class, 'register']);

Route::resource('/jobs', JobsController::class);
Route::resource('/users', UserController::class);
Route::get('/jobs/search/{title}', [JobsController::class, 'search']);
Route::get('/employers', [UserController::class, 'employers']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
