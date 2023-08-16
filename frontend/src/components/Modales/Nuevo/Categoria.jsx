import axios from 'axios'
import React, { useState } from 'react'

const endpoint = 'http://localhost:8000/api/categoria'

const ModalCategoria = ({getAllCategorias}) => {

  const [nombre, setNombre] = useState('')

  const store = async (e) => {
    e.preventDefault()
    
    await axios.post(endpoint, {
      nombre: nombre
    })

    document.getElementById('boton-cierre').click()
    getAllCategorias()
    resetAll()
  }
  
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
                  <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" />
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
