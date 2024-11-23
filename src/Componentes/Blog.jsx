import React from 'react';
import presencial from '../images/presencial.jpg';
import online from '../images/online.jpg';
import saudeMental from '../images/saudeMental.png';
import imagem4 from '../images/imagem4.jpg';
import imagem5 from '../images/imagem5.jpg';
import imagem6 from '../images/imagem6.jpg';
import imagem7 from '../images/imagem7.jpg';
import imagem8 from '../images/imagem8.jpg';
import imagem9 from '../images/imagem9.jpg';
import { useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';


function Blog(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return(
    <section className='blog'>
      <div className="texto-principal">
        <p>Bem-vindo ao meu espaço! Meu nome é Maria Luiza Fonseca Castro, sou psicóloga registrada no Conselho Regional de Psicologia (CRP: 04/66085) , especializada em Terapia Cognitivo-Comportamental. Com dedicação e comprometimento, estou aqui para oferecer suporte e orientação durante sua jornada de autoconhecimento e transformação. Com minha experiência e conhecimento, busco auxiliar meus clientes a superarem desafios emocionais, desenvolverem habilidades de enfrentamento eficazes e conquistarem uma vida mais equilibrada e satisfatória. </p> 
        <br />
        <p>Cada pessoa é única, e é por isso que adoto uma abordagem personalizada em minha prática clínica. Meu objetivo é criar um ambiente acolhedor e seguro, onde você se sinta à vontade para compartilhar suas experiências e desafios. Trabalhando juntos, vamos explorar suas preocupações e traçar um caminho rumo ao seu bem-estar emocional e realização pessoal.
        </p> 
        <br />
        <p>Sinta-se à vontade para entrar em contato e agendar uma consulta. Estou aqui para ajudá-lo a iniciar essa jornada de desenvolvimento. Espero poder acompanhá-lo nesse processo e ser parte da sua trajetória. </p>
      </div>

      <div className="imagens-blog">
        <div className="topicos" >
            <img src={presencial} alt="imagem1" />
            <h1>Acompanhamento psicológico presencial</h1>
            <p>Sessão individual para diagnóstico e avaliação emocional.</p>
            <Link to="/blog" className="smooth-scroll"> {/* Link para a página do blog */}
              <i className="fa-solid fa-arrow-right-long"></i> {/* Ícone Font Awesome */}
            </Link>
        </div>
                
        <div className="topicos">
        <img src={online} alt="online" />
            <h1>Orientação psicológica online</h1>
            <p>Apoio psicológico por videochamada para consultas remotas.</p>
            <Link to="/blog"  className="smooth-scroll"><i className="fa-solid fa-arrow-right-long"></i></Link>
        </div >
                
        <div className="topicos">
            <img src={saudeMental} alt="" />
            <h1>Conteúdos sobre saúde mental</h1>
            <p>Leia conteúdos informativos e dicas sobre bem-estar emocional.</p>
            <Link to="/blog"  className="smooth-scroll"><i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
                
      </div>

      <div className="imagens">
          <img src={imagem4} alt="" />
          <img src={imagem5} alt="" />
          <img src={imagem6} alt="" />
          <img src={imagem7} alt="" />
          <img src={imagem8} alt="" />
          <img src={imagem9} alt="" />
      </div>
      <Link to="/faq"><button id='botaoFaq'>Perguntas Frequentes</button></Link>
    </section>

    
  )
}

export default Blog;