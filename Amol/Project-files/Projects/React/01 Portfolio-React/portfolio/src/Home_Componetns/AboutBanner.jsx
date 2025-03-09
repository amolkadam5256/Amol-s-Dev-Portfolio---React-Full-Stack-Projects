// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/images/assets';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import TypeWriter from './TypeWriter';

const AboutBanner = () => {
    return (
        <>
            <div className='relative md:rounded-[20px] about-bannerimg bg-cover bg-center bg-no-repeat shadow-black shadow-lg w-full py-10 pt-0 lg:py-0 lg:pt-10  flex' >

                <div className='w-1/3 hidden lg:block'>
                    <img className='w-full bottom-0' src={assets.about_pic2} alt="About picture" />
                </div>

                <div className='lg:w-1/2 pt-12 pl-10'>
                    <h1 className='text-2xl md:text-5xl font-bold font-[anzo5] mb-2 text-white'>
                        Hi <span className='text-2xl md:text-5xl text-[#b74a4d]'>&#10084;</span>
                    </h1>
                    <h1 className='text-[#5891fc] text-3xl md:text-5xl font-[anzo5]'> AMOL KADAM </h1>

                    <div>
                        <TypeWriter />
                    </div>

                    <p className='text-white text-sm md:text-[20px] mt-5 font-[anzo4]'>Software Development That Delivers Code Your Dreams Into Reality.</p>

                    <div className='mt-10 backdrop-blur-1xl inline-flex bg-opacity-60'>
                        <ul className='flex flex-row justify-start gap-6 py-5 px-'>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100055943003261" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='text-3xl hover:scale-125 text-[#1877f2] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/amolkadam1274" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className='text-3xl hover:scale-125 text-[#1877f2] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_amol5256?igsh=azgyd2ppcjVteWU5" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='text-3xl hover:scale-125 text-[#c13584] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/amolkadam5256" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='text-3xl hover:scale-125 text-white leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/amol-kadam-814167329/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='text-3xl hover:scale-125 text-[#0077b5] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='absolute top-0 right-0' data-aos="zoom-in-down">
                    <img className='w-40' src={assets.flower} alt="Flower decoration" />
                </div>
            </div>
        </>
    );
}

export default AboutBanner;
