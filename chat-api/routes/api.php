<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/health', function () {
    $status = [];

    try {
        DB::connection('mongodb')->getDatabase()->command(['ping' => 1]);
        $status['mongo'] = 'ok';
    } catch (Throwable $exception) {
        $status['mongo'] = $exception->getMessage();
    }

    try {
        Http::timeout(3)->get(config('services.llm.base_url').'/models')->throw();
        $status['ollama'] = 'ok';
    } catch (Throwable $exception) {
        $status['ollama'] = $exception->getMessage();
    }

    $isHealthy = $status['mongo'] === 'ok' && $status['ollama'] === 'ok';

    return response()->json($status, $isHealthy ? 200 : 503);
});
