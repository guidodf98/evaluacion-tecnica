import React, { useEffect, useState } from "react";
import axios from 'axios'
import { MultiSelect } from "react-multi-select-component";

const API_URL = import.meta.env.VITE_API_ENDPOINT;
const endpoint = `${API_URL}`

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${endpoint}/curso/${cursoId}/anotar`, {
        curso_id: cursoId,
        personas: personasSeleccionadas
      })

      if (response.status === 200) {
        console.log(`Personas registradas con éxito`);

        document.getElementById('boton-cierre-anotar').click()
        resetAll()
      }
    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data);
        alert(error.response.data.message);
      } else if (error.request) {
        console.error('Error de solicitud:', error);
      }
    }
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
            {personas.length === 0 ? (
              <div className="modal-body">
                <p>No hay personas disponibles para anotar. Agregue personas primero.</p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnotarPersonas
