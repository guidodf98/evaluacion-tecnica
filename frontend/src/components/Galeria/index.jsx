import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from './Card'
import AnotarPersonas from '../Modales/AnotarPersonas'
import Filtros from './Filtros/index'

const endpoint = 'http://localhost:8000/api'

const Galeria = () => {
  const [idCursoSeleccionado, setIdCursoSeleccionado] = useState(null);
  
  const [cursos, setCursos] = useState([])
  const [cursosFiltrados, setCursosFiltrados] = useState([])

  useEffect(() => {
    getAllCursos()
  }, [])

  const getAllCursos = async () => {
    await axios.get(`${endpoint}/cursos`)
      .then(response => {
        setCursos(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className="album bg-body-tertiary pb-5">

      <Filtros setCursosFiltrados={setCursosFiltrados} cursos={cursos} />

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-3 g-xl-4">
          {cursosFiltrados.length > 0 ? (
            cursosFiltrados.map((curso) => (
              <Card curso={curso} key={curso.id} onSelectCurso={() => setIdCursoSeleccionado(curso.id)} />
            ))
          ) : (
            <p>No se encontraron cursos</p>
          )}
        </div>
      </div>
      <AnotarPersonas cursoId={idCursoSeleccionado} />
    </div>
  );
}

export default Galeria
