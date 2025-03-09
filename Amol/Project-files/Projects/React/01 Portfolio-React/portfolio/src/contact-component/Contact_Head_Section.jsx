// eslint-disable-next-line no-unused-vars
import React from 'react';
import assets from '../assets/images/assets';

const Contact_Head_Section = () => {
  return (
    <>
      <div>


        <div className="relative w-full">
          {/* Responsive Images */}
          <img className="w-full hidden md:block opacity-60" src={assets.contact_full} alt="Header illustration" />
          <img className="w-full block md:hidden opacity-60" src={assets.contact_head_sm} alt="Header illustration for mobile" />

          {/* Heading positioned at the left bottom */}
          <h1 className="absolute bg-white text-black left-4 md:left-10 -bottom-6 p-2 text-lg md:text-2xl lg:text-3xl font-bold shadow-md rounded-md">
            Home \ Contact Us
          </h1>
        </div>
      </div>
    </>
  )
}

export default Contact_Head_Section
