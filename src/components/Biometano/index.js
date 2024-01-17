import React, { useEffect } from 'react';
import './style.scss';
import image1 from '../../assets/img/biometano/icon1.png';
import image2 from '../../assets/img/biometano/icon2.png';
import image3 from '../../assets/img/biometano/icon3.png';
import image4 from '../../assets/img/biometano/icon4.png';
import $ from 'jquery';


const Biometano = () => {

    const active = (e) => {
        if($("#biometano").offset().top - $(window).scrollTop() < 450 && !$(".biometano").hasClass("animate")) {
            $(".biometano").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="biometano" id='biometano'>
             <div className='container'>
                <h2 className='default-title'>Porque biometano ?</h2>
            </div>
            <div className="container">
                <ul>
                    <li>
                    Biometano é um produto derivado da purificação (upgrade) do biogás, que é o gás retirado do processo de decomposição anaeróbica (na ausência de oxigênio) de resíduos orgânicos. Estes resíduos orgânicos podem vir de lixo, esgoto urbano, agricultura, pecuária, suinocultura e gado leiteiro.
                    </li>
                    <li>O biogás tem em sua composição principalmente a presença do metano (CH4) e dióxido de carbono (CO2), variando entre 50 a 70% do total, e, em menores quantidades, o gás sulfídrico (H2S), a umidade (H2O) e outros gases, como o nitrogênio (N2).</li>
                    <li>O processo de upgrading do biogás, leva à purificação e separação do metano e do dióxido de carbono, produzindo o biometano. </li>
                </ul>
                <div className='biometano__list'>
                    <div className='biometano__list__modal'>
                        <img src={image1}/>
                        <p><b>Sustentável:</b> Redução de mais de 85% das emissões de carbono no transporte</p>
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image2}/>
                        <p><b>Sustentável:</b> Redução de mais de 85% das emissões de carbono no transporte</p>
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image3}/>
                        <p><b>Sustentável:</b> Redução de mais de 85% das emissões de carbono no transporte</p>
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image4}/>
                        <p><b>Sustentável:</b> Redução de mais de 85% das emissões de carbono no transporte</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Biometano;