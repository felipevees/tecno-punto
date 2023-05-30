import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import hombre from "../assets/img/hombre-bostezando.jpg";

export function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className=" p-3  col col-sm-12 col-md-6 col-l-6">
            <div className="animate__animated animate__fadeIn ">
              <span className="tagline" id="home">
                Bienvenido a TECNO CREDITO
              </span>
              <h1 className="wrap">Somos tu solución de Crédito Celular </h1>
              <p>
                Jamás fue tan sencillo tener el celular que necesitas en solo 5
                minutos. Es fácil, Sin complicaciones y solo con tu cédula.
              </p>
            </div>
          </div>
          <div className="p-3 col col-sm-12 col-md-6 col-l-6 d-flex justify-content-center align-items-center">
            <div className="animate__animated animate__zoomIn ">
              <img className="img-fluid img-medium" src={hombre} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
