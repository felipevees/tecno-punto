import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import colorSharp from "../assets/img/img2/color-sharp.png";

export function Creditos() {
  return (
    <section className="carousel" id="creditos">
      <div className="container mb-5">
        <div className="carousel-bx wow zoomIn">
          <h2 className="mb-5">Creditos</h2>
          <div className="row" style={{ display: "flex" }}>
            <div className="col col-xs-12 col-sm-6 col-md-4 col-l-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-5">Credito 1</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn">
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-xs-12 col-sm-6 col-md-4 col-l-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-5">Credito 2</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn">
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-xs-12 col-sm-6 col-md-4 col-l-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-5">Credito 3</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn">
                    Contactanos
                  </a>
                </div>
              </div>
            </div>


          </div>
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

