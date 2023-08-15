<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Devuelve todos los registros de Persona
     *
     * @param \Illuminate\Http\Request $request
     */
    public function index()
    {
        $products = Persona::all();
        return $products;
    }

    /**
     * Almacena una nueva Persona
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $product = new Persona();

        $product->nombre = $request->nombre;
        $product->apellido = $request->apellido;
        $product->genero = $request->genero;
        $product->edad = $request->edad;
        $product->dni = $request->dni;

        $product->save();
    }

    /**
     * Devuelve el registro de una Persona segun su ID
     *
     * @param int $id
     */
    public function show($id)
    {
        $product = Persona::find($id);
        return $product;
    }

    /**
     * Edita los valores de una Persona en especifico
     *
     * @param \Illuminate\Http\Request $request
     */
    public function update(Request $request)
    {
        $product = Persona::findOrFail($request->id);

        $product->nombre = $request->nombre;
        $product->apellido = $request->apellido;
        $product->genero = $request->genero;
        $product->edad = $request->edad;
        $product->dni = $request->dni;

        $product->save();
        return $product;
    }

    /**
     * Elimina una Persona en especifico
     *
     * @param string $id
     */
    public function destroy(string $id)
    {
        Persona::destroy($id);
    }
}
