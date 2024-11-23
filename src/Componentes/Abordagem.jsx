import React from 'react';
import './Abordagem.css';
import abordagem1 from '../images/abordagem 1.png'

function Abordagem(){
  return(
    <section className="abordagem" id="abordagem">
    <div className="abordagem-texto">
        <h1>Abordagem</h1>
        <br/>
        <p>A Terapia Cognitivo-Comportamental (TCC) é uma forma de tratamento psicológico que se baseia na conexão entre nossos pensamentos, sentimentos e comportamentos, reconhecendo como esses elementos influenciam nossa saúde emocional e bem-estar. A TCC é estruturada e focada no presente, concentrando-se em identificar e mudar padrões de pensamento e comportamento que contribuem para problemas emocionais e comportamentais.
        Uma das principais vantagens da TCC é sua abordagem prática, apoiada por evidências científicas. As técnicas e estratégias utilizadas na TCC foram amplamente estudadas e comprovadas como eficazes no tratamento de uma variedade de problemas, incluindo ansiedade, depressão, transtornos de ansiedade, Transtornos de humor, Habilidades socieais, TOC, TEPT e outros.</p>
            <br/><br/>
        <p>Ao capacitar as pessoas com ferramentas e habilidades práticas para lidar com seus pensamentos e emoções, a TCC ajuda a promover autonomia e controle sobre suas vidas. Durante o processo terapêutico, os clientes aprendem a identificar e desafiar pensamentos distorcidos, desenvolvendo estratégias saudáveis para enfrentar seus desafios e promovendo mudanças positivas em sua vida diária.</p>
        <br/><br/>
        <p>Se você está enfrentando dificuldades emocionais ou comportamentais, a TCC oferece uma abordagem prática e eficaz para ajudá-lo a superar seus desafios e alcançar uma vida mais satisfatória e significativa.</p>
    </div>
    <img className='abordagem-img'  src={abordagem1} alt="" />
</section>
  )
}

export default Abordagem;