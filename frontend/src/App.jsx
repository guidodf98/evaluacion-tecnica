import { Routes, Route } from "react-router-dom";

import Home from './Home'
import Administracion from './Administracion'
import NotFound from './NotFound'

import './App.css'
function App() {

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
