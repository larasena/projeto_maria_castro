import React from 'react';
import './AvaliacaoPsicologicaPresencial.css';
import presencial from '../images/presencial.png'

function AvaliacaoPsicologicaPresencial(){
  return(
    <section className="avaliacao-presencial" id="avaliacao-presencial">
        <div className="avaliacao-presencial-texto">
            <h1>Acompanhamento Psicológico Presencial</h1>
            <br/>
            <p>A terapia presencial, é o formato mais conhecido e usual da terapia clínica. Aqui você encontra um espaço seguro e controlado, onde o paciente pode se sentir à vontade para compartilhar suas emoções e experiências. A interação face a face permite que o terapeuta perceba nuances na comunicação não verbal, como a linguagem corporal, que enriquecem a compreensão do que está sendo dito. Esse ambiente propício ajuda na construção de um vínculo de confiança, essencial para o processo terapêutico, onde o paciente pode explorar questões profundas de forma mais aberta e sincera. O ambiente do consultório, livre de distrações externas, permite que o paciente se concentre plenamente nas questões discutidas, potencializando os resultados do tratamento. Assim, essa modalidade é especialmente benéfica para aqueles que buscam uma conexão mais profunda e uma experiência terapêutica imersiva</p>
        </div>
        <img src={presencial} alt="" />
    </section>
  )
}

export default AvaliacaoPsicologicaPresencial;