import React from "react";
import { Button } from "semantic-ui-react";
import "./MyButton.css";
import { useNavigate } from "react-router-dom";

export function MyButton({ nombre, link }) {
  const navigate = useNavigate();

  return (
    <div className="MyButton">
      <Button
        inverted
        color="purple"
        onClick={() => navigate(`/${link ? link : ""}`)}
      >
        {nombre}
      </Button>
    </div>
  );
}
