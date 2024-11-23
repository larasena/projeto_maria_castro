import React from 'react';
import artigosItens from './artigosItens';  // Certifique-se de que o caminho esteja correto
import './Artigos.css';

function Artigos({ artigos = artigosItens }) {  // Usa artigosItens como valor padrão
  return (
    <section className="artigos" id="artigos">
      <div className="artigos-texto">
        <h1>Saúde Mental</h1>
        <br />
        <p>
          A importância do bem-estar psicológico é fundamental para o equilíbrio
          e a qualidade de vida das pessoas. Ela não se limita apenas à ausência
          de doenças mentais, mas também abrange aspectos como o equilíbrio
          emocional, a capacidade de enfrentar o estresse e manter
          relacionamentos saudáveis. Aqui estão alguns pontos sobre a relevância
          desse aspecto:
        </p>

        <ol>
          {artigos.map((artigo) => (
            <li key={artigo.index}>
              <b>{artigo.titulo}: </b>{artigo.descricao}
            </li>
          ))}
        </ol>
      </div>
      <img src="public/assets/images/saude-mental.png" alt="" />
    </section>
  );
}

export default Artigos;
