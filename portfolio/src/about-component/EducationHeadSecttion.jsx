import React, { useEffect } from 'react'
import assets from '../assets/images/assets';
import { FaReact, FaGit, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const EducationHeadSecttion = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for animation
      easing: 'ease-in-out', // Easing function
      once: false, // Run animation only once
    });
  }, []);

  return (
    <>
      <div className='relative md:flex block md:justify-start justify-center py-10 text-white border-b-0' style={{ scrollBehavior: 'smooth' }}>

        <div className='flex relative justify-center md:w-1/2 w-full' data-aos="fade-up">
          <img className='w-44 md:w-80' src={assets.educaton_cap} alt="Education-cap" />
          <h1 className='absolute z-10 text-3xl md:text-4xl lg:text-6xl font-extrabold md:tracking-[2px]
                     bottom-5 md:-bottom-4 left-1/2 md:h-1/3 font-[anzo5]'>Education</h1>
        </div>

        <div className='flex relative justify-center md:w-1/2 w-full md:mt-24 mt-10' data-aos="fade-up">
          <div className='block relative text-center'>
            <h1 className='hidden md:block text-2xl md:text-3xl font-[anzo5]'>Education</h1>
            <h3 className='text-3xl md:text-2xl font-[anzo2] pt-5'>Basic Qualification and Certifcations</h3>
            <div className='flex justify-center'>
              <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5 mt-10 items-center justify-items-center'>
                {[
                  { icon: <SiLeetcode />, label: 'leetcode', color: 'text-red-600' },
                  { icon: <SiHackerrank />, label: 'HackerRank', color: 'text-blue-600' },
                  { icon: <FaReact />, label: 'React', color: 'text-cyan-400' },
                  { icon: <FaGithub />, label: 'GitHub', color: 'text-white' },
                  { icon: <FaGit />, label: 'Git', color: 'text-orange-600' },
                ].map(({ icon, label, color }) => (
                  <div key={label} className='relative flex flex-col items-center justify-center transition-transform transform hover:scale-110 group text-white' data-aos="fade-up">
                    <span className='absolute items-center bottom-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm'>
                      {label}
                    </span>
                    {React.cloneElement(icon, {
                      className: `${color} text-5xl md:text-6xl mb-2 transition-transform duration-300 transform group-hover:translate-y-1 hover:text-red-500`,
                      'aria-label': label
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default EducationHeadSecttion;
