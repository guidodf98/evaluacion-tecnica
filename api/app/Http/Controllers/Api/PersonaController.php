<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
  /**
   * Obtiene una colección de todos las personas disponibles.
   *
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function index()
  {
    $personas = Persona::all();
    return $personas;
  }

  /**
   * Almacena una nueva persona.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'nombre' => 'required|string',
      'apellido' => 'required|string',
      'genero' => 'required|in:masculino,femenino,otro',
      'edad' => 'required|integer|min:0',
      'dni' => 'required|unique:personas,dni',
    ]);

    $persona = new Persona();
    $persona->nombre = $validatedData['nombre'];
    $persona->apellido = $validatedData['apellido'];
    $persona->genero = $validatedData['genero'];
    $persona->edad = $validatedData['edad'];
    $persona->dni = $validatedData['dni'];
    $persona->save();

    return response()->json(['message' => 'Se registró la persona con éxito', 'data' => $persona], 201);
  }

  /**
   * Recupera y muestra la información de una persona mediante su ID.
   *
   * @param int $id
   * @return \Illuminate\Database\Eloquent\Model|null
   */
  public function show($id)
  {
    $persona = Persona::find($id);
    return $persona;
  }

  /**
   * Actualiza los valores de una persona específica.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request)
  {
    $request->validate([
      'nombre' => 'required|string',
      'apellido' => 'required|string',
      'genero' => 'required|in:masculino,femenino,otro',
      'edad' => 'required|integer|min:0',
      'dni' => 'required|unique:personas,dni,' . $request->id,
    ]);

    $persona = Persona::findOrFail($request->id);
    $persona->nombre = $request->nombre;
    $persona->apellido = $request->apellido;
    $persona->genero = $request->genero;
    $persona->edad = $request->edad;
    $persona->dni = $request->dni;
    $persona->save();

    return response()->json(['message' => 'Los datos de la persona se editaron con éxito', 'data' => $persona], 200);
  }

  /**
   * Elimina una persona específica.
   *
   * @param int $id
   */
  public function destroy(string $id)
  {
    Persona::destroy($id);
  }
}
