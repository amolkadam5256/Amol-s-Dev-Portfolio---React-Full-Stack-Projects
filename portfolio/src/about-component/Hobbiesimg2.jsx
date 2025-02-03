import React, { useEffect } from 'react';
import assets from '../assets/images/assets';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Loader from './Loader ';

const Hobbiesimg2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set the duration of animation
      once: false, // Set to false to repeat the animation
      mirror: true, // If you want the animation to happen when the element is out of view and scroll back
    });
  }, []);

  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row py-10">
      {/* Text Section */}
      <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-loop="true">
        <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">watching documentaries <br /> and movies</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat dolor animi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-loop="true">
        <Loader />
        <img
          src={assets.popcorn}
          alt="headphone"
          className="max-w-xs md:max-w-lg w-[80%] transition-all delay-150"
        />
      </div>
    </div>
  );
};

export default Hobbiesimg2;
