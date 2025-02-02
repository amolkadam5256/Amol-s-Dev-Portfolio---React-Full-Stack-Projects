import React from 'react';
import Hero from '../Home_Componetns/Hero';
import HomeCopyWrite from '../Home_Componetns/HomeCopyWrite';
import Slogan from '../Home_Componetns/Slogan';
import StarAnimation from '../Home_Componetns/StarAnimation';
import LaptopModel from '../Home_Componetns/laptopModel';
import Accordion from '../Home_Componetns/Accordion';
import Achievements from '../Home_Componetns/Achievements';

const Home = () => {

  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <StarAnimation />
      <Hero />

      {/* Copy Write text section */}
      <HomeCopyWrite />

      {/* Slogan section */}
      <Slogan />

      {/* Laptop Model section */}
      {/* <LaptopModel /> */}

      {/*Achievements */}
      <Achievements />

      {/* Accordion */}
      <Accordion />
    </div>
  );
};

export default Home;
