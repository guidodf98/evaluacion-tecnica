<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\Categoria;
use App\Models\CursoPersona;
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
    $cursos = Curso::with('categoria')->get();
    return $cursos;
  }

  /**
   * Almacena una nuevo Curso
   *
   * @param \Illuminate\Http\Request $request
   */
  public function store(Request $request)
  {
    $curso = new Curso();

    $curso->nombre = $request->nombre;
    $curso->descripcion = $request->descripcion;
    $curso->categoria_id = $request->categoria_id;

    $curso->save();
  }

  /**
   * Devuelve el registro de un Curso segun su ID
   *
   * @param int $id
   */
  public function show($id)
  {
    $curso = Curso::find($id);
    return $curso;
  }

  /**
   * Edita los valores de un Curso en especifico
   *
   * @param \Illuminate\Http\Request $request
   */
  public function update(Request $request)
  {
    $curso = Curso::findOrFail($request->id);

    $curso->nombre = $request->nombre;
    $curso->descripcion = $request->descripcion;
    $curso->categoria_id = $request->categoria_id;

    $curso->save();
    return $curso;
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

  /**
   * Devuelve una coleccion de personas que estan anotadas a un curso
   *
   */
  public function anotarPersona(int $idCurso, int $idPersona)
  {
    $cursoPersona = new CursoPersona();

    $cursoPersona->curso_id = $idCurso;
    $cursoPersona->persona_id = $idPersona;

    $cursoPersona->save();

  }

  /**
   * Devuelve una coleccion de personas que estan anotadas a un curso
   *
   */
  public function personasAnotadas(Curso $curso)
  {
    return $curso->personas;
  }
  
  /**
   * Devuelve una coleccion de cursos filtrados por la categoria
   *
   */
  public function cursoPorCategoria(Categoria $categoria)
  {
    return $categoria->cursos;
  }
}
