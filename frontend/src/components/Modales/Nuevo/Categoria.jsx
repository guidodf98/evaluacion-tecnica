import axios from 'axios'
import React, { useState } from 'react'

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}/categoria`

const ModalCategoria = ({ getAllCategorias }) => {
  const [nombre, setNombre] = useState('')

  const store = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint, {
        nombre: nombre,
      });

      if (response.status === 201) {
        alert('Categoria creada con éxito')
        document.getElementById('boton-cierre').click()
        getAllCategorias()
        resetAll()
      }
    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data)
        alert(error.response.data.message)
      } else if (error.request) {
        console.error('Error de solicitud:', error)
      }
    }
  };


  const resetAll = () => {
    setNombre('')
  }

  return (
    <>
      <button type="button" className="btn btn-success align-self-center" data-bs-toggle="modal" data-bs-target="#modalCategoria">
        Agregar categoria
      </button>

      <div className="modal fade" id="modalCategoria" tabIndex="-1" aria-labelledby="modalCategoriaLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalCategoriaLabel">Nueva Categoria</h1>
              <button id='boton-cierre' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <form onSubmit={store}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" required />
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

export default ModalCategoria
