// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/images/assets';

const HeaderLogo = () => {
    return (
        <div className='flex justify-between items-center pt-5 md:pt-0'>
            {/* Logo Section */}
            <div>
                <img
                    className='w-32 md:w-52 md:pl-10 pl-2 cursor-pointer relative '
                    src={assets.logo_transpern}
                    alt="Company Name Logo"
                />
            </div>

            {/* Hire Me Button Section */}
            <div className='md:mr-20 mr-16 relative z-40'>
                <Link to="/hire_me">
                    <button
                        className='bg-[#060606] px-5 md:px-11 sm:px-9 py-2 md:py-3 rounded-full border-white text-[#FAFAFA] hover:text-[#FAFAFA] hover:bg-[#9B9B9B] border-4 md:text-[14px] font-bold transform transition-transform duration-300 animate-pulse-slow '
                        aria-label="Hire Me"
                    >
                        Hire Me
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeaderLogo;
