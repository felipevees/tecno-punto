import React from "react";
import "./Credit.css";

export function Credit({ client }) {
  console.log(client);
  return (
    <div className="credit">
      <h1>Credit {client.first_name}</h1>
    </div>
  );
}
