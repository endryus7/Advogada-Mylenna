import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Atuacao from "./sections/Atuacao";
import Depoimentos from "./sections/Depoimentos";
import Contato from "./sections/Contato";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Atuacao />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
