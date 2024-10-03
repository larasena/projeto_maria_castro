  import React from "react";
  import Menu from '../../Componentes/Menu';
  import PerguntasFrequentes from "../../Componentes/PerguntasFrequentes";
import Formulario from "../../Componentes/Formulario";
import Contato from "../../Componentes/Contato";
import Footer from "../../Componentes/Footer";

  function Faq(){
    return(
      <div>
        <Menu></Menu>
        <PerguntasFrequentes></PerguntasFrequentes>
        <hr/>
        <Formulario></Formulario>
        <Contato></Contato>
        <hr />
        <Footer></Footer>
      </div>
    )
  }

  export default Faq;