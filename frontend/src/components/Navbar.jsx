import React from 'react';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body py-3" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">Evaluación Técnica</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Inicio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
