import React, { useEffect } from 'react';
import './style.scss';
import icon1 from '../../assets/img/solucao/icon1.png';
import icon2 from '../../assets/img/solucao/icon2.png';
import bg1 from '../../assets/img/solucao/bg1.jpg';
import bg2 from '../../assets/img/solucao/bg2.jpg';
import bg3 from '../../assets/img/solucao/logo.png';
import ok from '../../assets/img/solucao/correct.png';
import $ from 'jquery';


const Solucao = ({language}) => {

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
            {/* <div className='solucao__wrapper'>
                <div className="container">
                    <div className='solucao__img solucao__img--logo'  style={{backgroundImage: `url(${bg3})`}}>
                    </div>
                    <div className='solucao__right solucao__modal'>
                        <h3>Locação de módulos</h3>
                        <p> Modelo de locação de módulos de produção de biometano para produtores rurais</p>
                        <ul>
                            <li><img src={ok}/><p>Possibilidade de <b>locar o equipamento e comprá-lo no futuro</b></p></li>
                            <li><img src={ok}/><p><b>Time dedicado</b> de instalação e manutenção da Renu</p></li>
                            <li><img src={ok}/><p><b>Garantia</b> em caso de problemas técnicos</p></li>
                            <li><img src={ok}/><p><b>Economia</b> financeira relevante <b>(50-80% do custo com  combustível)</b></p></li>
                        </ul>
                        <a href='/fl-renu'>
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div> */}
            <div className='solucao__wrapper' id='consumidores'>
                <div className="container">
                    <div className='solucao__left solucao__modal' >
                        {language==0?<>
                            <h3>Para Consumidores</h3>
                            {/* <p>Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos</p> */}
                            <ul>
                                <li><img src={ok}/><p>Nossas solução se aplica a empresas baseadas no interior do país, próximas de <b>regiões de produção agrícola</b></p></li>
                                <li><img src={ok}/><p>A Renu produz e <b>fornece biometano</b> seguindo as especificações e nível de serviço acordados</p></li>
                                <li><img src={ok}/><p>Possibilitamos a <b>substituição do diesel pelo biometano</b> em sua frota de caminhões e maquinário industrial</p></li>
                                <li><img src={ok}/><p>A produção de biometano é descentralizada, gerando <b>menores riscos operacionais e maior estabilidade no fornecimento</b></p></li>
                                <li><img src={ok}/><p>O consumidor terá <b>baixa necessidade de Capex</b> (investimentos), focado apenas na substituição da frota por veículos movidos a biometano. Além disso, o projeto é implementado de forma faseada.</p></li>

                                <li><img src={ok}/><p>Ao adotar 100% de biometano na frota, é possível obter <b>redução de mais de 85% da emissão de carbono</b></p></li>
                                <li><img src={ok}/><p>A utilização de biometano permite economia financeira relevante, com <b>redução de 50 a 80% dos custos totais com combustível</b> na sua empresa</p></li>
                            </ul>
                            <a href='/fl-renu'>
                                Saiba mais
                            </a>
                        </>:<>
                            {/* INGLES */}
                            <h3>For Consumers</h3>
                            {/* <p>Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos</p> */}
                            <ul>
                                <li><img src={ok}/><p>Our solution applies to businesses based in rural areas, <b>close to agricultural production regions</b></p></li>
                                <li><img src={ok}/><p>Renu <b>produces and supplies biomethane</b> according to agreed-upon specifications and service levels</p></li>
                                <li><img src={ok}/><p>We enable the <b>replacement of diesel for biomethane</b> in your fleet of trucks and industrial machinery</p></li>
                                <li><img src={ok}/><p>Biomethane production is decentralized, resulting in <b>lower operational risks and greater supply stability</b></p></li>

                                <li><img src={ok}/><p><b>Reduced capital expenditure requirements,</b> with a primary focus on fleet replacement through biomethane-powered vehicles. Moreover, the <b>project is executed in gradual phases</b></p></li>

                                <li><img src={ok}/><p>By adopting 100% biomethane in the fleet, it is possible to achieve a <b>reduction of over 85% in carbon emissions</b></p></li>
                                <li><img src={ok}/><p>The use of biomethane allows for <b>significant financial savings,</b> with a reduction of 50 to 80% in total fuel costs for your company</p></li>
                            </ul>
                            <a href='/fl-renu'>
                                Learn more
                            </a>
                        </>}
                        
                    </div>
                    <div className='solucao__img'  style={{backgroundImage: `url(${bg2})`}}>
                        {/* <img src={bg1}/> */}
                    </div>
                </div>
            </div>
            <div className='solucao__wrapper' id='produtores-rurais'>
                <div className="container">
                    <div className='solucao__img'  style={{backgroundImage: `url(${bg1})`}}>
                        {/* <img src={bg1}/> */}
                    </div>
                    <div className='solucao__right solucao__modal'>
                        {language==0?<>
                            <h3>Para Produtores Rurais</h3>
                            {/* <p>Fornecimento de biometano para empresas consumidoras de diesel</p> */}
                            {/* <img src={icon2}/> */}
                            <ul>
                                <li><img src={ok}/><p>A Renu <b>instala e mantém toda a infraestrutura</b> para conversão do biogás em biometano na sua fazenda</p></li>
                                <li><img src={ok}/><p><b>A Renu comercializa o biometano,</b> sem que o produtor rural tenha que se preocupar com isso</p></li>
                                <li><img src={ok}/><p>Geramos uma <b>renda extra mensal significativa</b> para o produtor com base na produção de biometano gerada, independente do quanto foi comercializado</p></li>
                                <li><img src={ok}/><p><b>Caso o produtor não possua biodigestor</b> na fazenda, a Renu viabiliza essa estrutura</p></li>
                                <li><img src={ok}/><p>Caso o produtor tenha interesse em <b>alugar o módulo de biometano,</b> a Renu possui essa oferta para você</p></li>
                            </ul>
                            <a href='/fl-renu'>
                                Saiba mais
                            </a>
                        </>:<>
                            {/* INGLES */}
                            <h3>For Farmers</h3>
                            {/* <p>Fornecimento de biometano para empresas consumidoras de diesel</p> */}
                            {/* <img src={icon2}/> */}
                            <ul>
                                <li><img src={ok}/><p>Renu <b>installs and maintains</b> the entire infrastructure for converting biogas into biomethane on your farm</p></li>
                                <li><img src={ok}/><p><b>Renu markets the biomethane,</b> relieving the farmer from this concern</p></li>
                                <li><img src={ok}/><p>We generate a <b>significant additional monthly income</b> for the producer based on the biomethane production, regardless of the amount sold</p></li>
                                <li><img src={ok}/><p><b>If the producer does not have a biodigester</b> on the farm, Renu facilitates the establishment of this structure</p></li>
                            </ul>
                            <a href='/fl-renu'>
                                Learn more
                            </a>
                        </>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solucao;