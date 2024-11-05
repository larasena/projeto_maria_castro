import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import './Depoimentos.css';

const Depoimentos = () => {
  const settings = {
    dots: true,           // Exibe os pontos de navegação
    infinite: true,       // Permite rotação infinita
    speed: 500,           // Velocidade da transição em milissegundos
    slidesToShow: 1,      // Mostra um slide por vez
    slidesToScroll: 1,    // Rola um slide por vez
    autoplay: true,       // Ativa a rotação automática
    autoplaySpeed: 5000   // Tempo entre os slides (5 segundos)
  };

  return (
    <section className="depoimentos" id="depoimentos">
      <Slider {...settings} className="carousel-container">
        <div className="slide">
          <p>
            A Maria Luiza Castro é uma excelente profissional! Sempre me passa muita confiança e é muito atenciosa, tem me ajudado muito. Sou muito grata!! <br /> - L O
          </p>
        </div>
        <div className="slide">
          <p>
            O meu ano começou de maneira catastrófica e em meio a busca por ajuda encontrei a Maria Luiza Castro, uma profissional excelente, competente, dedicada, e que oferece um suporte maravilhoso para quem está buscando seu primeiro contato com terapia e acredito que para quem já teve contato antes também, para mim está sendo uma montanha russa de emoções e descobertas surpreendentes!<br /> 
            Se você está buscando por ajuda profissional nesse momento difícil ou de auto descoberta, afirmo que não irá se arrepender! <br /> - R H
          </p>
        </div>
        <div className="slide">
          <p>
            Já busquei inúmeros profissionais de psicologia e nenhum me entendeu tão bem quando a Maria Luísa. Me identifiquei de uma forma muito completa, me sinto confortável para falar com ela, sinto progresso, e esperança de melhorias.... E fico me perguntando como que não encontrei ela antes!!! Recomendo 100%! <br /> - E H
          </p>
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>

      <a href="https://g.co/kgs/B87x4CE " target="_blank" rel="noopener noreferrer">
          <button className="botao">Avalie aqui</button>
        </a>
    </section>
  );
};

export default Depoimentos;
