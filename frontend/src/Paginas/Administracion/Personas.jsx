import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Th from '../../components/Tablas/Th'
import Td from '../../components/Tablas/Td'

const endpoint = 'http://localhost:8000/api'

const Persona = () => {
  const [personas, setPersona] = useState([])

  useEffect(() => {
    getAllPersona()
  }, [])

  const getAllPersona = async () => {
    await axios.get(`${endpoint}/personas`)
      .then(response => {
        setPersona(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <table className="table mb-0 table-borderless table-striped small">
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Nombre</Th>
          <Th>Apellido</Th>
          <Th>Genero</Th>
          <Th>Edad</Th>
          <Th>DNI</Th>
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
            </tr>
          ))
        ) : (
          <tr>
            <td className="py-4 px-4" colSpan={'4'}>No hay personas disponibles</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Persona
