// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Services from './pages/Services';
import HireMe from './pages/HireMe';
import Header from './Home_Componetns/Header';
// import Cursor from './comman_Component/Cursor';
import Footer from './Footer_component/Footer';
import BackToTopButton from './comman_Component/BackToTopButton';
// Import components

// Main App composnent
const App = () => {
  return (
    <>
      <div className='w-full h-full relative bg-white font-[anzo2] overflow-x-hidden'>

        {/* <Cursor /> */}
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire_me" element={<HireMe />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export default App;
