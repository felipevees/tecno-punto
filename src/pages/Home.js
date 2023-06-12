import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  NavBar,
  Banner,
  CarouselC,
  Info,
  Footer,
  FixedButton,
  Button,
} from "../Componentes";

export function Home() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Banner />
        <FixedButton />
      </header>
      <main>
        <Info />
        <CarouselC />
        <Button nombre="Documentos" link="/documentos" />
      </main>
      <footer>
        <hr />
        <Footer />
      </footer>
    </div>
  );
}
