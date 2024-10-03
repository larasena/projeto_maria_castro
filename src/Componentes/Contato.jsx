import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Contato.css';

function Contato(){

  const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/');
    };

    const handleNavigateToBlog = () => {
      navigate('/blog');
  };


  return(
    <section className="contato">
            <div className="redes-sociais">
                <a href="index.html"><img src={logo} alt="logo" /></a>
                <p>Juntos conseguimos mudar</p>
                <a href="https://wa.me/5531998651929?text=Olá%20seja%20bem%20vindo%21%20Como%20posso%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp fa-2xl" style={{ color: '#171b26' }}></i>
                </a>


                <a href="https://www.instagram.com/psicologiadamaria/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram fa-2xl" style={{ color: '#171b26' }}></i>
                </a>

                <a href="https://www.linkedin.com/in/maria-luiza-fonseca-12428b1b3/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#171b26' }}></i>
                </a>
            </div>



            <div className="links-uteis" >
              <Link to="inicio" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Início </Link>
              <Link to="blog" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}  onClick={handleNavigateToBlog}>Blog</Link>
              <Link to="depoimentos" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}>Depoimentos</Link>
              <Link to="sobre" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}>Sobre</Link>
              <Link to="localizacao" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}>Localização</Link>
              <Link to="formulario" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}>Formulário</Link>
            </div>



            <div className="contato-dados">
                <div className="item">
                <a href="https://wa.me/5531998651929?text=Olá%20seja%20bem%20vindo%21%20Como%20posso%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-phone fa-2xl"></i>
                </a>
                <p>31 9865-1929</p>
                </div>

                <div className="item">
                    <a href="mailto:contato.marialuizapsi@gmail.com"><i className="fa-solid fa-envelope fa-2xl"></i></a>
                    <p>contato.marialuizapsi@gmail.com</p>
                </div>
            
                <div className="item">
                    <a href="#localizacao"><i className="fa-solid fa-location-dot fa-2xl"></i></a>
                    <p>  R. Álvares Maciel, 362 - Santa Efigênia, Belo Horizonte - MG, 30150-250</p>
                </div>

            </div>

        </section>
  )
}

export default Contato;