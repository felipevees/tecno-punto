import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "../assets/img/logos/logo-dark.jpg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a href="#home">
              <img src={logo} alt="logo"></img>
            </a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a className="footer-link btn" href="#sobre-nosotros">
              Sobre nosotros
            </a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a className="footer-link btn" href="https://wa.link/kpu8i3">
              WhatsApp
            </a>
          </div>

          <div className="col col-xs-6 col-sm-6 col-md-3 col-l-3 col-xl-3">
            <a
              className="footer-link btn"
              href="https://instagram.com/tecnocreditooficial?igshid=MzRlODBiNWFlZA=="
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
