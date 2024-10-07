import React from 'react';
import './AvaliacaoPsicologicaPresencial.css';
import presencial from '../images/presencial.png'

function AvaliacaoPsicologicaPresencial(){
  return(
    <section className="avaliacao-presencial" id="avaliacao-presencial">
        <div className="avaliacao-presencial-texto">
            <h1>Avaliação Psicológica Presencial</h1>
            <br/>
            <p>A avaliação psicológica presencial é uma prática crucial na psicologia clínica e de aconselhamento. Envolve a aplicação de diversos métodos, como entrevistas clínicas, testes padronizados e observação do comportamento, com o objetivo de entender profundamente a mente e o comportamento do paciente. Essa abordagem proporciona uma compreensão holística das questões emocionais, cognitivas e comportamentais que podem afetar a vida do indivíduo. Além disso, cria um espaço seguro e confidencial para que o paciente expresse seus pensamentos e sentimentos, facilitando o processo terapêutico. O contato direto entre psicólogo e paciente é fundamental para estabelecer uma conexão humana e desenvolver uma relação terapêutica eficaz. Em suma, a avaliação psicológica presencial é essencial para fornecer suporte personalizado e promover o bem-estar emocional e psicológico do paciente.</p>
        </div>
        <img src={presencial} alt="" />
    </section>
  )
}

export default AvaliacaoPsicologicaPresencial;