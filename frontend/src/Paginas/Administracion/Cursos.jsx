import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Th from '../../components/Tablas/Th'
import Td from '../../components/Tablas/Td'
import ModalCurso from '../../components/Modales/Curso'

const endpoint = 'http://localhost:8000/api'

const Cursos = () => {
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
    <>
      <div className='px-4 d-flex justify-content-between'>
        <ModalCurso getAllCursos={getAllCursos} />
      </div>

      <table className="table mb-0 table-borderless table-striped small">
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Descripcion</Th>
            <Th>Categoria</Th>
          </tr>
        </thead>
        <tbody>
          {cursos && cursos.length > 0 ? (
            cursos.map((curso) => (
              <tr key={curso.id}>
                <Td>{curso.id}</Td>
                <Td>{curso.nombre}</Td>
                <Td>{curso.descripcion}</Td>
                <Td>{curso.categoria.nombre}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-4 px-4" colSpan={'4'}>No hay cursos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Cursos
