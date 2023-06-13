import React from "react";
import {
  FixedButton,
  Footer,
  Documentospdf,
  Videos,
  Button,
  NavBar,
} from "../Componentes";

export function Documentos() {
  return (
    <div>
      <header>
        <NavBar />
        <FixedButton />
      </header>
      <main>
        <Videos />
        <Documentospdf />
        <Button nombre="Volver" link="/" />
      </main>
      <footer>
        <hr />
        <Footer />
      </footer>
    </div>
  );
}
