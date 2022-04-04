import React from "react";
import { NavLink } from "react-router-dom";
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import CartBtn from './buttons/CartBtn'


const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py- shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2" to="/"> L'ade </NavLink>
          
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            
            <Login/>
            <Signup/>
            <CartBtn/>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
