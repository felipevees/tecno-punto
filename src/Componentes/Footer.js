import React from "react";
import logo from "../assets/img/logos/logo-dark.jpg";
import navIcon3 from "../assets/img/img2/nav-icon3.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a href="#home"><img src={logo} alt="logo"></img></a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a className="footer-link btn" href="#sobre-nosotros">Sobre nosotros</a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a className="footer-link btn" href="#">Telefono</a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a className="footer-link btn" href="#">Correo</a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
