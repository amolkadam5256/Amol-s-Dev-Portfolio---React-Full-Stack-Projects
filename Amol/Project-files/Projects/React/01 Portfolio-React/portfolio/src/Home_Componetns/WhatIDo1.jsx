import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaGit, FaGithub } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { BiLogoSass } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { ImNpm } from "react-icons/im";
import { SiMysql, SiVisualstudiocode } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import '../Animation.css'

const WhatIDo1 = () => {
    return (
        <div className='flex flex-col p-5  text-white ' >
            <h1 className='text-white text-3xl md:text-5xl font-bold text-center mb-5'>Full Stack Development</h1>

            <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-5 mt-10'>
                {[
                    { icon: <FaHtml5 />, label: 'HTML5', color: 'text-red-600' },
                    { icon: <FaCss3 />, label: 'CSS3', color: 'text-blue-600' },
                    { icon: <BiLogoSass />, label: 'Sass', color: 'text-pink-600' },
                    { icon: <FaSquareJs />, label: 'JavaScript', color: 'text-yellow-500' },
                    { icon: <RiTailwindCssFill />, label: 'Tailwind', color: 'text-blue-400' },
                    { icon: <FaReact />, label: 'React', color: 'text-cyan-400' },
                    { icon: <FaNode />, label: 'Node.js', color: 'text-green-600' },
                    { icon: <ImNpm />, label: 'npm', color: 'text-red-500' },
                    { icon: <SiMysql />, label: 'MySQL', color: 'text-blue-600' },
                    { icon: <SiVisualstudiocode />, label: 'VS Code', color: 'text-blue-500' },
                    { icon: <FaGithub />, label: 'GitHub', color: 'text-gray-800' },
                    { icon: <FaGit />, label: 'Git', color: 'text-orange-600' },
                ].map(({ icon, label, color }) => (
                    <div key={label} className='relative flex flex-col items-center transition-transform transform hover:scale-110 group'>
                        <span className='absolute bottom-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm'>
                            {label}
                        </span>
                        {React.cloneElement(icon, {
                            className: `${color}  text-5xl md:text-6xl mb-2 transition-transform duration-300 transform group-hover:translate-y-1 hover:text-red-500`,
                            'aria-label': label
                        })}
                    </div>
                ))}
            </div>

            <section className='mt-5'>
                <h2 className='text-2xl font-semibold mb-3'>What I Do:</h2>
                <ul className='list-none pl-5 space-y-2 font-[anzo2]'>
                    <li>⚡ Experienced in developing responsive web applications and dynamic user interfaces using React and Redux.</li>
                    <li>⚡ Proficient in creating robust back-end services with Node.js, Express, and Spring Boot.</li>
                    <li>⚡ Skilled in mobile app development with Flutter and React Native, focusing on performance         and user experience.</li>
                </ul>
            </section>
        </div>
    );
};

export default WhatIDo1;
