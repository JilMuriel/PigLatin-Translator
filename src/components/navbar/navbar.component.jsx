import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="brand" />
        <ul className="nav">
          <li>
            <NavLink to="/" exact className="link">
              TRANSLATOR
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className="link">
              HISTORY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
