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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's standard
            dummy text.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.<br></br> Lorem Ipsum has been the industry's
            standard dummy text.
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
