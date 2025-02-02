// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import assets from '../assets/images/assets';

const Slogan = () => {
    useEffect(() => {
        AOS.init({
            duration: 1800, // Animation duration (in milliseconds)
            easing: 'ease-in-out', // Default easing
            once: false, // Animation can repeat when scrolling back
            mirror: true, // Animation repeats on scrolling past
        });
    }, []);

    const sloganText = [
        "Software",
        "DevelOper",
        "That ",
        "Delivers",
        "Your",
        "Dreams",
        "Into",
        "Reality",
        // "Code",
    ];

    return (
        <>
            <div className="relative text-center overflow-hidden w-[100%] ">
                {sloganText.map((text, index) => (
                    <h2
                        key={index}
                        data-aos="flip-up"
                        data-aos-delay={(index + 1) * 80}  // Dynamic delay based on index
                        data-aos-offset="200"
                        className="relative text-[130px] md:text-[300px] lg:text-[480px]  select-none py-0 tracking-[5px] md:tracking-[10px] lg:tracking-[20px]   outline-red-600 uppercase font-extrabold text-black transition-colors  font-[anzo1] leading-[200px] md:leading-[400px] lg:leading-[600px]  text-center
                        "
                    >
                        {/* Moonscape */}
                        {text}
                    </h2>
                ))}

            </div>
        </>
    );
};

export default Slogan;
