import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Biometano from '../components/Biometano';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Biometano />
    </div>
  );
}

export default Home;