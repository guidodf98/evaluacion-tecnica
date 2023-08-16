import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Th from '../../components/Tablas/Th'
import Td from '../../components/Tablas/Td'
import ModalPersona from '../../components/Modales/Nuevo/Persona'

const endpoint = 'http://localhost:8000/api'

const Persona = () => {
  const [personas, setPersona] = useState([])

  useEffect(() => {
    getAllPersonas()
  }, [])

  const getAllPersonas = async () => {
    await axios.get(`${endpoint}/personas`)
      .then(response => {
        setPersona(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const deletePersona = async (id) => {
    await axios.delete(`${endpoint}/persona/${id}`)
    getAllPersonas()
  }

  return (
    <>
      <div className='px-4 d-flex justify-content-between'>
        <ModalPersona getAllPersonas={getAllPersonas} />
      </div>

      <table className="table mb-0 table-borderless table-striped small">
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Genero</Th>
            <Th>Edad</Th>
            <Th>DNI</Th>
            <Th>Opciones</Th>
          </tr>
        </thead>
        <tbody>
          {personas && personas.length > 0 ? (
            personas.map((persona) => (
              <tr key={persona.id}>
                <Td>{persona.id}</Td>
                <Td>{persona.nombre}</Td>
                <Td>{persona.apellido}</Td>
                <Td>{persona.genero}</Td>
                <Td>{persona.edad}</Td>
                <Td>{persona.dni}</Td>
                <Td>
                  <div className='d-flex gap-2'>
                    <button className='btn btn-outline-primary' title='Editar'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </button>
                    <button className='btn btn-outline-danger' title='Eliminar' onClick={() => deletePersona(persona.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </div>
                </Td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-4 px-4" colSpan={'7'}>No hay personas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Persona
