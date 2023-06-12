import React from "react";
import {
  FixedButton,
  Footer,
  Documentospdf,
  Videos,
  Button,
} from "../Componentes";

export function Documentos() {
  return (
    <div>
      <header>
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
