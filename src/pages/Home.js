import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Biometano from '../components/Biometano';
import About from '../components/About';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Biometano />
      <About />
    </div>
  );
}

export default Home;