import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SusrutX</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#missions">Missions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;