import React, { useState, useEffect } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api/cursos/buscar'

const Filtros = ({ setCursos }) => {
  const [busqueda, setBusqueda] = useState('')


  useEffect(() => {
    if (busqueda !== '') {
      buscarCurso()
    }
  }, [busqueda]);

  const buscarCurso = async () => {
    await axios.get(`${endpoint}/${busqueda}`)
      .then(response => {
        setCursos(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className="col-12 col-md-8 col-lg-9">
      <label className="visually-hidden" htmlFor="autoSizingInputGroup">Busqueda</label>
      <div className="input-group">
        <div className="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
      </div>
    </div>
  );
}

export default Filtros
