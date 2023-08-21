import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}/curso`
const endpointCategorias = `${API_URL}/categorias`


const ModalCurso = ({ getAllCursos }) => {
  const [categorias, setCategorias] = useState([])

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria_id, setCategoria] = useState(1)

  useEffect(() => {
    getCategorias()
  }, [])

  const store = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint, {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria_id
      });

      if (response.status === 201) {
        alert('Curso creado con éxito')
        document.getElementById('boton-cierre').click()
        getAllCursos()
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

  const getCategorias = async () => {
    await axios.get(endpointCategorias)
      .then(response => {
        setCategorias(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const resetAll = () => {
    setNombre('')
    setDescripcion('')
    setCategoria(0)
  }

  return (
    <>
      <button type="button" className="btn btn-success align-self-center" data-bs-toggle="modal" data-bs-target="#modalCurso">
        Agregar curso
      </button>

      <div className="modal fade" id="modalCurso" tabIndex="-1" aria-labelledby="modalCursoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalCursoLabel">Nuevo Curso</h1>
              <button id='boton-cierre' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            {categorias.length === 0 ? (
              <div className="modal-body">
                <p>Por favor, agregue categorías primero.</p>
              </div>
            ) : (
              <form onSubmit={store}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" id="descripcion" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoria_id" className="form-label">Categoria</label>
                    <select value={categoria_id} onChange={(e) => setCategoria(e.target.value)} className="form-select" aria-label="Default select example" id="categoria_id" required>
                      {categorias.map((categoria) => (
                        <option value={categoria.id} key={categoria.id}>{categoria.nombre}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCurso
