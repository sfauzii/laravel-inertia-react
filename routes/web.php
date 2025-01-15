<?php

use App\Http\Controllers\PostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     sleep(1);
//     return Inertia::render('Home', ['name' => 'S Fauzi']);
// });

Route::get('/', [PostController::class, 'index']);
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::resource('posts', PostController::class)->except('index');
