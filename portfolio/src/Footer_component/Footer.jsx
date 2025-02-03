import React, { useEffect } from 'react';
import FooterLogo from './FooterLogo';
import FooterContent from './FooterContent';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: false, // Only trigger once when scrolled into view
        });
    }, []);

    return (
        <div className='p-4 bg-black'>
            <div data-aos="fade-up">
                <FooterLogo />
            </div>
            <div>
                <FooterContent />
            </div>
        </div>
    );
};

export default Footer;
