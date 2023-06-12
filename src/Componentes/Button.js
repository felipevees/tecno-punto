import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export function Button({ nombre, link }) {
  return (
    <div className="container text-center mb-5">
      <a className="btn btn-lg MyButton" href={link}>
        {nombre}
      </a>
    </div>
  );
}
