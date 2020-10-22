import React from "react";
import { NavLink } from "react-router-dom";
import '../src/css/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <NavLink exact to={"/about"} className={"footer-item"}>
          About
        </NavLink>
        <a href="https://www.linkedin.com/in/marvinjthompson/" className="footer-item">Linkedin</a>

        <a href="https://github.com/marvinthompson-code" className="footer-item">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
