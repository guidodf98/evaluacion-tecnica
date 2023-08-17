import React, { useEffect, useState } from "react";
import axios from 'axios'
import { MultiSelect } from "react-multi-select-component";

const endpoint = 'http://localhost:8000/api'

const AnotarPersonas = ({ cursoId }) => {
  const [personas, setPersona] = useState([])
  const [personasSeleccionadas, setPersonasSeleccionadas] = useState([]);

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
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    personasSeleccionadas.map((persona) => {
      store(persona.value)
    })

    document.getElementById('boton-cierre-anotar').click()
    resetAll()
  }

  const store = async (idPersona) => {
    await axios.post(`${endpoint}/curso/${cursoId}/anotar/${idPersona}`, {
      curso_id: cursoId,
      persona_id: idPersona
    })
  }

  const resetAll = () => {
    setPersonasSeleccionadas([])
  }


  return (
    <>
      <div className={`modal fade`} id="modalAnotarPersonas" tabIndex="-1" aria-labelledby="modalAnotarPersonasLabel" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalAnotarPersonasLabel">Anotar personas al curso</h1>
              <button id="boton-cierre-anotar" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div>
                  <MultiSelect
                    options={options}
                    value={personasSeleccionadas}
                    onChange={setPersonasSeleccionadas}
                    labelledBy="Seleccionar"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Anotar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnotarPersonas
