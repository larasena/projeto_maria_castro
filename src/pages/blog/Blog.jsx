import React from "react";
import Menu from '../../Componentes/Menu';
import { useEffect } from 'react';
import Abordagem from "../../Componentes/Abordagem";
import AvaliacaoPsicologicaPresencial from "../../Componentes/AvaliacaoPsicologicaPresencial";
import OrientacaoPsicologicaOnline from "../../Componentes/OrientacaoPsicologicaOnline";
import Artigos from "../../Componentes/Artigos";



function Blog(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return(
    <div>
      <Menu></Menu>
      <Abordagem></Abordagem>
      <hr ></hr>
      <AvaliacaoPsicologicaPresencial></AvaliacaoPsicologicaPresencial>
      <hr></hr>
      <OrientacaoPsicologicaOnline></OrientacaoPsicologicaOnline>
      <hr></hr>
      <Artigos></Artigos>
      <hr></hr>
      

    </div>
  )
}

export default Blog;