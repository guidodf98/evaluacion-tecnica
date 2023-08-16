import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body py-3" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Evaluación Técnica</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/administracion">Administracion</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar
