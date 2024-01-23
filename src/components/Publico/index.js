import React, { useEffect } from 'react';
import './style.scss';
import icon1 from '../../assets/img/solucao/icon1.png';
import icon2 from '../../assets/img/solucao/icon2.png';
import ok from '../../assets/img/solucao/correct.png';
import $ from 'jquery';


const Publico = () => {

    const active = (e) => {
        if($("#publico").offset().top - $(window).scrollTop() < 750 && !$(".publico").hasClass("animate")) {
            $(".publico").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="publico" id='publico'>
             <div className='container'>
                <h2 className='default-title'>Nossa Solução</h2>
            </div>
            <div className="container">
                    <div className='publico__left publico__modal' >
                        <h3>Pequenos e médios produtores</h3>
                        <p>Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos</p>
                        <img src={icon1}/>
                        <ul>
                            <li><img src={ok}/>Renda extra mensal relevante</li>
                            <li><img src={ok}/>Time dedicado de instalação e manutenção da Renu</li>
                            <li><img src={ok}/>Garantia em caso de problemas técnicos</li>
                        </ul>
                    </div>
                    <div className='publico__right publico__modal'>
                        <h3>Empresas</h3>
                        <p>Fornecimento de biometano para empresas consumidoras de diesel</p>
                        <img src={icon2}/>
                        <ul>
                            <li><img src={ok}/>Garantia de volume e nível de serviço contratado</li>
                            <li><img src={ok}/>Redução drástica da emissão de carbono</li>
                            <li><img src={ok}/>Economia financeira relevante (50-80% do custo com  combustível)</li>
                            <li><img src={ok}/>Flexibilidade: opção por receber o biometano direto na planta ou utilizar logística própria</li>
                            <li><img src={ok}/>Auxílio na conversão da frota para biometano</li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Publico;