import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "../assets/img/logos/logo-dark.jpg";
import navIcon3 from "../assets/img/img2/nav-icon3.svg";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid ">
        <a href="#home">
          <img
            src={logo}
            className="img-fluid "
            alt="logo"
            style={{
              height: "40px",
              marginRight: "15px",
            }}
          ></img>
        </a>
        <a className="navbar-brand" href="#home">
          TECNO-CREDITO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="link1"
                className="nav-link active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a id="link2" className="nav-link active" href="#sobre-nosotros">
                Sobre nosotros
              </a>
            </li>

            <li className="nav-item">
              <a id="link4" className="nav-link active" href="#productos">
                Productos
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://instagram.com/tecnocreditooficial?igshid=MzRlODBiNWFlZA==">
                <img src={navIcon3} alt="instagram"></img>
              </a>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}
