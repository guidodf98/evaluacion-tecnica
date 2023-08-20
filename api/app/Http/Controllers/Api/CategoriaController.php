<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
  /**
   * Devuelve todos los registros de Categoria
   *
   * @param \Illuminate\Http\Request $request
   */
  public function index()
  {
    $categorias = Categoria::all();
    return $categorias;
  }

  /**
   * Almacena una nueva Categoria
   *
   * @param \Illuminate\Http\Request $request
   */
  public function store(Request $request)
  {
    $request->validate([
      'nombre' => 'required|unique:categorias'
    ]);

    $categoria = Categoria::create([
      'nombre' => $request->nombre
    ]);

    return response()->json(['message' => 'La categoria se creó con éxito', 'data' => $categoria], 200);
  }

  /**
   * Devuelve el registro de una Categoria segun su ID
   *
   * @param int $id
   */
  public function show($id)
  {
    $categoria = Categoria::find($id);
    return $categoria;
  }

  /**
   * Edita los valores de una Categoria en especifico
   *
   * @param \Illuminate\Http\Request $request
   */
  public function update(Request $request)
  {
    $request->validate([
      'nombre' => 'required|unique:categorias'
    ]);

    $categoria = Categoria::findOrFail($request->id);
    $categoria->nombre = $request->nombre;
    $categoria->save();

    return response()->json(['message' => 'La categoria se editó con éxito', 'data' => $categoria], 201);
  }

  /**
   * Elimina una Categoria en especifico
   *
   * @param string $id
   */
  public function destroy(string $id)
  {
    Categoria::destroy($id);
  }
}
