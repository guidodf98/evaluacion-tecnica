import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Th from '../../components/Tablas/Th'
import Td from '../../components/Tablas/Td'
import ModalCategoria from '../../components/Modales/Categoria'

const Categorias = () => {
  const endpoint = 'http://localhost:8000/api'

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    getAllCategorias()
  }, [])

  const getAllCategorias = async () => {
    await axios.get(`${endpoint}/categorias`)
      .then(response => {
        setCategorias(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div>
      <div className='px-4 d-flex justify-content-between'>
        <ModalCategoria getAllCategorias={getAllCategorias} />
      </div>

      <table className="table mb-0 table-borderless table-striped small">
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
          </tr>
        </thead>
        <tbody>
          {categorias && categorias.length > 0 ? (
            categorias.map((categoria) => (
              <tr key={categoria.id}>
                <Td>{categoria.id}</Td>
                <Td>{categoria.nombre}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-4 px-4" colSpan={'2'}>No hay categorias disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Categorias
