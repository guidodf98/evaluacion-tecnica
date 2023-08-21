import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}/categorias`

const FiltrosCategoria = ({ filtroCategoria, setFiltroCategoria }) => {
  const [categorias, setCategorias] = useState([])

  const getAllCategorias = async () => {
    await axios.get(endpoint)
      .then(response => {
        setCategorias(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getAllCategorias()
  }, [])

  return (
    <div className="d-flex gap-2 justify-content-center py-5">
      {categorias.map((categoria) => (
        filtroCategoria === categoria.id ?
          <span onClick={() => setFiltroCategoria(null)} style={{ cursor: 'pointer' }} key={categoria.id} className="user-select-none fs-6 badge d-flex p-2 align-items-center rounded-pill text-bg-primary">
            <span className="px-1">{categoria.nombre}</span>
          </span>
          :
          <span onClick={() => setFiltroCategoria(categoria.id)} style={{ cursor: 'pointer' }} key={categoria.id} className="user-select-none fs-6 badge d-flex p-2 align-items-center rounded-pill text-primary-emphasis bg-primary-subtle">
            <span className="px-1">{categoria.nombre}</span>
          </span>
      ))}
    </div>
  );
}

export default FiltrosCategoria
