import React, { useState, useEffect } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'
const endpointFiltrarCurso = 'http://localhost:8000/api/cursos/categoria'

const Filtros = ({ setCursos }) => {
  const [categorias, setCategorias] = useState([])
  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState(null)

  useEffect(() => {
    getAllCategorias()
  }, [])

  useEffect(() => {
    if (idCategoriaSeleccionada !== null) {
      cursosFiltradoCategoria(idCategoriaSeleccionada);
    }
  }, [idCategoriaSeleccionada]);

  const getAllCategorias = async () => {
    await axios.get(`${endpoint}/categorias`)
      .then(response => {
        setCategorias(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const cursosFiltradoCategoria = async (categoriaId) => {
    await axios.get(`${endpointFiltrarCurso}/${categoriaId}`)
      .then(response => {
        setCursos(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className="d-flex gap-2 justify-content-center py-5">
      {categorias.map((categoria) => (
        idCategoriaSeleccionada === categoria.id ?
          <span onClick={() => setIdCategoriaSeleccionada(null)} style={{ cursor: 'pointer' }} key={categoria.id} className="fs-6 badge d-flex p-2 align-items-center rounded-pill text-bg-primary">
            <span className="px-1">{categoria.nombre}</span>
          </span>
          :
          <span onClick={() => setIdCategoriaSeleccionada(categoria.id)} style={{ cursor: 'pointer' }} key={categoria.id} className="fs-6 badge d-flex p-2 align-items-center rounded-pill text-primary-emphasis bg-primary-subtle">
            <span className="px-1">{categoria.nombre}</span>
          </span>
      ))}

    </div>
  );
}

export default Filtros
