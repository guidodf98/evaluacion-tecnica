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
    $products = Categoria::all();
    return $products;
  }

  /**
   * Almacena una nueva Categoria
   *
   * @param \Illuminate\Http\Request $request
   */
  public function store(Request $request)
  {
    $product = new Categoria();

    $product->nombre = $request->nombre;

    $product->save();
  }

  /**
   * Devuelve el registro de una Categoria segun su ID
   *
   * @param int $id
   */
  public function show($id)
  {
    $product = Categoria::find($id);
    return $product;
  }

  /**
   * Edita los valores de una Categoria en especifico
   *
   * @param \Illuminate\Http\Request $request
   */
  public function update(Request $request)
  {
    $product = Categoria::findOrFail($request->id);

    $product->nombre = $request->nombre;

    $product->save();
    return $product;
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
