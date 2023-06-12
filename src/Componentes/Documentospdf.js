import React from "react";
import document from "../assets/img/documentos/document.png";
import doc1 from "../assets/img/documentos/1InformacionParaElCliente.pdf";
import doc2 from "../assets/img/documentos/2ValidacionDeCredito.pdf";
import doc3 from "../assets/img/documentos/3PermisoDeReportesAnteEntidadesLegales.pdf";
import doc4 from "../assets/img/documentos/4Contrato.pdf";

export function Documentospdf() {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <div className="carousel-bx wow zoomIn">
          <h2 className="mb-4">Documentos</h2>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <p>Informacion para el cliente</p>
                <div className="container d-flex justify-content-center mb-3">
                  <a href={doc1}>
                    <img
                      style={{ borderRadius: "10px", height: "90px" }}
                      className="img-fluid "
                      src={document}
                    ></img>
                  </a>
                </div>
                <div>
                  <a className="btn  MyButton" href={doc1} download>
                    Descargar
                  </a>
                </div>
              </div>
              <div className="col">
                <p>Validacion de credito</p>
                <div className="container d-flex justify-content-center mb-3">
                  <a href={doc2}>
                    <img
                      style={{ borderRadius: "10px", height: "90px" }}
                      className="img-fluid "
                      src={document}
                    ></img>
                  </a>
                </div>
                <div>
                  <a className="btn  MyButton" href={doc2} download>
                    Descargar
                  </a>
                </div>
              </div>
              <div className="col">
                <p>Permiso de reportes ante entidades legales</p>
                <div className="container d-flex justify-content-center mb-3">
                  <a href={doc3}>
                    <img
                      style={{ borderRadius: "10px", height: "90px" }}
                      className="img-fluid "
                      src={document}
                    ></img>
                  </a>
                </div>
                <div>
                  <a className="btn  MyButton" href={doc3} download>
                    Descargar
                  </a>
                </div>
              </div>
              <div className="col">
                <p>Contrato</p>
                <div className="container d-flex justify-content-center mb-3">
                  <a href={doc4}>
                    <img
                      style={{ borderRadius: "10px", height: "90px" }}
                      className="img-fluid "
                      src={document}
                    ></img>
                  </a>
                </div>
                <div>
                  <a className="btn MyButton" href={doc4} download>
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
