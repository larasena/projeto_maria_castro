import React from 'react';
import Menu from '../../Componentes/Menu';
import Inicio from '../../Componentes/Inicio';
import Blog from '../../Componentes/Blog';
import Depoimentos from '../../Componentes/Depoimentos';
import Sobre from '../../Componentes/Sobre';
import Localizacao from '../../Componentes/Localizacao';
import Contato from '../../Componentes/Contato';
import Footer from '../../Componentes/Footer';

function PaginaInicial() {
  return (
    <div>
      <Menu></Menu>
      <Inicio></Inicio>
      <Blog></Blog>
      <hr/>
      <Depoimentos></Depoimentos>
      <hr />
      <Sobre></Sobre>
      <hr/>
      <Localizacao></Localizacao>
      <Contato></Contato>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default PaginaInicial;



            