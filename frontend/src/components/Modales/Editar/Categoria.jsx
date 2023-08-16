import axios from 'axios'
import React, { useState, useEffect } from 'react'

const endpoint = 'http://localhost:8000/api/categoria'

const ModalEditCategoria = ({ getAllCategorias, id }) => {
  const [nombre, setNombre] = useState('')

  const update = async (e) => {
    e.preventDefault()

    await axios.put(`${endpoint}/${id}`, {
      nombre: nombre
    })

    document.getElementById('boton-cierre-edit').click()
    getAllCategorias()
    resetAll()
  }

  useEffect(() => {
    if (id !== null) {
      const getCategoriaById = async () => {
        const response = await axios.get(`${endpoint}/${id}`);
        setNombre(response.data.nombre);
      };

      getCategoriaById();
    }
  }, [id]);


  const resetAll = () => {
    setNombre('')
  }

  return (
    <>
      <div className="modal fade" id="modalEditCategoria" tabIndex="-1" aria-labelledby="modalEditCategoriaLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEditCategoriaLabel">Editar Categoria</h1>
              <button id='boton-cierre-edit' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <form onSubmit={update}>
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

export default ModalEditCategoria
