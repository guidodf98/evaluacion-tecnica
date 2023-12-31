<?php

use App\Http\Controllers\Api\CategoriaController;
use App\Http\Controllers\Api\CursoController;
use App\Http\Controllers\Api\PersonaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::controller(PersonaController::class)->group(function () {
  Route::get('/personas', 'index');
  Route::post('/persona', 'store');
  Route::get('/persona/{id}', 'show');
  Route::put('/persona/{id}', 'update');
  Route::delete('/persona/{id}', 'destroy');
});

Route::controller(CursoController::class)->group(function () {
  Route::get('/cursos', 'index');
  Route::post('/curso', 'store');
  Route::get('/curso/{id}', 'show');
  Route::put('/curso/{id}', 'update');
  Route::delete('/curso/{id}', 'destroy');
  Route::post('/curso/{idCurso}/anotar', 'anotarPersona'); // Registra una persona en un curso específico.
  Route::get('/cursos/personas', 'personasAnotadas'); // Retorna una colección de cursos con las personas inscritas en cada uno.
  Route::get('/cursos/ultimos/{cant}', 'ultimosCursos'); // Retorna una colección de los últimos {cant} cursos agregados.
});

Route::controller(CategoriaController::class)->group(function () {
  Route::get('/categorias', 'index');
  Route::post('/categoria', 'store');
  Route::get('/categoria/{id}', 'show');
  Route::put('/categoria/{id}', 'update');
  Route::delete('/categoria/{id}', 'destroy');
});
