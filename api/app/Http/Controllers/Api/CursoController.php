<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\CursoPersona;
use Illuminate\Http\Request;

class CursoController extends Controller
{
  /**
   * Obtiene una colección de todos los cursos disponibles.
   *
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function index()
  {
    $cursos = Curso::with('categoria')->get();
    return $cursos;
  }

  /**
   * Almacena un nuevo curso.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request)
  {
    $messages = [
      'nombre.unique' => 'El nombre ya está en uso para esta categoría.'
    ];

    $request->validate([
      // Verifica que el nombre sea único dentro de la misma categoría. El tercer argumento es NULL para crear nuevos registros.
      'nombre' => 'required|unique:cursos,nombre,NULL,id,categoria_id,' . $request->categoria_id,
      'descripcion' => 'required',
      'categoria_id' => 'required|exists:categorias,id'
    ], $messages);

    $curso = new Curso();
    $curso->nombre = $request->nombre;
    $curso->descripcion = $request->descripcion;
    $curso->categoria_id = $request->categoria_id;
    $curso->save();

    return response()->json(['message' => 'El curso se creó con éxito', 'data' => $curso], 201);
  }


  /**
   * Recupera y muestra la información de un curso mediante su ID.
   *
   * @param int $id
   * @return \Illuminate\Database\Eloquent\Model|null
   */
  public function show($id)
  {
    $curso = Curso::find($id);
    return $curso;
  }

  /**
   * Actualiza los valores de un curso específico.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request)
  {
    $messages = [
      'nombre.unique' => 'El nombre ya está en uso para esta categoría.'
    ];

    $request->validate([
      // Verifica que el nombre sea único dentro de la misma categoría.
      'nombre' => 'required|unique:cursos,nombre,' . $request->id . ',id,categoria_id,' . $request->categoria_id,
      'descripcion' => 'required',
      'categoria_id' => 'required|exists:categorias,id'
    ], $messages);

    $curso = Curso::findOrFail($request->id);
    $curso->nombre = $request->nombre;
    $curso->descripcion = $request->descripcion;
    $curso->categoria_id = $request->categoria_id;
    $curso->save();

    return response()->json(['message' => 'El curso se editó con éxito', 'data' => $curso], 200);
  }

  /**
   * Elimina un curso específico.
   *
   * @param int $id
   */
  public function destroy(string $id)
  {
    Curso::destroy($id);
  }

  /**
   * Inscribe a una persona en un curso específico.
   *
   * @param int $idCurso ID del curso al que se desea inscribir la persona.
   * @param int $idPersona ID de la persona que se inscribirá en el curso.
   * @return \Illuminate\Http\JsonResponse
   */
  public function anotarPersona(int $idCurso, Request $request)
  {
    $data = $request->json()->all();

    // Obtener la categoría del curso actual
    $curso = Curso::findOrFail($idCurso);
    $categoriaCurso = $curso->categoria->id;

    foreach ($data["personas"] as $persona) {
    // Verificar si la persona ya tiene la combinación de curso_id y persona_id
    $yaInscrito = CursoPersona::where('curso_id', $idCurso)
      ->where('persona_id', $persona["value"])
      ->exists();

    if ($yaInscrito) {
      return response()->json(['message' => 'La persona ya está inscrita en este curso'], 400);
    }

    // Contar cuántos cursos con la misma categoría tiene la persona
    $cursosMismaCategoria = CursoPersona::where('persona_id', $persona["value"])
      ->join('cursos', 'curso_persona.curso_id', '=', 'cursos.id')
      ->where('categoria_id', $categoriaCurso)
      ->count();

    // Verificar si la persona ya tiene 3 cursos en la misma categoría
    if ($cursosMismaCategoria >= 3) {
      return response()->json(['message' => 'La persona ya tiene 3 cursos en esta categoría'], 400);
    }

    // Si no se supera el límite, crear y guardar la relación CursoPersona
    $cursoPersona = new CursoPersona();

    $cursoPersona->curso_id = $idCurso;
    $cursoPersona->persona_id = $persona["value"];

    $cursoPersona->save();
  }

    return response()->json(['message' => 'Persona inscrita en el curso correctamente'], 200);
  }

  /**
   * Devuelve una colección de cursos con las personas inscritas en cada uno.
   *
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function personasAnotadas()
  {
    $cursos = Curso::with('personas')->get();
    return $cursos;
  }

  /**
   * Devuelve una colección de los últimos cursos agregados.
   *
   * @param int $cant Cantidad de cursos a obtener.
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function ultimosCursos(int $cant)
  {
    $cursos = Curso::orderBy('created_at', 'desc')->take($cant)->get();
    return $cursos;
  }
}
