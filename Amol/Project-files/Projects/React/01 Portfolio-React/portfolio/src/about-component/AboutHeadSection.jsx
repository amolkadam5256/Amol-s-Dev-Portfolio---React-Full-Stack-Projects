// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { assets } from '../assets/images/assets';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeadSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation duration
            once: false,      // Animation triggers multiple times on scroll
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="relative w-full">
            {/* Responsive Images with AOS Effect */}
            <img
                className="w-full hidden md:block"
                src={assets.about_head}
                alt="Header illustration"
            />
            <img
                className="w-full block md:hidden"
                src={assets.about_head_sm}
                alt="Header illustration for mobile"
            />

            {/* Animated Heading */}
            <h1
                className="absolute bg-white text-black left-4 md:left-10 -bottom-6 p-2 text-lg md:text-2xl lg:text-3xl font-bold shadow-md rounded-md"
                data-aos="zoom-in-right"
                data-aos-delay="400"
            >
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>/</span>
                <Link to="/about">
                    <span>About Me</span>
                </Link>
            </h1>
        </div>
    );
};

export default AboutHeadSection;
