// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { assets } from '../assets/images/assets';



const NavbarHeadSection = () => {
  return (
    <div>
      <div className=' flex justify-between md:px-10 px-5 relative pb-6 md:pb-0'>

        <div className=' justify-center flex '>

          <img className='w-28 md:w-36 cursor-pointer' src={assets.logo_transpern} alt="Company Logo" />

        </div>

        <ul className='relative flex flex-row justify-end md:gap-6 gap-3 my-auto'>

          <a href="https://www.facebook.com/profile.php?id=100055943003261">
            <FaFacebook className='text-[18px] md:text-3xl hover:scale-125 text-[#1877f2] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white ' />
          </a>

          <a href="https://x.com/amolkadam1274">
            <FaTwitter className='text-[18px] md:text-3xl text-1xl hover:scale-125 text-[#1877f2] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white ' />
          </a>

          <a href="https://www.instagram.com/_amol5256?igsh=azgyd2ppcjVteWU5">
            <FaInstagram className='text-[18px] md:text-3xl hover:scale-125 text-[#c13584] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white ' />
          </a>

          <a href="https://github.com/amolkadam5256   ">
            <FaGithub className='text-[18px] md:text-3xl hover:scale-125 text-white leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white hover:text-black' />
          </a>

          <a href="https://www.linkedin.com/in/amol-kadam-814167329/">
            <FaLinkedin className='text-[18px] md:text-3xl text-1xl hover:scale-125 text-[#0077b5] leading-normal hover:shadow-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white' />
          </a>

        </ul>

      </div>
    </div>
  )
}

export default NavbarHeadSection
