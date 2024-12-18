import React from 'react';
import './Contato.css';
import Navegacao from './Navegacao';
import RedesSociais from './RedesSociais';

function Contato(){
  return(
    <section className="contato">
            
            <RedesSociais></RedesSociais>

            <Navegacao></Navegacao>

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