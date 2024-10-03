import React from 'react';
import imagem10 from '../images/imagem10.jpg';
import './Sobre.css';

function Sobre(){
  return (
    <section className="sobre" id="sobre">
            <img src={imagem10} alt="" />
            <div className="sobre-texto">
                <h1>Sobre nós</h1>
                <br />
                <p>Somos um blog dedicado a oferecer conteúdo relevante e informativo na área da psicologia. Nosso objetivo é promover o bem-estar e a saúde mental dos nossos leitores, fornecendo insights e orientações valiosas.
                    <br/><br/>
                Localizada em Belo Horizonte, MG, nossa equipe é composta por profissionais qualificados e apaixonados pelo que fazem. Estamos comprometidos em compartilhar conhecimento e contribuir para o desenvolvimento pessoal de cada indivíduo que nos acompanha.</p>
            </div>
    </section>
  )
}

export default Sobre;