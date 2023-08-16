import axios from 'axios'
import React, { useState } from 'react'

const endpoint = 'http://localhost:8000/api/persona'

const ModalEditPersona = ({ getAllPersonas }) => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [genero, setGenero] = useState('masculino')
  const [edad, setEdad] = useState(0)
  const [dni, setDni] = useState(0)

  const store = async (e) => {
    e.preventDefault()

    await axios.post(endpoint, {
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      edad: edad,
      dni: dni
    })

    document.getElementById('boton-cierre').click()
    getAllPersonas()
    resetAll()
  }

  const resetAll = () => {
    setNombre('')
    setApellido('')
    setGenero('masculino')
    setEdad(0)
    setDni(0)
  }

  return (
    <>
      <button type="button" className="btn btn-success align-self-center" data-bs-toggle="modal" data-bs-target="#modalPersona">
        Agregar persona
      </button>

      <div className="modal fade" id="modalPersona" tabIndex="-1" aria-labelledby="modalPersonaLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalPersonaLabel">Nueva Persona</h1>
              <button id='boton-cierre' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <form onSubmit={store}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" id="apellido" />
                </div>
                <div className="mb-3">
                  <label htmlFor="genero" className="form-label">Genero</label>
                  <select value={genero} onChange={(e) => setGenero(e.target.value)} className="form-select" id="genero">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="edad" className="form-label">Edad</label>
                  <input value={edad} onChange={(e) => setEdad(e.target.value)} type="text" className="form-control" id="edad" />
                </div>
                <div className="mb-3">
                  <label htmlFor="dni" className="form-label">DNI</label>
                  <input value={dni} onChange={(e) => setDni(e.target.value)} type="text" className="form-control" id="dni" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditPersona
