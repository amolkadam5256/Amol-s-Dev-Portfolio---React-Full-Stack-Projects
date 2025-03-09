import React, { useEffect } from 'react';
import { BiSolidCertification } from "react-icons/bi";
import { PiNotepadFill } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CertificationHead = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Adjust the duration as per your preference
            once: false, // Keeps the animation running continuously
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center text-center gap-20 py-20 mt-1">
            <div className="relative flex items-center justify-center text-center">
                <BiSolidCertification
                    className="absolute text-blue-600 md:text-9xl text-8xl"
                    data-aos="fade-up" // AOS animation added here
                />
                <PiNotepadFill
                    className="absolute text-white md:text-6xl text-5xl"
                    data-aos="fade-down" // AOS animation added here
                />
            </div>
            <div>
                <h1 className="md:text-6xl text-3xl font-[anzo5] text-white md:first-letter:text-6xl first-letter:text-4xl" data-aos="zoom-in">
                    Certification
                </h1>
            </div>
        </div>
    );
};

export default CertificationHead;
