import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="cv-navbar">
      <div className="cv-navbar-center">
        <a href="#chi-sono" className="cv-navbar-link">Chi Sono</a>
        <a href="#esperienze" className="cv-navbar-link">Esperienze</a>
        <a href="#progetti" className="cv-navbar-link">Progetti</a>
        <a href="#skills" className="cv-navbar-link">Skills</a>
        <a href="#contatti" className="cv-navbar-link">Contatti</a>
      </div>
    </nav>
  );
};

export default Navbar;