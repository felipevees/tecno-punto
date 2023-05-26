import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  NavBar,
  Banner,
  CarouselC,
  Info,
  Footer,
  FixedButton,
} from "./Componentes";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Banner />
        <FixedButton />
      </header>
      <main>
        <Info />
        <CarouselC />
      </main>
      <footer>
        <hr />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
