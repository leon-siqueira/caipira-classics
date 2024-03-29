<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\TrackController;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('albums', AlbumController::class)->except('update');
Route::apiResource('tracks', TrackController::class)->except('update');
