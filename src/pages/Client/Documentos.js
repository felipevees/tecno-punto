import React from "react";
import {
  FixedButton,
  MyButton,
  Documentospdf,
  Videos,
} from "../../Components/Client";

export function Documentos() {
  return (
    <div>
      <FixedButton />
      <Videos />
      <Documentospdf />
      <MyButton nombre="Volver" />
    </div>
  );
}
