import React, { useEffect, useState } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import menu from '../../assets/img/menu-m.png';
import fecha from '../../assets/img/fecha.png';

import $ from 'jquery';
import { Link } from 'react-router-dom';


const Header = ({setLanguage,language}) => {
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className={`header ${window.location.hash == '' ? 'home': window.location.hash == '#/brenno-mnz' ? 'home' : ''}`} id='header'>
            <div className='container-fluid'>
                <div className='header__logo'>
                    <a href='/fl-renu'>
                        <img className='' src={logo} alt=''/>
                    </a>
                </div>

                <div className='header__menu__mobile' onClick={()=>setOpen(!open)}>
                        <img className='' src={menu} alt=''/>
                </div>

                <ul className={`header__menu ${open?'open':''}`}>
                    {/* <li>{window.location.hash}</li> */}
                    <img className='' src={fecha} alt='' onClick={()=>setOpen(!open)}/>

                    {language==0?<>
                        <li><a onClick={()=>setOpen(false)} href='#biometano'>Porque biometano?</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#renu'>A Renu</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#consumidores'>Para Consumidores</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#produtores-rurais'>Para Produtores Rurais</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#contato'>Nossos Contatos</a></li>
                    </>:<>
                        <li><a onClick={()=>setOpen(false)} href='#biometano'>Why Biomethane?</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#renu'>Renu</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#consumidores'>For Consumers</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#produtores-rurais'>For Farmers</a></li>
                        <li><a onClick={()=>setOpen(false)} href='#contato'>Contact</a></li>
                    </>}
                    
                    <li className='language'><p onClick={()=>{setLanguage(0);setOpen(false)}} className={language==0?'active':''}>BR</p><p onClick={()=>{setLanguage(1);setOpen(false)}} className={language==1?'active':''}>EN</p></li>

                    
                </ul>

                {/* <a href='#contact' className='header__button primary-button'>
                    Envie uma mensagem!
                </a> */}
            </div>
        </div>
    )
}

export default Header;