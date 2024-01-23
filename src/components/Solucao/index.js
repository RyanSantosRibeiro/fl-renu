import React, { useEffect } from 'react';
import './style.scss';
import icon1 from '../../assets/img/solucao/icon1.png';
import icon2 from '../../assets/img/solucao/icon2.png';
import bg1 from '../../assets/img/solucao/bg1.jpg';
import bg2 from '../../assets/img/solucao/bg2.jpg';
import ok from '../../assets/img/solucao/correct.png';
import $ from 'jquery';


const Solucao = () => {

    const active = (e) => {
        if($("#solucao").offset().top - $(window).scrollTop() < 750 && !$(".solucao").hasClass("animate")) {
            $(".solucao").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="solucao" id='solucao'>
             {/* <div className='container'>
                <h2 className='default-title'>Nossa Solução</h2>
            </div> */}
            <div className='solucao__wrapper'  
            // style={{backgroundImage: `url(${bg1})`}}
            >
                <div className="container">
                    <div className='solucao__left solucao__modal' >
                        <h3>Para Consumidores</h3>
                        {/* <p>Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos</p> */}
                        <ul>
                            <li><img src={ok}/><p>Nossas solução de aplica a empresas baseadas no interior do país, próximas de <b>regiões de produção agrícola</b></p></li>
                            <li><img src={ok}/><p>A Renu produz e <b>fornece biometano</b> seguindo as especificações e nível de serviço acordados</p></li>
                            <li><img src={ok}/><p>Possibilitamos a <b>substituição do diesel pelo biometano</b> em sua frota de caminhões e maquinário industrial</p></li>
                            <li><img src={ok}/><p>Ao adotar 100% de biometano na frota, é possível obter <b>redução de mais de 85% da emissão de carbono</b></p></li>
                            <li><img src={ok}/><p>A utilização de biometano permite economia financeira relevante, com <b>redução de 50 a 80% dos custos totais com combustível</b> na sua empresa</p></li>
                        </ul>
                        <a href='/fl-renu'>
                            Saiba mais
                        </a>
                    </div>
                    <div className='solucao__img'  style={{backgroundImage: `url(${bg2})`}}>
                        {/* <img src={bg1}/> */}
                    </div>
                </div>
            </div>
            <div className='solucao__wrapper'>
                <div className="container">
                    <div className='solucao__img'  style={{backgroundImage: `url(${bg1})`}}>
                        {/* <img src={bg1}/> */}
                    </div>
                    <div className='solucao__right solucao__modal'>
                        <h3>Para Produtores Rurais</h3>
                        {/* <p>Fornecimento de biometano para empresas consumidoras de diesel</p> */}
                        {/* <img src={icon2}/> */}
                        <ul>
                            <li><img src={ok}/><p>A Renu <b>instala e mantém toda a infraestrutura</b> para conversão do biogás em biometano na sua fazenda</p></li>
                            <li><img src={ok}/><p><b>A Renu comercializa o biometano,</b> sem que o produtor rural tenha que se preocupar com isso</p></li>
                            <li><img src={ok}/><p>Geramos uma <b>renda extra mensal significativa (Até R$ X / mês)</b> para o produtor com base na produção de biometano gerada, independente do quanto foi comercializado</p></li>
                            <li><img src={ok}/><p><b>Caso o produtor não possua biodigestor</b> na fazenda, a Renu viabiliza essa estrutura</p></li>
                        </ul>
                        <a href='/fl-renu'>
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solucao;