import React from 'react';
import './Formulario.css';
function Formulario(){

  return(
    <section className="formulario" id="formulario">
            <div className="formulario-itens">
                <form method="post" action="public/scripts/script.php" >
                    <div className="form-group">
                        <label htmlFor="nome" >Nome</label>
                        <input type="text" name="nome" required  />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" required  />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" required  />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="descricao">Mensagem</label>
                        <textarea name="descricao"  cols="30" rows="10" required ></textarea>
                    </div>
                </form>
                    <button name="create" className="botao-enviar" type="submit" value="Enviar">Enviar</button>
            </div>

            <div className="fale-conosco">
                <h1>Fale Conosco</h1>
                <p>Entre em contato conosco usando o nosso formulário. Estamos ansiosos para ouvir de você e ajudá-lo com suas necessidades de construção.</p>
            </div>

        </section>
  )
}

export default Formulario;