import React from 'react';
import { Link } from 'react-router-dom';
import './FaqLink.css';

function FaqLink(){
  return(
    <section class="faq-link" id="faq-link">
        <div>
            <h1>Tire suas dúvidas na nossa sessão de perguntas frequentes</h1>
        </div>
        <Link to="/faq"><button id='botaoFaq'>Perguntas Frequentes</button></Link>
    </section>
  )
}

export default FaqLink;