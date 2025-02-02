import React from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaSass, FaDocker, FaJava, FaBootstrap, FaGithub, FaAws } from "react-icons/fa"; // Import other icons
import { GrMysql } from "react-icons/gr";
import { SiSpringboot, SiRedux, SiNpm, SiWebpack, SiVite, SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiOracle, SiReacthookform, SiIntellijidea, SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { FaYarn } from "react-icons/fa6";
import { MdSettingsApplications } from "react-icons/md";
import { DiJqueryLogo } from "react-icons/di";




import './Skills.css';

const Skills = () => {
    return (
        <div className="relative block bg-black text-white w-full h-full border-t-2 md:pt-20 pt-10">
            <div className='py-10 '>
                <h1 className="text-center md:text-5xl text-3xl font-[anzo5]">
                    My <span className="md:text-6xl text-4xl font-[anzo5] text-[#ffee10]">Skills</span>
                </h1>
            </div>

            <div className="xl:mx-52 mx-12 md:py-20 py-10 relative">
                <ul className=" grid md:grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(50px,_1fr))] md:gap-12 gap-10">
                    {/* Frontend tools */}
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            HTML5
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-red-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaHtml5 className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            CSS
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-blue-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaCss3 className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            JavaScript
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-yellow-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaJsSquare className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            jQuery
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-yellow-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <DiJqueryLogo className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Sass
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-pink-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaSass className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Tailwind_CSS
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-blue-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <RiTailwindCssFill className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Bootstrap
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#563d7c] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaBootstrap className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            React
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-cyan-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaReact className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Redux
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-red-600 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiRedux className="md:text-5xl text-3xl" />
                        </a>
                    </li>


                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            API
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-green-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <TbApi className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Git
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-orange-500 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaGitAlt className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            GitHub
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#fafafa] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaGithub
                                className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            VS_Code
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-blue-700  text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <VscVscode
                                className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Java
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-red-700 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaJava className="md:text-5xl text-3xl " />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Spring_Boot
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#47A248] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiSpringboot className="md:text-5xl text-3xl " />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            MySQL
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#1E90FF] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <GrMysql className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: "#ffffff" }}>
                            NPM
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#1D4ED8] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiNpm className="md:text-5xl text-3xl " />
                        </a>
                    </li>


                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Oracle
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#F80000] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiOracle className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            YARM
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#47A248] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <FaYarn className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            WEBPACK
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-blue-700 text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiWebpack className="md:text-5xl text-3xl" />
                        </a>
                    </li>


                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Vite
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiVite className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Axios
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiAxios className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            GSAP
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <MdSettingsApplications className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Framer_Motion
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <TbBrandFramerMotion className="md:text-5xl text-3xl" />
                        </a>
                    </li>
                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            React_Hook_Form
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiReacthookform className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Intellij_idea
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiIntellijidea className="md:text-5xl text-3xl" />
                        </a>
                    </li>

                    <li className="relative text-center group">
                        <span className="absolute top-[-2rem] left-1/2 md:left-[50%] transform -translate-x-1/2 md:text-1xl text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Netlify
                        </span>
                        <a
                            href=""
                            className="icon-box my-3 relative flex items-center justify-center md:w-20 md:h-20 w-16 h-16 bg-black rounded-2xl text-[#FF9900] text-3xl transition-all duration-300 transform hover:scale-110 border-none"
                        >
                            <SiNetlify className="md:text-5xl text-3xl" />
                        </a>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Skills;
