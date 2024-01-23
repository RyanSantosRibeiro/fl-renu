import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Biometano from '../components/Biometano';
import About from '../components/About';
import Solucao from '../components/Solucao';
import Publico from '../components/Publico';
import Contato from '../components/Contato';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Biometano />
      <About />
      <Publico />
      <Solucao />
      <Contato />
    </div>
  );
}

export default Home;