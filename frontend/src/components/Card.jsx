import React from 'react'

const Card = ({ curso }) => {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className='fs-4 mb-2'>{curso.nombre}</p>
            <p className="card-text">{curso.descripcion}</p>
          </div>
          <div className="d-flex justify-content-end align-items-center mt-3">
            <span className="badge text-bg-primary">{curso.categoria.nombre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
