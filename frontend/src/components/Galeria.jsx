import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './Card'

const endpoint = 'http://localhost:8000/api'

const Galeria = () => {

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
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-3 g-xl-4">
          {cursos && cursos.length > 0 ? (
            cursos.map((curso) => (
              <Card curso={curso} key={curso.id} />
            ))
          ) : (
            <p>No hay cursos disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Galeria
