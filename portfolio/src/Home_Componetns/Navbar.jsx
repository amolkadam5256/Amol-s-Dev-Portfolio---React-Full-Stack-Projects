// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarHeadSection from './NavbarHeadSection';

const Navbar = () => {


    const [isVisible, setIsVisible] = useState(true); // State to manage navbar visibility

    const handleItemClick = () => {
        setIsVisible(false); // Hide the navbar when an item is clicked
    };

    return (
        <>
            <div>


                {isVisible && (
                    <div className='bg-black  lg:px-40 md:pt-0  fixed w-full h-full m-auto top-0 overflow-scroll no-scrollbar z-50'>


                        <div className='bg-black w-full relative lg:rounded-[40px] lg:pt-0 pt-20 pb-10 lg:pb-0 h-auto'>
                            <NavbarHeadSection></NavbarHeadSection>


                            {/* second row */}

                            <div className='w-full px-5 md:px-10 pb-10'>

                                {/* w-full px-10 pb-5 */}

                                <ul className='font-bold items-center   justify-between '>

                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white' to="/">
                                        <li className="text-6xl md:text-8xl font-[anzo1] tracking-[5px] md:tracking-[10px]relative 
                                        before:hidden hover:before:block before:text-gray-700 before:content-['Home'] before:absolute before:-top-20 md:before:top-[0%] before:left-24 md:before:left-[25%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1" >Home</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>01</p>

                                    </Link>

                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white md:pt-0 pt-5' to="/about">
                                        <li className="text-6xl md:text-8xl  font-[anzo1] tracking-[5px] md:tracking-[10px]
                                         before:hidden hover:before:block before:text-gray-700 before:content-['About'] before:absolute before:-top-14 md:before:-top-[100px] before:left-24 md:before:left-[25%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1">About</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>02</p>

                                    </Link>

                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white md:pt-0 pt-5' to="/resume">
                                        <li className="text-6xl md:text-8xl  font-[anzo1] tracking-[5px] md:tracking-[10px]
                                        before:hidden hover:before:block before:text-gray-700 before:content-['Resume'] before:absolute before:-top-14 md:before:-top-[200px] before:left-20 md:before:left-[20%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1">Resume</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>03</p>

                                    </Link>

                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white md:pt-0 pt-5' to="/services">
                                        <li className="text-6xl md:text-8xl  font-[anzo1] tracking-[5px] md:tracking-[10px]
                                         before:hidden hover:before:block before:text-gray-700 before:content-['Services'] before:absolute before:-top-14 md:before:-top-[300px] before:left-10 md:before:left-[10%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1">Services</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>04</p>

                                    </Link>


                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white md:pt-0 pt-5' to="/projects">
                                        <li className="text-6xl md:text-8xl  font-[anzo1] tracking-[5px] md:tracking-[10px]
                                         before:hidden hover:before:block before:text-gray-700 before:content-['Project'] before:absolute before:-top-14 md:before:-top-[400px] before:left-24 md:before:left-[20%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1">Project</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>05</p>

                                    </Link>


                                    <Link onClick={handleItemClick} className='relative flex justify-between border-b-2 text-white md:pt-0 pt-5' to="/contact">
                                        <li className="text-6xl md:text-8xl  font-[anzo1] tracking-[5px] md:tracking-[10px]
                                         before:hidden hover:before:block before:text-gray-700 before:content-['Contact'] before:absolute before:-top-14 md:before:-top-[500px] before:left-20 md:before:left-[20%]  before:text-[150px] md:before:text-[500px] before:opacity-[0.6] before:-inset-1">Contact</li>

                                        <p className='absolute bottom-0 right-0 font-bold md:text-[30px] text-[25px] font-[anzo1] tracking-[5px]'>06</p>
                                    </Link>




                                </ul>
                            </div>

                        </div>

                    </div>
                )}
            </div >
        </>
    )
}

export default Navbar
