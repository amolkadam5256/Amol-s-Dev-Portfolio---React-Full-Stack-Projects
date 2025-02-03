import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Initialize infinite scroll
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (bottom && loading) {
        setLoading(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="flex flex-col items-center justify-center rotate-[30deg]" data-aos="fade-up">
      <div className="relative w-14 h-16 bg-[#3D314A] overflow-hidden" data-aos="zoom-in">
        <div className="absolute left-1 w-0.5 h-[120%] border-l-4 border-dashed border-[#ffffff] animate-roll"></div>
        <div className="absolute right-1 w-0.5 h-[120%] border-l-4 border-dashed border-[#ffffff] animate-roll"></div>
      </div>
      <p className="mt-2 uppercase tracking-wider font-[anzo3]" data-aos="fade-up">
        watching
      </p>
    </div>
  );
};

export default Loader;
