import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Biometano from '../components/Biometano';
import About from '../components/About';
import Solucao from '../components/Solucao';
import Publico from '../components/Publico';
import Contato from '../components/Contato';


function Home({language}) {
  
  useEffect(() => {
    console.log(language)
  },[]);

  return (
    <div className={`Home ${language==0?'br':'en'}`}>
      <Banner language={language}/>
      <Biometano language={language}/>
      <About language={language}/>
      <Publico language={language}/>
      <Solucao language={language}/>
      <Contato language={language}/>
    </div>
  );
}

export default Home;