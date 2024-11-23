import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link
import { useEffect } from 'react';
import './Inicio.css';

function Inicio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className="inicio" id="inicio">
      <h1>Descubra o Equilíbrio Emocional</h1>
      <p><strong>Equilíbrio emocional é a chave para uma vida plena.
        <br/> Marque sua jornada de autoconhecimento conosco</strong></p>
      <Link to="/blog"> 
        <button className="botao">Explore</button>
      </Link>
    </section>
  );
}

export default Inicio;
