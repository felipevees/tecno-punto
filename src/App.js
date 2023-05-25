import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  NavBar,
  Banner,
  CarouselC,
  Info,
  Creditos,
  Footer,
} from "./Componentes";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Banner />
        <Info />
        <CarouselC />
        <Creditos />
        <hr />
        <Footer />
      </header>
    </div>
  );
}

export default App;
