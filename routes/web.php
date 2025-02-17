<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::resource('post', PostController::class)->except('index');

// Route::get('/', function () {
//     sleep(2);
//     return inertia::render('Home');
// });

// route::inertia('/', 'Home');

// Route::get('/about', function () {
//     return inertia('about/about');
// });
