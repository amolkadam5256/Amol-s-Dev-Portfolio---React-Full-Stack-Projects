import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing type
            once: false, // Whether the animation should only trigger once
        });
    }, []);

    return (
        <div className="bg-white relative mx-auto my-20">
            <div
                className="bg-black py-12 px-6 text-center rounded-lg shadow-md max-w-5xl mx-auto py-20"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
            >
                <h2 className="text-3xl font-bold text-white" data-aos="fade-down">
                    Our Achievements
                </h2>
                <p
                    className="text-gray-300 mt-2 max-w-2xl mx-auto"
                    data-aos="zoom-in-up"
                    data-aos-delay="100"
                >
                    We take pride in our journey and accomplishments. Here are some highlights of our success and milestones achieved over the years.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                    >
                        <span className="text-5xl text-white">😊</span>
                        <h3 className="text-2xl font-bold text-white mt-2">2050+</h3>
                        <p className="text-gray-400">Happy Clients</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="300"
                    >
                        <span className="text-5xl text-white">🎁</span>
                        <h3 className="text-2xl font-bold text-white mt-2">800+</h3>
                        <p className="text-gray-400">Completed Projects</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <span className="text-5xl text-white">💲</span>
                        <h3 className="text-2xl font-bold text-white mt-2">500K</h3>
                        <p className="text-gray-400">Investments</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="500"
                    >
                        <span className="text-5xl text-white">🏅</span>
                        <h3 className="text-2xl font-bold text-white mt-2">45+</h3>
                        <p className="text-gray-400">Winning Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
