import axios from 'axios'
import React, { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}/persona`

const ModalEditPersona = ({ getAllPersonas, id }) => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [genero, setGenero] = useState('masculino')
  const [edad, setEdad] = useState(0)
  const [dni, setDni] = useState(0)

  const update = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${endpoint}/${id}`, {
        nombre: nombre,
        apellido: apellido,
        genero: genero,
        edad: edad,
        dni: dni
      });

      if (response.status === 200) {
        alert('Datos de persona editados con éxito');
        document.getElementById('boton-cierre-edit').click()
        getAllPersonas()
        resetAll()
      }
    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data);
        alert(error.response.data.message)
      } else if (error.request) {
        console.error('Error de solicitud:', error);
      }
    }
  };

  useEffect(() => {
    if (id !== null) {
      const getPersonaById = async () => {
        const response = await axios.get(`${endpoint}/${id}`);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setGenero(response.data.genero);
        setEdad(response.data.edad);
        setDni(response.data.dni);
      };

      getPersonaById();
    }
  }, [id]);


  const resetAll = () => {
    setNombre('')
    setApellido('')
    setGenero('masculino')
    setEdad(0)
    setDni(0)
  }

  return (
    <>
      <div className="modal fade" id="modalEditPersona" tabIndex="-1" aria-labelledby="modalEditPersonaLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEditPersonaLabel">Editar Persona</h1>
              <button id='boton-cierre-edit' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <form onSubmit={update}>
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
