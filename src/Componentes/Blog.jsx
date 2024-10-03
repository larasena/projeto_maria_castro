import React from 'react';
import imagem1 from '../images/imagem1.jpg';
import imagem2 from '../images/imagem2.jpg';
import imagem3 from '../images/imagem3.jpg';
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
        <p>Bem-vindo ao meu espaço! Meu nome é Maria Castro, sou psicóloga com especialização em Terapia Cognitivo-Comportamental. Com dedicação e comprometimento, estou aqui para oferecer suporte e orientação durante sua jornada de autoconhecimento e transformação. Com minha experiência e conhecimento, busco auxiliar meus clientes a superarem desafios emocionais, desenvolverem habilidades de enfrentamento eficazes e conquistarem uma vida mais equilibrada e satisfatória. </p> 
        <br />
        <p>Cada pessoa é única, e é por isso que adoto uma abordagem personalizada em minha prática clínica. Meu objetivo é criar um ambiente acolhedor e seguro, onde você se sinta à vontade para compartilhar suas experiências e desafios. Trabalhando juntos, vamos explorar suas preocupações e traçar um caminho rumo ao seu bem-estar emocional e realização pessoal. 
        </p> 
        <br />
        <p>Como profissional, sou registrada no Conselho Regional de Psicologia (CRP: 04/66085) , seguindo os mais altos padrões éticos e de conduta profissional. Sinta-se à vontade para entrar em contato e agendar uma consulta. Estou aqui para ajudá-lo a iniciar essa jornada de autoconhecimento e transformação. Espero poder acompanhá-lo nesse processo e ser parte da sua trajetória de crescimento e desenvolvimento.</p>
      </div>

      <div className="imagens-blog">
        <div className="topicos" >
            <img src={imagem1} alt="imagem1" />
            <h1>Avaliação psicológica presencial</h1>
            <p>Sessão individual para diagnóstico e avaliação emocional.</p>
            <Link to="/blog" className="smooth-scroll"> {/* Link para a página do blog */}
              <i className="fa-solid fa-arrow-right-long"></i> {/* Ícone Font Awesome */}
            </Link>
        </div>
                
        <div className="topicos">
        <img src={imagem2} alt="imagem2" />
            <h1>Orientação psicológica online</h1>
            <p>Apoio psicológico por videochamada para consultas remotas.</p>
            <Link to="/blog"  className="smooth-scroll"><i className="fa-solid fa-arrow-right-long"></i></Link>
        </div >
                
        <div className="topicos">
            <img src={imagem3} alt="" />
            <h1>Artigos sobre saúde mental</h1>
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
      <Link to="/faq"><button>Perguntas Frequentes</button></Link>
    </section>

    
  )
}

export default Blog;