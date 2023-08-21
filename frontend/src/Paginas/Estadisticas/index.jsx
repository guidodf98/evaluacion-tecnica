import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Layout from '../../components/Layout'
import axios from 'axios'

import './index.css'

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}/cursos/personas`

const Estadisticas = () => {
  const [cursosConPersonas, setCursosConPersonas] = useState([])
  const [estadisticasCursos, setEstadisticasCursos] = useState([])

  useEffect(() => {
    getAllCursos()
  }, [])

  useEffect(() => {
    procesarDatos()
  }, [cursosConPersonas])

  const getAllCursos = async () => {
    try {
      const response = await axios.get(endpoint)
      setCursosConPersonas(response.data)
      console.log(cursosConPersonas)
    } catch (error) {
      console.error('Error fetching cursos:', error)
    }
  }

  const procesarDatos = () => {
    const resultados = cursosConPersonas.map((curso) => {
      return {
        nombre: curso.nombre,
        cantTotal: curso.personas.length,
        cantFemenino: curso.personas.filter(persona => persona.genero === "femenino").length,
        cantMasculino: curso.personas.filter(persona => persona.genero === "masculino").length,
        cantOtro: curso.personas.filter(persona => persona.genero === "otro").length,
        cantMayores: curso.personas.filter(persona => persona.edad >= 18).length,
        cantMenores: curso.personas.filter(persona => persona.edad < 18).length
      }
    })

    setEstadisticasCursos(resultados)
    console.log(estadisticasCursos)
  }

  return (
    <Layout>
      <div className='container'>
        {estadisticasCursos.map((curso) => (
          <div className="px-4 py-5 text-center border-bottom" key={curso.id}>
            <h2 className="fs-2 display-4 fw-bold text-body-emphasis">{curso.nombre}</h2>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">{curso.cantTotal} personas anotadas</p>
            </div>
            {curso.cantTotal > 0 ? (
              <div className="overflow-hidden">
                <div className="container px-5">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className='m-auto' style={{ maxWidth: '450px' }}>
                        <PieChart
                          data={[
                            { title: 'Femenino', value: curso.cantFemenino, color: '#9283BE' },
                            { title: 'Masculino', value: curso.cantMasculino, color: '#37BBED' },
                            { title: 'Otro', value: curso.cantOtro, color: '#CBCBCB' },
                          ]}
                          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                          labelStyle={(index) => ({
                            fill: [
                              { title: 'Femenino', value: 100, color: '#9283BE' },
                              { title: 'Masculino', value: 10, color: '#37BBED' },
                              { title: 'Otro', value: 20, color: '#CBCBCB' },
                            ][index].color,
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                          })}
                          radius={33}
                          labelPosition={107}
                        />
                        <div className="circulo-con-texto">
                          <span className="circulo" style={{ backgroundColor: '#9283BE' }}></span>
                          <span>Femenino: {curso.cantFemenino}</span>
                        </div>
                        <div className="circulo-con-texto">
                          <span className="circulo" style={{ backgroundColor: '#37BBED' }}></span>
                          <span>Masculino: {curso.cantMasculino}</span>
                        </div>
                        <div className="circulo-con-texto">
                          <span className="circulo" style={{ backgroundColor: '#CBCBCB' }}></span>
                          <span>Otro: {curso.cantOtro}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className='m-auto' style={{ maxWidth: '450px' }}>
                        <PieChart
                          data={[
                            { title: 'Mayores', value: curso.cantMayores, color: '#BF504E' },
                            { title: 'Menores', value: curso.cantMenores, color: '#9BBB58' },
                          ]}
                          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                          labelStyle={(index) => ({
                            fill: [
                              { title: 'Mayores', value: curso.cantMayores, color: '#BF504E' },
                              { title: 'Menores', value: curso.cantMenores, color: '#9BBB58' },
                            ][index].color,
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                          })}
                          radius={33}
                          labelPosition={107}
                        />
                        <div className="circulo-con-texto">
                          <span className="circulo" style={{ backgroundColor: '#BF504E' }}></span>
                          <span>Mayores: {curso.cantMayores}</span>
                        </div>
                        <div className="circulo-con-texto">
                          <span className="circulo" style={{ backgroundColor: '#9BBB58' }}></span>
                          <span>Menores: {curso.cantMenores}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Sin datos</p>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Estadisticas
