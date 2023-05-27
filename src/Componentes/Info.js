import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import colorSharp from "../assets/img/img2/color-sharp.png";

export function Info() {
  return (
    <section className="carousel" id="sobre-nosotros">
      <div className="container mb-5">
        <div className="carousel-bx wow zoomIn">
        <h2>Sobre nosotros</h2>
          <p>
            Somos una empresa Colombiana que se está extendiendo en todo el 
            territorio nacional con miras<br></br> a otros países, gracias al más avanzado sistema de plataforma 
            remoto de créditos para equipos celulares. <br></br> Tenemos más de 20 años de experiencia, 
            deseamos complacer a nuestros clientes para que sean parte de la historia y nosotros los acompañemos 
            siempre en su bolsillo con nuestros equipos a crédito con<br></br> las mayores facilidades y
            tecnología disponible en el mercado.
          </p>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background2"
      />
    </section>
  );
}
