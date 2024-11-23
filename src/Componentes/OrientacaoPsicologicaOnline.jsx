import React from 'react';
import orientacaoOnline from '../images/orientacaoOnline.png';
import './OrientacaoPsicologicaOnline.css';

function OrientacaoPsicologicaOnline(){
  return(
    <section className="orientacao-online" id="orientacao-online">
        <div className="orientacao-online-texto">
            <h1>Orientação psicológica online</h1>
            <br/>
            <p>A orientação psicológica online é uma ferramenta valiosa na psicologia clínica e de aconselhamento, oferecendo uma abordagem flexível e acessível para entender a mente e o comportamento dos pacientes. Utilizando plataformas digitais, como videoconferências, questionários online e entrevistas virtuais, os psicólogos podem realizar avaliações detalhadas, explorando questões emocionais, cognitivas e comportamentais que impactam a vida do indivíduo.</p>
            <br/>
            <p>Essa modalidade de avaliação permite que os pacientes expressem seus pensamentos e sentimentos em um ambiente seguro e confidencial, mesmo à distância. Embora o contato físico direto seja ausente, a conexão entre psicólogo e paciente ainda é vital para estabelecer uma relação terapêutica sólida e eficaz.</p>
            <br/>
            <p>Ao adaptar métodos de avaliação tradicionais para o ambiente online, os psicólogos podem oferecer suporte personalizado e promover o bem-estar emocional e psicológico dos pacientes, independentemente de sua localização geográfica ou restrições de mobilidade. Em resumo, a avaliação psicológica online é uma ferramenta eficaz para fornecer suporte emocional e orientação terapêutica, tornando os serviços psicológicos mais acessíveis e convenientes para um público mais amplo.</p>
        </div>
        <img src={orientacaoOnline} alt="" />

    </section>
  )
}

export default OrientacaoPsicologicaOnline;