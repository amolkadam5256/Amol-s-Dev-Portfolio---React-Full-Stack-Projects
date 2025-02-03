import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaSass, FaDocker, FaJava, FaBootstrap, FaGithub, FaAws, FaYarn } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSpringboot, SiRedux, SiNpm, SiWebpack, SiVite, SiAxios, SiOracle, SiReacthookform, SiIntellijidea, SiNetlify } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

import { DiJqueryLogo } from "react-icons/di";
import { MdSettingsApplications } from "react-icons/md";

import './Skills.css';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-red-500' },
    { name: 'CSS', icon: <FaCss3 />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500' },
    { name: 'jQuery', icon: <DiJqueryLogo />, color: 'text-yellow-500' },
    { name: 'Sass', icon: <FaSass />, color: 'text-pink-500' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-[#563d7c]' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-red-600' },
    { name: 'API', icon: <TbApi />, color: 'text-green-500' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-[#fafafa]' },
    { name: 'VS Code', icon: <VscVscode />, color: 'text-blue-700' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-700' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'MySQL', icon: <GrMysql />, color: 'text-blue-500' },
    { name: 'AWS', icon: <FaAws />, color: 'text-orange-500' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
    { name: 'NPM', icon: <SiNpm />, color: 'text-green-500' },
    { name: 'Webpack', icon: <SiWebpack />, color: 'text-gray-500' },
    { name: 'Vite', icon: <SiVite />, color: 'text-orange-500' },
    { name: 'Axios', icon: <SiAxios />, color: 'text-blue-500' },
    { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-yellow-500' },
    { name: 'Oracle', icon: <SiOracle />, color: 'text-blue-500' },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, color: 'text-blue' },
    { name: 'Netlify', icon: <SiNetlify />, color: 'text-blue-500' },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: 'text-pink-500' },
    { name: 'Yarn', icon: <FaYarn />, color: 'text-blue-500' },
    { name: 'Settings', icon: <MdSettingsApplications />, color: 'text-gray-500' }
];

const SkillItem = ({ name, icon, color }) => (
    <li className="relative text-center group" data-aos="fade-up" data-aos-duration="1000">
        <span className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            {name}
        </span>
        <span className={`icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl ${color} text-4xl transition-all duration-300 transform hover:scale-110 border-none`}>
            {icon}
        </span>
    </li>
);

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            delay: 200,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="relative block bg-black text-white w-full h-full border-t-2 md:pt-20 pt-10">
            <div className='py-10'>
                <h1 className="text-center md:text-5xl text-3xl font-[anzo5]">
                    My <span className="md:text-6xl text-4xl font-[anzo5] text-[#ffee10]">Skills</span>
                </h1>
            </div>

            <div className="xl:mx-52 mx-12 md:py-20 py-10 relative">
                <ul className="grid md:grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(50px,_1fr))] md:gap-12 gap-10">
                    {skills.map(skill => (
                        <SkillItem key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
