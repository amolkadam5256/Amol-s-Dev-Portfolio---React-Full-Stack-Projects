// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/images/assets';

const AboutHeadSection = () => {
    return (
        <div className="relative w-full">
            {/* Responsive Images */}
            <img className="w-full hidden md:block" src={assets.about_head} alt="Header illustration" />
            <img className="w-full block md:hidden" src={assets.about_head_sm} alt="Header illustration for mobile" />

            {/* Heading positioned at the left bottom */}
            <h1 className="absolute bg-white text-black left-4 md:left-10 -bottom-6 p-2 text-lg md:text-2xl lg:text-3xl font-bold shadow-md rounded-md">
                Home \ About Me
            </h1>
        </div>
    );
};

export default AboutHeadSection;
