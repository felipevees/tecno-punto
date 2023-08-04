import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import whatsapp1 from "../../../assets/img/img2/whatsapp-icon.svg";
import "./FixedButton.css";

export function FixedButton() {
  return (
    <div className="whatsapp-icon">
      <a href="https://wa.link/kpu8i3">
        <img src={whatsapp1} alt="whatsapp"></img>
      </a>
    </div>
  );
}
