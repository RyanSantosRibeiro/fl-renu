import React, { useEffect } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const About = () => {

    const active = (e) => {
        if($("#about").offset().top - $(window).scrollTop() < 750 && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="about" id='about'>
             {/* <div className='container'>
                <h2 className='default-title'>Porque about ?</h2>
            </div> */}
            <div className="container">
                <div className='about__line'>
                    <div className='about__line__image'>
                        <img src={logo}/>
                    </div>
                    <div className='about__line__text'>
                        {/* <img src={logo}/> */}
                        <h4>Quem somos!</h4>
                        <p>A Renu é uma plataforma integrada de geração e distribuição de biometano.</p>
                        <p>
                            Geramos o biometano a partir de uma gama de pequenos e médios produtores de suínos e gado e comercializamos por meio de contratos de fornecimento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;