import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../Card'
import AnotarPersonas from '../Modales/AnotarPersonas'
import Filtros from './Filtros'
import Busqueda from './Busqueda'

const endpoint = 'http://localhost:8000/api'

const Galeria = () => {
  const [idCursoSeleccionado, setIdCursoSeleccionado] = useState(null);

  const [cursos, setCursos] = useState([])

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
    <div className="album bg-body-tertiary">
      <Filtros setCursos={setCursos} />

      <div className="container m-auto justify-content-center row gy-2 gx-3 align-items-center mb-4">

        <Busqueda setCursos={setCursos} />

        {/* <div className="col-12 col-md-4 col-lg-3">
          <label className="visually-hidden" for="autoSizingSelect">Preference</label>
          <select className="form-select" id="autoSizingSelect">
            <option selected>Ordenar por</option>
            <option value="1">Orden alfabético</option>
            <option value="2">Fecha de creación</option>
            <option value="3">Fecha de actualización</option>
          </select>
        </div> */}

      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-3 g-xl-4">
          {cursos && cursos.length > 0 ? (
            cursos.map((curso) => (
              <Card curso={curso} key={curso.id} onSelectCurso={() => setIdCursoSeleccionado(curso.id)} />
            ))
          ) : (
            <p>No hay cursos disponibles</p>
          )}
        </div>
      </div>
      <AnotarPersonas cursoId={idCursoSeleccionado} />
    </div>
  );
}

export default Galeria
