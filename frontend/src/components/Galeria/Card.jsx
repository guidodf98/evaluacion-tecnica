import React from 'react'

const Card = ({ curso, onSelectCurso }) => {
  const createdAt = formatoFecha(curso.created_at);
  const updatedAt = formatoFecha(curso.updated_at);

  function formatoFecha(isoDate) {
    const date = new Date(isoDate);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const anio = date.getFullYear();

    return `${dia}-${mes}-${anio}`;
  }

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img className="bd-placeholder-img card-img-top" width="100%" height="200" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/curso-programacion-udemy-2829849.jpg?tf=3840x" alt="cursos de programacion" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className='fs-4 mb-2'>{curso.nombre}</p>
            <p className="card-text">{curso.descripcion}</p>
          </div>
          <div>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <span className="badge text-bg-primary">{curso.categoria.nombre}</span>
            </div>
            <div className='mt-3 text-center'>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAnotarPersonas" onClick={onSelectCurso}>
                Anotar personas
              </button>
            </div>
            <div className='d-flex justify-content-between pt-3'>
              <span className='d-block'>Creado {createdAt}</span>
              <span className='d-block'>Editado {updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
