import React from 'react';
import './Localizacao.css';

function Localizacao() {

  return (
    <section className="localizacao" id="localizacao">
      <div className="localizacao-texto">
        <h2>Localização</h2>
        <p>Belo Horizonte/MG</p>
      </div>
      {/* Adicionando o iframe abaixo da div */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7501.991116802357!2d-43.922672!3d-19.924592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6998d6e92c885%3A0xb680764fb474d9e8!2sS%C3%A3o%20LUCAS%20-%20R.%20%C3%81lvares%20Maciel%2C%20362%20-%20Santa%20Efig%C3%AAnia%2C%20Belo%20Horizonte%20-%20MG%2C%2030150-250!5e0!3m2!1spt-BR!2sbr!4v1727790494394!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Localizacao;
