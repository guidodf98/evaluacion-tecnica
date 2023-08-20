import axios from 'axios'
import React, { useState, useEffect } from 'react'

const endpoint = 'http://localhost:8000/api/curso'
const endpointCategorias = 'http://localhost:8000/api/categorias'

const ModalEditCurso = ({ getAllCursos, id }) => {
  const [categorias, setCategorias] = useState([])

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria_id, setCategoria] = useState(1)

  const update = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${endpoint}/${id}`, {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria_id
      });

      if (response.status === 201) {
        alert('Curso editada con exito');
        document.getElementById('boton-cierre-edit').click()
        getAllCursos()
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
      const getCursoById = async () => {
        const response = await axios.get(`${endpoint}/${id}`);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setCategoria(response.data.categoria_id);
      };

      getCursoById();
    }
  }, [id]);

  useEffect(() => {
    getCategorias()
  }, []);


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
      <div className="modal fade" id="modalEditCurso" tabIndex="-1" aria-labelledby="modalEditCursoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEditCursoLabel">Editar Curso</h1>
              <button id='boton-cierre-edit' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <form onSubmit={update}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripcion</label>
                  <textarea value={descripcion} rows={8} onChange={(e) => setDescripcion(e.target.value)} className="form-control" id="descripcion" />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoria_id" className="form-label">Categoria</label>
                  <select value={categoria_id} onChange={(e) => setCategoria(e.target.value)} className="form-select" aria-label="Default select example" id="categoria_id">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditCurso
