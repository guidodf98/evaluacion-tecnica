import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Hero.css'

const endpoint = 'http://localhost:8000/api/cursos/ultimos'

const Hero = () => {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getAllCursos()
    console.log(cursos);
  }, [])

  const getAllCursos = async () => {
    await axios.get(`${endpoint}/5`)
      .then(response => {
        setCursos(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div id="carruselHero" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {cursos.map((curso, index) => (
          <button
            key={curso.id}
            type="button"
            data-bs-target="#carruselHero"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {cursos.map((curso, index) => (
          <div key={curso.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/curso-programacion-udemy-2829849.jpg?tf=3840x" alt="cursos de programacion" />
            <div className="fondo-oscuro"></div>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>{curso.nombre}</h1>
                <p>{curso.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button className="carousel-control-prev" type="button" data-bs-target="#carruselHero" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carruselHero" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero
