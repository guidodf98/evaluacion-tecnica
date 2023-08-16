import { useState } from 'react';
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import Cursos from './Cursos'
import Categorias from './Categorias'
import Personas from './Personas'

function Administracion() {
  const [tab, setTab] = useState(1);

  return (
    <Layout>
      <section className="py-5">
        <div className="container">
          <div className="bg-white rounded shadow">
            <div className="px-4 pt-4 border-bottom border-secondary-light">
                <span className={`fs-5 link-primary small px-4 pb-2 text-decoration-none d-inline-block text-secondary pointer ${tab === 1 ? 'border-bottom border-2 border-primary' : 'd-inline-block text-secondary'}`} onClick={() => setTab(1)} role="button" tabIndex="0">
                  Cursos
                </span>
                <span className={`fs-5 link-primary small px-4 pb-2 text-decoration-none d-inline-block text-secondary pointer ${tab === 2 ? 'border-bottom border-2 border-primary' : 'd-inline-block text-secondary'}`} onClick={() => setTab(2)} role="button" tabIndex="1">
                  Personas
                </span>
                <span className={`fs-5 link-primary small px-4 pb-2 text-decoration-none d-inline-block text-secondary pointer ${tab === 3 ? 'border-bottom border-2 border-primary' : 'd-inline-block text-secondary'}`} onClick={() => setTab(3)} role="button" tabIndex="2">
                  Categorias
                </span>
            </div>
            <div className="pt-3 table-responsive">
              {tab === 1 ? <Cursos /> : tab === 2 ? <Personas /> : tab === 3 ? <Categorias /> : <p>Tabla no encontrada</p>}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Administracion
