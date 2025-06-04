import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contacto";
import Formacion from "./components/Formacion";
import Skills from "./components/Skills";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/formacion" element={<Formacion />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Herramienta LINK para navegar sin recargar la pagina, es parecido a la etiqueta HTML <a></a>

//<Link className="prueba" to="/rutaQueDeseo> Descripcion</Link>;
