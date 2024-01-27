import React, { useEffect } from 'react';
import './style.scss';
import icon1 from '../../assets/img/solucao/icon1.png';
import icon2 from '../../assets/img/solucao/icon2.png';
import logo from '../../assets/img/logo.png';
import ok from '../../assets/img/solucao/correct.png';
import $ from 'jquery';


const Publico = ({language}) => {

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
                <h2 className='default-title'>{language==0?'Nossas Soluções':'Our Solutions'}</h2>
            </div>
            <div className="container">
                    <div className='publico__logo'>
                    <img  src={logo} alt=''/>

                    </div>
                    <div className='publico__left publico__modal' >
                        {language ==0 ?<>
                            <h3>Pequenos e médios produtores</h3>
                            <p>Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos</p>
                            <img src={icon1}/>
                            <ul>
                                <li>Benefícios:</li>
                                <li><img src={ok}/><p><b>Renda extra</b> mensal relevante</p></li>
                                <li><img src={ok}/><p>Time dedicado de <b>instalação e manutenção da Renu</b></p></li>
                                <li><img src={ok}/><p><b>Garantia</b> em caso de problemas técnicos</p></li>
                                <li><img src={ok}/><p>O biometano gerado na propriedade rural é <b>comercializado</b> pela Renu</p></li>
                            </ul>
                        </>:<>
                            {/* INGLES */}
                            <h3>Small and medium-sized producers</h3>
                            <p>Implementation of biomethane modules to purify the biogas generated within the livestock and swine farming operations</p>
                            <img src={icon1}/>
                            <ul>
                                <li>Benefits:</li>
                                <li><img src={ok}/><p>Substantial enhancement of <b>monthly income</b></p></li>
                                <li><img src={ok}/><p>Renu has its own <b>implementation and maintenance team</b></p></li>
                                <li><img src={ok}/><p><b>Guarantee </b>in the event of technical issues</p></li>
                                <li><img src={ok}/><p>The produced <b>biomethane is marketed by Renu</b></p></li>
                            </ul>
                        </>}
                        
                    </div>
                    <div className='publico__right publico__modal'>
                        {language == 0 ? <>
                            <h3>Empresas</h3>
                            <p>Fornecimento de biometano para empresas consumidoras de diesel</p>
                            <img src={icon2}/>
                            <ul>
                                <li>Benefícios:</li>
                                <li><img src={ok}/><p><b>Garantia de volume e nível de serviço</b> contratado</p></li>
                                <li><img src={ok}/><p><b>Menor risco operacional:</b> geração de biometano descentralizada = <b>estabilidade de fornecimento</b></p></li>
                                <li><img src={ok}/><p><b>Capex reduzido</b> e <b>implantação em etapas</b></p></li>
                                <li><img src={ok}/><p>Redução drástica da <b>emissão de carbono</b></p></li>
                                <li><img src={ok}/><p><b>Economia</b>  de 50-80% do custo com  combustível</p></li>
                                <li><img src={ok}/><p><b>Flexibilidade:</b>  opção por receber o biometano direto na planta ou utilizar logística própria</p></li>
                                <li><img src={ok}/><p>Auxílio na <b>conversão da frota</b> para biometano</p></li>
                            </ul>
                        </>:<>
                            {/* INGLES */}
                            <h3>Companies</h3>
                            <p>Supplying biomethane to diesel-consuming companies</p>
                            <img src={icon2}/>
                            <ul>
                                <li>Benefits:</li>
                                <li><img src={ok}/><p><b>Guarantee of contracted volume and service level</b></p></li>
                                <li><img src={ok}/><p><b>Reduced operational risk:</b> decentralized biomethane generation = supply stability</p></li>
                                <li><img src={ok}/><p><b>Lower Capex and phased deployment.</b></p></li>
                                <li><img src={ok}/><p>Substantial reduction in <b>carbon emissions.</b></p></li>
                                <li><img src={ok}/><p><b>Reduction of 50-80% on fuel cost</b></p></li>
                                <li><img src={ok}/><p><b>Flexibility:</b>option to receive biomethane directly at the plant or utilize own logistics</p></li>
                                <li><img src={ok}/><p>Assistance in <b>fleet conversion</b></p></li>
                            </ul>
                        </>}
                        
                    </div>
                </div>
        </section>
    )
}

export default Publico;