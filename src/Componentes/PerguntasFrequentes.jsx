import React, { useState } from 'react';
import faqItems from './PerguntasFrequentesItens';
import './PerguntasFrequentes.css';
import './fonts.css';
import 'react-router-dom';

function PerguntasFrequentes(props) {
  const [visibleIndex, setVisibleIndex] = useState(null); // Estado para armazenar qual resposta está visível

  const mostrarResposta = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Alterna a visibilidade
  };

  return (
    <section className="faq" id="faq">
      <h1>Perguntas Frequentes</h1>
      <div className='faq-item'>
        <ul>
          {faqItems.map((item, index) => (
            <li key={index}>
              <button onClick={() => mostrarResposta(index)}>
                {`${item.question}`}
              </button>
              <p 
                className={`resposta ${visibleIndex === index ? 'show' : ''}`} // Adiciona a classe de transição
              >
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;
