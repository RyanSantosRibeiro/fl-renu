import React, { useEffect } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const About = ({language}) => {

    const active = (e) => {
        if($("#about").offset()?.top - $(window).scrollTop() < 750 && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="about" id='renu'>
             {/* <div className='container'>
                <h2 className='default-title'>Porque about ?</h2>
            </div> */}
            <div className="container">
                <div className='about__line'>
                    <div className='about__line__image'>
                        <img src={logo}/>
                    </div>
                    {language==0?
                    <div className='about__line__text'>
                        {/* <img src={logo}/> */}
                        <h4>Quem somos!</h4>
                        <p>A Renu é uma plataforma integrada de geração e distribuição de biometano.</p>
                        <p>Geramos biometano a partir de uma gama de pequenos e médios produtores de suínos e gado e o comercializamos por meio de contratos de fornecimento.</p>
                        <p>Além disso, temos uma solução de aluguel de módulos de biometano direto para o produtor rural, que pode gerar biometano para consumo próprio.</p>
                    </div>
                    :   
                    <div className='about__line__text'>
                        {/* <img src={logo}/> */}
                        <h4>About Us</h4>
                        <p>Renu is an integrated platform for the generation and distribution of biomethane.</p>
                        <p>We produce biomethane from a range of small and medium-sized producers of pigs and cattle, and we market it to companies through supply contracts.</p>
                    </div> 
                }
                </div>
            </div>
        </section>
    )
}

export default About;