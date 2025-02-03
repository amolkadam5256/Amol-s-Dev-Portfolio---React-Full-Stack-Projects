// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/images/assets';

const FooterLogo = () => {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-between">
                <section className="py-[70px] mt-0 lg:mt-5 ml-0 md:ml-10">
                    <div className="mx-auto px-4 sm:container">
                        <div className="border-stroke dark:border-dark-3 flex items-center pb-6 p-10 bg-white md:bg-black rounded-lg">
                            <div className="mr-[18px] h-[70px] w-full max-w-[70px] overflow-hidden rounded-xl">
                                <img
                                    src={assets.ProfileAmol}
                                    alt="Profile Picture"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div>
                                <h4 className="text-black md:text-white mb-1 text-[1.5rem] font-semibold">
                                    Hey Amol Kadam 👋
                                </h4>
                                <p className="text-black md:text-white text-sm md:text-lg font-medium w-[100%] md:w-[70%]">
                                    Java Developer | Backend & Full Stack Enthusiast |
                                    Building Scalable & Efficient Solutions 🚀
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="hidden md:flex justify-center lg:justify-end mt-6 lg:mt-0 mr-0 md:mr-20">
                    <img className="w-32 sm:w-40 cursor-pointer" src={assets.logo_transpern} alt="Company Logo" />
                </div>
            </div>
        </div>
    );
};

export default FooterLogo;
