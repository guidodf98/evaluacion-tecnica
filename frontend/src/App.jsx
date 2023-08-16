import { Routes, Route } from "react-router-dom";

import Home from './Paginas/Home/index'
import Administracion from './Paginas/Administracion/index'
import NotFound from './Paginas/Errores/NotFound'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/administracion" element={<Administracion />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
