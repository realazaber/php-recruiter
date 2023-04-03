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
Route::post('/login', [AuthController::class, 'login']);

Route::get('/jobs', [JobsController::class, 'index']);
Route::get('/jobs/search/{title}', [JobsController::class, 'search']);

Route::get('/users/{userId}', [UserController::class, 'show']);
Route::get('/employers', [UserController::class, 'employers']);



Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('/jobs', [JobsController::class, 'store']);
    Route::put('/jobs/edit/{jobId}', [JobsController::class, 'update']);
    Route::delete('/jobs/delete/{jobId}', [JobsController::class, 'destroy']);

    Route::put('/users/edit/{userId}', [UserController::class, 'update']);
    Route::delete('/users/delete/{id}', [UserController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
