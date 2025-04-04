import React from "react";

function Navbar() {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          <img src='../assets/netflix_logo.png' alt='Netflix' width='100' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item fw-bold'>
              <a class='nav-link active' aria-current='page' href='#'>
                TV Shows
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Movies
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Recently Added
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                My List
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class='dropdown'>
        <button
          class='btn btn-dark dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <img src='./Netflix-assets/assets/avatar.png' width='30' />
        </button>
        <ul class='dropdown-menu dropdown-menu-end bg-dark'>
          <li>
            <a class='dropdown-item text-light' href='./user-page.html'>
              Edit Profile
            </a>
          </li>
          <li>
            <a class='dropdown-item text-light' href='#'>
              Settings
            </a>
          </li>
          <li>
            <a class='dropdown-item text-light' href='#'>
              Switch User
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
