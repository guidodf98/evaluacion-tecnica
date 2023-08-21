<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
  /**
   * Obtiene una colección de todas las categorías disponibles.
   *
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function index()
  {
    $categorias = Categoria::all();
    return $categorias;
  }

  /**
   * Almacena una nueva categoría.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request)
  {
    $request->validate([
      'nombre' => 'required|unique:categorias'
    ]);

    $categoria = Categoria::create([
      'nombre' => $request->nombre
    ]);

    return response()->json(['message' => 'La categoria se creó con éxito', 'data' => $categoria], 201);
  }

  /**
   * Recupera y muestra la información de una categoría mediante su ID.
   *
   * @param int $id
   * @return \Illuminate\Database\Eloquent\Model\Categoria|null
   */
  public function show(int $id)
  {
    $categoria = Categoria::find($id);
    return $categoria;
  }

  /**
   * Actualiza los valores de una categoría específica.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request)
  {
    $request->validate([
      'nombre' => 'required|unique:categorias'
    ]);

    $categoria = Categoria::findOrFail($request->id);
    $categoria->nombre = $request->nombre;
    $categoria->save();

    return response()->json(['message' => 'La categoria se editó con éxito', 'data' => $categoria], 200);
  }

  /**
   * Elimina una categoría específica.
   *
   * @param int $id
   */
  public function destroy(int $id)
  {
    Categoria::destroy($id);
  }
}
