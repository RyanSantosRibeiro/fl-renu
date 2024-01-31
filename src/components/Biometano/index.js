import React, { useEffect } from 'react';
import './style.scss';
import image1 from '../../assets/img/biometano/icon1.png';
import image2 from '../../assets/img/biometano/icon2.png';
import image3 from '../../assets/img/biometano/icon3.png';
import image4 from '../../assets/img/biometano/icon4.png';
import biogas from '../../assets/img/biometano/biogas.jpeg';
import $ from 'jquery';


const Biometano = ({language}) => {

    const active = (e) => {
        if($("#biometano").offset().top - $(window).scrollTop() < 750 && !$(".biometano").hasClass("animate")) {
            $(".biometano").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="biometano" id='biometano'>
             <div className='container'>
                <h2 className='default-title'>{language==0? 'Porque biometano ?':'Why Biomethane?'}</h2>
            </div>
            <div className="container">
                <div className='biometano__image'  style={{backgroundImage: `url(${biogas})`}}>
                    {/* <img src={biogas}/> */}
                </div>
                {language==0?
                <ul>
                    <li>
                    Biometano é um produto derivado da purificação (upgrade) do biogás, que é o gás retirado do processo de decomposição anaeróbica (na ausência de oxigênio) de resíduos orgânicos. Estes resíduos orgânicos podem vir de lixo, esgoto urbano, agricultura, pecuária, suinocultura e gado leiteiro.
                    </li>
                    <li>O biogás tem em sua composição principalmente a presença do metano (CH4) e dióxido de carbono (CO2), variando entre 50 a 70% do total, e, em menores quantidades, o gás sulfídrico (H2S), a umidade (H2O) e outros gases, como o nitrogênio (N2).</li>
                    <li>O processo de upgrading do biogás, leva à purificação e separação do metano e do dióxido de carbono, produzindo o biometano. </li>
                </ul>
                :
                <ul>
                    {/* INGLES */}
                    <li>
                    Biomethane is a product derived from the purification (upgrading) of biogas, which is a gas extracted from the anaerobic decomposition process (in the absence of oxygen) of organic waste. These organic wastes can come from garbage, urban sewage, agriculture, livestock, pig farming, and dairy farming.


                    </li>
                    <li>Biogas primarily consists of methane (CH4) and carbon dioxide (CO2), ranging between 50 to 70% of the total, with smaller amounts of hydrogen sulfide (H2S), moisture (H2O), and other gases such as nitrogen (N2).
</li>
                    <li>The process of upgrading biogas involves the purification and separation of methane and carbon dioxide, resulting in the production of biomethane.
 </li>
                </ul>
                }
                <div className='biometano__list'>
                    <div className='biometano__list__modal'>
                        <img src={image1}/>
                        {language==0?
                        <p><b>Sustentável:</b> Redução de mais de 85% das emissões de carbono no transporte</p>
                        :
                        <p><b>Sustainable:</b> Over 85% reduction in carbon emissions in transportation
                        </p>
                        }
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image2}/>
                        {language==0? 
                        <p><b>Energia Renovável</b></p>
                        :
                        <p><b>Renewable Energy
                        </b></p>
                        }
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image3}/>
                        {language==0? 
                        <p><b>Economia:</b> Redução entre 20% e 30% dos custos com combustível</p>
                        :
                        <p><b>Economy:  </b> 20% to 30% reduction on fuel costs</p>
                        }
                    </div>
                    <div className='biometano__list__modal'>
                        <img src={image4}/>
                        {language==0? 
                        <p><b>Redução de efeitos sonoros</b></p>
                        :
                        <p><b>Noise reduction</b></p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Biometano;