import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import assets from '../assets/images/assets';

const Pencial = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({ 
      duration: 1500, // Duration of the animation
      easing: 'ease-in-out', // Easing function for smoothness
      once: false, // Animates on scroll, multiple times
      mirror: true // Mirror the animation when scrolled back up
    });
  }, []);

  return (
    <div className='relative pt-5'>
      <img 
        className='relative w-24 md:w-40 drop-shadow-custom'
        src={assets.pencial} 
        alt=""
        data-aos="zoom-in" // Adding AOS animation
        data-aos-duration="1000" // Animation duration
        data-aos-delay="200" // Delay before animation starts
      />
    </div>
  );
}

export default Pencial;
