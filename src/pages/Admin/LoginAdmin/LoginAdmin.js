import React from "react";
import { LoginForm } from "../../../Components/Admin";
import "./LoginAdmin.css";

export function LoginAdmin() {
  return (
    <div className="login-asesor">
      <div className="login-asesor__content">
        <h1 className="h1custom">Entrar al panel</h1>
        <LoginForm />
      </div>
    </div>
  );
}
