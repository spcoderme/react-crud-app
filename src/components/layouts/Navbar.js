import React from "react";
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <NavLink className="navbar-brand" exact to={"/"}>
        CoderCummunity
        </NavLink>
        <button className="navbar-toggler"type="button"></button>
          
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to={"/"}> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to={"/about"}>
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to={"/create"}>
               Create Your Account
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
