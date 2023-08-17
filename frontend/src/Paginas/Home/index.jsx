import React, { useEffect, useState } from "react";
import axios from 'axios'
import { MultiSelect } from "react-multi-select-component";

import Layout from '../../components/Layout'
import Galeria from '../../components/Galeria'
import Hero from '../../components/Hero'

const endpoint = 'http://localhost:8000/api'

const Administracion = () => {
  const [personas, setPersona] = useState([])

  const options = personas.map(persona => ({
    label: `${persona.nombre} ${persona.apellido}`,
    value: persona.id,
  }));

  useEffect(() => {
    getAllPersonas()
  }, [])


  const getAllPersonas = async () => {
    await axios.get(`${endpoint}/personas`)
      .then(response => {
        setPersona(response.data)
        console.log(personas);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const [selected, setSelected] = useState([]);

  return (
    <Layout>
      <Hero />
      <div>
        <h1>Select Fruits</h1>
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
      <Galeria />
    </Layout>
  )
}

export default Administracion
