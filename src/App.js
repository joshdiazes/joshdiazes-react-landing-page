import React from "react";
import Contacto from "./components/Contacto";
import Estudios from "./components/Estudios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Inicio/>
        <Estudios/>
        <Skills/>
        <Proyectos/>
        <Contacto/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
