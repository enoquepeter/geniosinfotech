<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;

Route::middleware('api')->group(function () {
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
    Route::delete('/newsletter/unsubscribe/{email}', [NewsletterController::class, 'unsubscribe']);
});