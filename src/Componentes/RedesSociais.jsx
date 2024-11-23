import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import './RedesSociais.css';

function RedesSociais(){
  return(
    <div className="redes-sociais">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
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
  )
}

export default RedesSociais;