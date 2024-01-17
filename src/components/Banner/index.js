import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import image from '../../assets/img/home/bg.jpg';

import 'jquery.easing';

const Banner = () => {

    const active = (e) => {
        const shape = $('.banner__shape-up');
        const shapeLeft = $('.banner__shape-left');
        const shapeLeft2 = $('.banner__shape-left2');
        const shapeDown = $('.banner__shape-down');
        const shapeUpRight = $('.banner__shape-upright');
        const scrollTop = $(window).scrollTop();
      
        const parallaxFactor = 0.2;
        const parallaxFactor2 = 0.1;

        const animationDuration = 500;
        console.log(shape)
      
        const initialOffset = shape.offset()?.left || 0;
        console.log(scrollTop);
      
        const distance = scrollTop - initialOffset;
        let animationSpeed = Math.abs(distance * parallaxFactor);
      
        if (animationSpeed > 1000) {
          animationSpeed = 1000;
        }
      
        shape.stop().animate(
          {
            marginTop: -scrollTop * parallaxFactor,
          },
          animationDuration,
          'easeOutCubic'
        );

        shapeDown.stop().animate(
            {
              marginTop: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeUpRight.stop().animate(
            {
              marginTop: -scrollTop * parallaxFactor,
              marginLeft: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor2,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft2.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );
      };

    const activeMockup = (e) => {
        var mouse = {
            page: {
                x: e.pageX,
                y: e.pageY
            },
            client: {
                x: e.clientX,
                y: e.clientY
            }
        };

        const x = mouse.client.x;
        const y = mouse.client.y;

        console.log(x)
      
        const parallaxFactor = 0.1;
      
      
        let animationSpeed = Math.abs(x * parallaxFactor);
      
        if (animationSpeed > 1000) {
          animationSpeed = 1000;
        }
      
        // mockup.css(
        //   {
        //     marginLeft:  x * parallaxFactor,
        //     marginTop:  y * parallaxFactor,
        //   }
        // );

        // mockup2.css(
        //     {
        //       marginLeft:  x * parallaxFactor2,
        //       marginTop:  y * parallaxFactor2,
        //     }
        // );
      };
    
    useEffect(() => {
        $(window).on('scroll',(e)=>active(e));
        // $(window).on('mousemove',(e)=>activeMockup(e));
    },[]);
    return  (
        <section className="banner" id='banner' style={{backgroundImage: `url(${image})`}}>
            {/* <img className='banner__shape2 banner__shape2-1' src={shape2} alt=''/> */}

            <div className='banner__text'>
                <h2>RENU</h2>
                <p>Atingindo suas metas de sustentabilidade <br></br> por meio do biometano</p>
                <div className='banner__text__buttons'>
                    <a href='#about' className=''>Saiba mais!</a>
                    {/* <a href='#about' className='secondary-button'>Deixe-me ver mais!</a> */}
                </div>
            </div>
            <div className='banner__arrow'>
                <p></p>
            </div>
        </section>
    )
}

export default Banner;