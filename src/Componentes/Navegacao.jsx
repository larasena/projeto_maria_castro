import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Navegacao.css';

function Navegacao(){

  const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/');
    };

    const handleNavigateToBlog = () => {
      navigate('/blog');
  };

  return(
    <div className="links-uteis" >
      <Link to="inicio" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Início </Link>
      <Link to="blog" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }}  onClick={handleNavigateToBlog}>Blog</Link>
      <Link to="depoimentos" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Depoimentos</Link>
      <Link to="sobre" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Sobre</Link>
      <Link to="localizacao" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Localização</Link>
      <Link to="formulario" smooth={true} duration={800} style={{ cursor: 'pointer', marginRight: '15px' }} onClick={handleNavigateToHome}>Formulário</Link>
    </div>
  )
}

export default Navegacao;