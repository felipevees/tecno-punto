import React from "react";
import "./ClientLayout.css";
import { Footer, NavBar } from "../../Components/Client";

export function ClientLayout({ children }) {
  return (
    <div>
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}
