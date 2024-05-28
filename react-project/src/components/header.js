import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          {/* <!-- header --> */}
          <div className="nav-header">
            <Link to="/" className="nav-logo">
              <img src="./assets/images/logo.svg" alt="tasty recipes" />
            </Link>
            <button type="button" className="btn nav-btn">
              <i className="fas fa-align-justify"></i>
            </button>
          </div>  
          {/* <!-- links --> */}
          <div className="nav-links">
            <Link to="/" className="nav-link">home</Link>
            <Link to="/about" className="nav-link">about</Link>
            <Link to="/tags" className="nav-link">tags</Link>
            <Link to="/recipes" className="nav-link">recipes</Link>
            <div className="nav-link contact-link">
              <Link to="/contact" className="btn">contact</Link>
            </div>
          </div>
        </div>
      </nav>       
    </div>
  );
}

export default Header;