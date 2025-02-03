// eslint-disable-next-line no-unused-vars
import React from 'react';
import Pencial from './Pencial';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const SelfIntro = () => {
    return (
        <>
            <div className="bg-black flex flex-col md:flex-row w-full md:pt-10 py-10 mb-1">
                {/* Left Column */}
                <div className="flex-1 md:pl-10 pl-3 md:py-10 order-2 md:order-1 w-full md:w-1/2 text-white" data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-iteration="infinite">
                    <p className='py-2'>Hello, my name is Amol Tukaram Kadam. I am a passionate full-stack developer and Java developer currently pursuing my B.Sc. in Computer Science at Yashwantrao Mohite College in Pune. As I am in my third year of studies, I am actively seeking a full-stack developer role or an internship to enhance my skills and gain valuable real-world experience in a corporate setting. I am eager to apply my knowledge and contribute to innovative projects while continuing to learn and grow in the field.</p>

                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo modi ipsa officia iste dolores inventore?</p>

                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo modi ipsa officia iste dolores inventore?</p>

                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo modi ipsa officia iste dolores inventore?</p>
                </div>

                {/* Right Column */}
                <div className="flex-1 relative flex md:justify-center justify-start items-center order-1 md:order-2 w-full md:w-1/2" data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-iteration="infinite">

                    <div className='absolute 
                                    sm:right-44 sm:top-28
                                    md:right-16 md:top-32
                                    lg:right-20 lg:top-20
                                    xl:right-40 xl:top-24
                                    right-36 top-3 
                                    rotate-[295deg]'>

                        <Pencial></Pencial>

                    </div>
                    <div className="text-start md:pl-0 p-3 md:pt-0 pt-10  text-white"> {/* Center text inside the inner div */}
                        <h2 className="text-[22px] md:text-3xl font-semibold font-[anzo5] md:pb-5 text-gray-500">Overview</h2>
                        <h1 className="text-3xl md:text-5xl font-[anzo5] font-bold">About Me</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelfIntro;
