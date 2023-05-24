import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Creditos, Footer } from "./Componentes";

function App() {
  return (
    <div className="container">
      <header className="container mt-4">
        <h1 className="text-center">TECNO PUNTO</h1>
        <hr />
        <Creditos />
        <hr />
        <Footer />
      </header>
    </div>
  );
}

export default App;
