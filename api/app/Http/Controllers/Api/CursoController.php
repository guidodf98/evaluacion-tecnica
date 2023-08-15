<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
  /**
   * Devuelve todos los registros de Curso
   *
   * @param \Illuminate\Http\Request $request
   */
  public function index()
  {
    $products = Curso::all();
    return $products;
  }

  /**
   * Almacena una nuevo Curso
   *
   * @param \Illuminate\Http\Request $request
   */
  public function store(Request $request)
  {
    $product = new Curso();

    $product->nombre = $request->nombre;
    $product->descripcion = $request->descripcion;
    $product->categoria_id = $request->categoria_id;

    $product->save();
  }

  /**
   * Devuelve el registro de un Curso segun su ID
   *
   * @param int $id
   */
  public function show($id)
  {
    $product = Curso::find($id);
    return $product;
  }

  /**
   * Edita los valores de un Curso en especifico
   *
   * @param \Illuminate\Http\Request $request
   */
  public function update(Request $request)
  {
    $product = Curso::findOrFail($request->id);

    $product->nombre = $request->nombre;
    $product->descripcion = $request->descripcion;
    $product->categoria_id = $request->categoria_id;

    $product->save();
    return $product;
  }

  /**
   * Elimina un Curso en especifico
   *
   * @param string $id
   */
  public function destroy(string $id)
  {
    Curso::destroy($id);
  }
}
