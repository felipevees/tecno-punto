import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  MyButton,
  Banner,
  CarouselC,
  Info,
  FixedButton,
} from "../../Components/Client";

export function Home() {
  return (
    <div>
      <Banner />
      <FixedButton />
      <Info />
      <CarouselC />
      <MyButton nombre="Consultar mi credito" link="consultCredit" />
      <MyButton nombre="Documentos" link="documentos" />
    </div>
  );
}
