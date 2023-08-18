import React, { useEffect, useState } from 'react'

import FiltrosCategoria from './FiltrosCategoria'
import OrdenarPor from './OrdenarPor'
import Busqueda from './Busqueda'

const Filtros = ({ cursos, setCursosFiltrados }) => {
  const [filtroCategoria, setFiltroCategoria] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [ordenarPor, setOrdenarPor] = useState(0)

  useEffect(() => {
    const aux = cursos.filter(curso => (
      (!filtroCategoria || curso.categoria_id === filtroCategoria) &&
      (!busqueda || curso.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    ));

    setCursosFiltrados(aux);
  }, [cursos, filtroCategoria, busqueda]);

  return (
    <>
      {ordenarPor}
      <FiltrosCategoria filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />

      <div className="container m-auto justify-content-center row gy-2 gx-3 align-items-center mb-4">
        <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
        <OrdenarPor ordenarPor={ordenarPor} setOrdenarPor={setOrdenarPor} />
      </div>
    </>
  );
}

export default Filtros
