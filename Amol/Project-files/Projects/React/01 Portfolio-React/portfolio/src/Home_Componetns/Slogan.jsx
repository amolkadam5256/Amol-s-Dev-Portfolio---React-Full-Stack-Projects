// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Slogan = () => {
    const [rerender, setRerender] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1800, // Animation duration (in milliseconds)
            easing: "ease-in-out", // Default easing
            once: false, // Allow animations to repeat
            mirror: true, // Animation repeats on scrolling past
        });
    }, [rerender]); // Reinitialize when rerender changes

    const sloganText = [
        "Software",
        "DevelOper",
        "That ",
        "Delivers",
        "Your",
        "Dreams",
        "Into",
        "Reality",
    ];

    const handleMouseDown = () => {
        setRerender(prev => prev + 1); // Trigger a rerender to restart AOS animations
    };

    return (
        <div
            className="relative text-center overflow-hidden w-full"
            onMouseDown={handleMouseDown} // Detect mouse down to restart animations
        >
            {sloganText.map((text, index) => (
                <h2
                    key={index}
                    data-aos="flip-up"
                    data-aos-delay={(index + 1) * 70} // Dynamic delay based on index
                    data-aos-offset="200"
                    className="relative text-[130px] md:text-[300px] lg:text-[450px] select-none py-0 tracking-[5px] md:tracking-[10px] lg:tracking-[20px] outline-red-600 uppercase font-extrabold text-black transition-colors font-[anzo1] leading-[200px] md:leading-[400px] lg:leading-[600px] text-center animate-fade"
                >
                    {text}
                </h2>
            ))}
        </div>
    );
};

export default Slogan;
