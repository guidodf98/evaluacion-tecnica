import React, { useEffect, useState } from 'react';

import FiltrosCategoria from './FiltrosCategoria';
import OrdenarPor from './OrdenarPor';
import Busqueda from './Busqueda';

const Filtros = ({ cursos, setCursosFiltrados }) => {
  const [filtroCategoria, setFiltroCategoria] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [ordenarPor, setOrdenarPor] = useState(0);

  useEffect(() => {
    let aux = cursos.filter(curso => (
      (!filtroCategoria || curso.categoria_id === filtroCategoria) &&
      (!busqueda || curso.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    ));

    switch (ordenarPor) {
      case "1": // Ordenar por nombre ascendente
        aux = aux.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "2": // Ordenar por nombre descendente
        aux = aux.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case "3": // Ordenar por fecha creacion ascendente
        aux = aux.sort((a, b) => a.created_at.localeCompare(b.created_at));
        break;
      case "4": // Ordenar por fecha creacion descendente
        aux = aux.sort((a, b) => b.created_at.localeCompare(a.created_at));
        break;
      case "5": // Ordenar por fecha actualizacion ascendente
        aux = aux.sort((a, b) => a.updated_at.localeCompare(b.updated_at));
        break;
      case "6": // Ordenar por fecha actualizacion descendente
        aux = aux.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        break;
      default:
        break;
    }

    setCursosFiltrados(aux);
  }, [cursos, filtroCategoria, busqueda, ordenarPor]);

  return (
    <>
      <FiltrosCategoria filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />

      <div className="container m-auto justify-content-center row gy-2 gx-3 align-items-center mb-4">
        <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
        <OrdenarPor ordenarPor={ordenarPor} setOrdenarPor={setOrdenarPor} />
      </div>
    </>
  );
}

export default Filtros;
