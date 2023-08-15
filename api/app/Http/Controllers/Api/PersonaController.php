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
        $personas = Persona::all();
        return $personas;
    }

    /**
     * Almacena una nueva Persona
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $persona = new Persona();

        $persona->nombre = $request->nombre;
        $persona->apellido = $request->apellido;
        $persona->genero = $request->genero;
        $persona->edad = $request->edad;
        $persona->dni = $request->dni;

        $persona->save();
    }

    /**
     * Devuelve el registro de una Persona segun su ID
     *
     * @param int $id
     */
    public function show($id)
    {
        $persona = Persona::find($id);
        return $persona;
    }

    /**
     * Edita los valores de una Persona en especifico
     *
     * @param \Illuminate\Http\Request $request
     */
    public function update(Request $request)
    {
        $persona = Persona::findOrFail($request->id);

        $persona->nombre = $request->nombre;
        $persona->apellido = $request->apellido;
        $persona->genero = $request->genero;
        $persona->edad = $request->edad;
        $persona->dni = $request->dni;

        $persona->save();
        return $persona;
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
