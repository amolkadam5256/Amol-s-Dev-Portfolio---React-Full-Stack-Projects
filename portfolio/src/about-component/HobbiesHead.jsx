import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file
import assets from '../assets/images/assets';

const HobbiesHead = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation duration
            easing: 'ease-in-out', // Easing function for smoothness
            once: false,  // Ensure the animation repeats on scroll
        });
    }, []);

    return (
        <>
            <div className='md:flex block relative justify-center items-center py-20 mt-1'>
                <div>
                    <h1 className='text-center md:text-7xl text-5xl font-[anzo5]' data-aos="fade-up">My Hobbies</h1>
                </div>

                <div className='flex justify-center'>
                    <img
                        className='w-[70%]'
                        src={assets.Hobbies_head}
                        alt="Hobbies-img"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                    />
                </div>
            </div>
        </>
    );
};

export default HobbiesHead;
