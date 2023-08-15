import Layout from '../../components/Layout'
import { Link } from "react-router-dom";

function NotFound() {

  return (
    <Layout>
      <div className='container pt-4'>
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <div>
            No se encontró la pagina <Link to="/">volver al inicio</Link >
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default NotFound
