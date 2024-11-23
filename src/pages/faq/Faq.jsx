import React from "react";
import Menu from '../../Componentes/Menu';
import PerguntasFrequentes from "../../Componentes/PerguntasFrequentes";
import Contato from "../../Componentes/Contato";
import Footer from "../../Componentes/Footer";
import { useEffect } from 'react';

  function Faq(){

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])


    return(
      <div>
        <Menu></Menu>
        <PerguntasFrequentes></PerguntasFrequentes>
        <hr/>
        <Contato></Contato>
        <hr />
        <Footer></Footer>
      </div>
    )
  }

  export default Faq;