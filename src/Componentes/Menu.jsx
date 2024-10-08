import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import './Menu.css';
import './fonts.css';

function Menu() {
  return (
    <section className='menu'>
      <div className='logo'>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div>
        <a href="https://wa.me/5531998651929?text=Ol%C3%A1+seja+bem+vindo%21+Como+posso+ajudar%3F+" target="_blank" rel="noopener noreferrer">
          <button className="botao">Vamos conversar?</button>
        </a>
      </div>
    </section>

  );
}

export default Menu;
