import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dispositivo1 from "../assets/img/dispositivos/dispositivo1.jpg";
import dispositivo2 from "../assets/img/dispositivos/dispositivo2.jpg";
import dispositivo3 from "../assets/img/dispositivos/dispositivo3.jpg";
import dispositivo4 from "../assets/img/dispositivos/dispositivo4.jpg";
import dispositivo5 from "../assets/img/dispositivos/dispositivo5.jpg";

export function CarouselC() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="carousel" id="productos">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <div className="carousel-bx wow zoomIn">
              <h2>Productos</h2>
              <p>
                Este es nuestro catálogo actualizado <br></br> Que vamos
                renovando cada vez que equipos más modernos llegan al mercado.
                Este es nuestro catálogo actualizado <br></br> Que vamos
                renovando cada vez que equipos más modernos llegan al mercado.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="container d-flex justify-content-center">
                    <img
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      src={dispositivo1}
                      alt="dispositivo1"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="container d-flex justify-content-center">
                    <img
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      src={dispositivo2}
                      alt="dispositivo2"
                    />
                  </div>
                </div>
                <div className="item ">
                  <div className="container d-flex justify-content-center">
                    <img
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      src={dispositivo3}
                      alt="dispositivo3"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="container d-flex justify-content-center">
                    <img
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      src={dispositivo4}
                      alt="dispositivo4"
                    />
                  </div>
                </div>
                <div className="item ">
                  <div className="container d-flex justify-content-center">
                    <img
                      style={{ borderRadius: "10px" }}
                      className="img-fluid"
                      src={dispositivo5}
                      alt="dispositivo5"
                    />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
