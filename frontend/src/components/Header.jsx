import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{ height:70 }}>
        <div className="container">
          <Link className="navbar-brand" to="/" >
            MERN
          </Link>
          {/* navbar collapse btn */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* navbar menu */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/cart">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
