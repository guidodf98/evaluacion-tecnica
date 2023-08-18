import React from 'react'

const Card = ({ curso, onSelectCurso }) => {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img className="bd-placeholder-img card-img-top" width="100%" height="200" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/curso-programacion-udemy-2829849.jpg?tf=3840x" alt="cursos de programacion" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className='fs-4 mb-2'>{curso.nombre}</p>
            <p className="card-text">{curso.descripcion}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAnotarPersonas" onClick={onSelectCurso}>
              Anotar personas
            </button>
            <span className="badge text-bg-primary">{curso.categoria.nombre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
