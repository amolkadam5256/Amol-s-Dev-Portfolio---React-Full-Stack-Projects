import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../index.css';
import assets from '../assets/images/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FooterContent = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <footer className="mt-16 border-t-2 border-white pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-6 ">

        {/* About Us Section */}
        <div className="text-center sm:text-left" data-aos="fade-up">
          <p className="text-lg font-medium text-white">About Us</p>
          <ul className="mt-8 space-y-4 text-sm ml-2">
            {["Company History", "Meet the Team", "Employee Handbook", "Careers"].map(item => (
              <li key={item}>
                <a className="text-white transition hover:text-red-300" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg font-medium text-white">Our Services</p>
          <ul className="mt-8 space-y-4 text-sm ml-2">
            {["Web Development", "Web Design", "Marketing", "Google Ads"].map(item => (
              <li key={item}>
                <a className="text-white transition hover:text-red-300" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="400">
          <p className="text-lg font-medium text-white">Resources</p>
          <ul className="mt-8 space-y-4 text-sm ml-2">
            {["Online Guides", "Conference Notes", "Forum", "Downloads", "Upcoming Events"].map(item => (
              <li key={item}>
                <a className="text-white transition hover:text-red-300" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links Section */}
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg font-medium text-white">Helpful Links</p>
          <ul className="mt-8 space-y-4 text-sm ml-2">
            {["FAQs", "Support", "Live Chat"].map(item => (
              <li key={item}>
                <a className="text-white transition hover:text-red-300" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay in Touch Section */}
        <div className="text-center sm:text-left md:col-span-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="800">
          <p className="text-lg font-medium text-white">Stay in Touch</p>
          <div className="mx-auto mt-8 max-w-md sm:ms-0">
            <form className="mt-4">
              <div className="flex justify-start flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                <div className="DownloadCV">
                  <input type="radio" className="radio-btn" />
                  <a className="download font-bold">Download CV</a>
                  <a className="open font-bold" href={assets.Resume} download>Open CV</a>
                </div>
                <button
                  type="submit"
                  className="block rounded-full bg-indigo-500 px-16 py-5 font-bold text-white transition hover:bg-indigo-600"
                >
                  Hire Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright and Social Media Section */}
      <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-center text-sm text-white sm:text-left">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
          <a href="https://www.facebook.com/profile.php?id=100055943003261">
            <FaFacebook className='text-2xl hover:scale-125 text-[#1877f2]' />
          </a>

          <a href="https://x.com/amolkadam1274">
            <FaTwitter className='text-2xl text-1xl hover:scale-125 text-[#1877f2]' />
          </a>

          <a href="https://www.instagram.com/_amol5256?igsh=azgyd2ppcjVteWU5">
            <FaInstagram className='text-2xl hover:scale-125 text-[#c13584]' />
          </a>

          <a href="https://github.com/amolkadam5256">
            <FaGithub className='text-2xl hover:scale-125 text-white' />
          </a>

          <a href="https://www.linkedin.com/in/amol-kadam-814167329/">
            <FaLinkedin className='text-2xl hover:scale-125 text-[#0077b5]' />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default FooterContent;
