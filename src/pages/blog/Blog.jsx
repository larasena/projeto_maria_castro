import React from "react";
import Menu from '../../Componentes/Menu';
import { useEffect } from 'react';
import Abordagem from "../../Componentes/Abordagem";
import AvaliacaoPsicologicaPresencial from "../../Componentes/AvaliacaoPsicologicaPresencial";

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

    </div>
  )
}

export default Blog;