// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Education.css';


const EducationContent = () => {
    return (
        <div className="timeline">
            <span className='absolute md:left-[49%] md:-top-4 left-5 rounded-full w-5 h-5 bg-white'></span>

            <div className="container left-container md:mb-0 mb-10">
                <div className="text-box inline-block">
                    <span className='text-[#ffbd39] text-3xl'>2018-2019</span>
                    <h2 className='md:text-4xl text-2xl py-3 tracking-[2px]'>10™ - Class</h2>
                    <p className='md:text-2xl text-1xl pb-2'>HighSchool Lohara</p>
                    <span>Grade: 73.60 %</span>
                    <span className="left-container-arrow"></span>
                </div>
            </div>





            <div className="container right-container md:mb-0 mb-10">
                <div className="text-box">
                    <span className='text-[#ffbd39] text-3xl'>2020-2021</span>
                    <h2 className='md:text-4xl text-2xl py-3 tracking-[2px]'>12™ - Class</h2>
                    <p className='md:text-2xl text-1xl pb-2'>Bharati Vidyapeeth Deemed University</p>
                    <span>Grade: 51.60 %</span>
                    <span className="right-container-arrow"></span>
                </div>
            </div>



            <div className="container left-container md:mb-0 mb-0">
                <div className="text-box">  
                    <span className='text-[#ffbd39] text-3xl'>2022-2025</span>
                    <h2 className='md:text-4xl text-2xl py-3 tracking-[2px]'>Bachelor of Computer Science <span className='md:text-4xl text-sm'>(BSC.CS)</span></h2>
                    <p className='md:text-2xl text-1xl pb-2'>Bharati Vidyapeeth Deemed University</p>
                    <span>Grade: currently pursuing.</span>
                    <span className="left-container-arrow"></span>
                </div>
            </div>




            <span className='absolute md:left-[49%] md:-bottom-4 left-5 rounded-full w-5 h-5 bg-white'></span>
        </div>
    );
};

export default EducationContent;
