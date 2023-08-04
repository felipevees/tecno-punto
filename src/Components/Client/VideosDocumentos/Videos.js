import React from "react";
import video1 from "../../../assets/img/documentos/Enrolamiento.mp4";
import video2 from "../../../assets/img/documentos/VerificacionDeEnrolamiento.mp4";
import colorSharp from "../../../assets/img/img2/color-sharp.png";
import "./Videos.css";

export function Videos() {
  return (
    <section>
      <div style={{ height: "250px" }} className="text-center page2 pt-5">
        <h1 style={{ fontSize: "50px" }} className="mt-5 fw-bold">
          DOCUMENTOS
        </h1>
        <p>
          En esta seccion veras el paso a paso de como es el proceso de
          enrolamiento en nuestra plataforma
        </p>
      </div>
      <div className="carousel mt-5">
        <div style={{ marginTop: "-80px" }} className="container mb-5">
          <div className="carousel-bx wow zoomIn">
            <h2 className="mb-0" style={{ fontSize: "2.5rem" }}>
              Enrolamiento
            </h2>
            <div className="video-wrapper">
              <video
                className="responsive-video"
                src={video1}
                title="Enrolamiento Video"
                controls
                style={{ width: "100%" }}
              ></video>
            </div>
          </div>
        </div>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="background2"
        />
      </div>

      <div className="carousel">
        <div className="container mb-5">
          <div className="carousel-bx wow zoomIn">
            <h2 className="mb-5" style={{ fontSize: "2.5rem" }}>
              Verificacion de enrolamiento
            </h2>
            <div className="video-wrapper video2-wrapper">
              <video
                className="responsive-video"
                src={video2}
                title="Verificacion de enrolamiento Video"
                controls
              ></video>
            </div>
          </div>
        </div>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="background2"
        />
      </div>
    </section>
  );
}
