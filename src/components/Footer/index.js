import React, { useEffect } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const Footer = ({language}) => {

    const active = (e) => {
        if($("#footer").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".footer").hasClass("animate")) {
            $(".footer").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="footer" id='footer'>
             <div className='container'>
                <img className='' src={logo} alt=''/>
            </div>
            <div className="container">
                <ul>
                    <li>{language==0? 'Contato': 'Contact'}</li>
                    <li><b>Whatsapp:</b> (00) 00000-0000</li>
                    <li><b>Email:</b> contato@email.com</li>
                </ul>
                <ul>
                    <li>Sponsor</li>
                    <li><a href='www.equitas.com.br'>Equitas</a></li>
                    <li></li>
                </ul>
                <ul>
                    <li>Links</li>
                    <li><a href='#renu'>Renu</a></li>
                    <li><a href='#consumidores'>{language==0? 'Para Consumidores': 'For Consumers'}</a></li>
                    <li><a href='#produtores-rurais'>{language==0? 'Para Produtores Rurais': 'For Farmers'}</a></li>
                </ul>
            </div>
            {/* <a href='/' className='float-button'>Inicie uma conversa!</a> */}
        </section>
    )
}

export default Footer;