import React from 'react'

const OrdenarPor = ({ ordenarPor, setOrdenarPor }) => {

  return (
    <div className="col-12 col-md-4 col-lg-3">
      <label className="visually-hidden" htmlFor="ordenar-por">Ordenar por...</label>
      <select
        className="form-select"
        id="ordenar-por"
        value={ordenarPor}
        onChange={(e) => setOrdenarPor(e.target.value)}
      >
        <option value="0">Ordenar por...</option>
        <option value="1">Orden alfabético (A...Z)</option>
        <option value="2">Orden alfabético (Z...A)</option>
        <option value="3">Fecha de creación (decendente)</option>
        <option value="4">Fecha de creación (acendente)</option>
        <option value="5">Fecha de actualización (decendente)</option>
        <option value="6">Fecha de actualización (acendente)</option>
      </select>
    </div>
  );
}

export default OrdenarPor
