import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body py-3" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">Evaluación Técnica</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
