import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the FaArrowUp icon
import { gsap } from "gsap"; // Importing GSAP
import ScrollToPlugin from "gsap/ScrollToPlugin"; // Importing ScrollToPlugin
import "../index.css";

// Registering GSAP plugins outside the component to prevent repeated registration
gsap.registerPlugin(ScrollToPlugin);

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const checkScrollTop = () => {
        if (!isVisible && window.pageYOffset > 100) {
            setIsVisible(true);
        } else if (isVisible && window.pageYOffset <= 100) {
            setIsVisible(false);
        }
    };

    // Scroll back to top function with advanced GSAP smooth scroll animation
    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1.5, // Increased duration for smoother scroll
            scrollTo: 0, // Scroll position (top of the page)
            ease: "power4.out", // Smoother easing
            overwrite: "auto", // Overwrites any ongoing animations
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);

        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [isVisible]);

    // Adding parallax effect to other elements when scrolling
    useEffect(() => {
        gsap.fromTo(
            ".parallax",
            { y: 0 },
            {
                y: 100,
                scrollTrigger: {
                    trigger: ".parallax",
                    start: "top bottom", // Trigger when element comes into view
                    end: "bottom top",
                    scrub: 1, // Smooth scrubbing effect
                    markers: false, // Set to false to remove markers in production
                },
            }
        );
    }, []);

    return (
        <>
            {/* Back to top button */}
            <a
                onClick={scrollToTop}
                className={`${
                    isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                } fixed bottom-8 right-8 bg-gray-400  hover:bg-gray-700 active:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center transition-opacity duration-500 z-50`}
                href="#top"
            >
                {/* React Icon */}
                <FaArrowUp className="text-black text-2xl" />
            </a>

                
        </>
    );
};

export default BackToTopButton;
