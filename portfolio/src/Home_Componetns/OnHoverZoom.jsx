// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import assets from '../assets/images/assets';
import { MdOutlineZoomOutMap } from "react-icons/md";

const OnHoverZoom = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block p-1 bg-gray-200 border border-gray-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src={assets.post_1}
          alt="zoom"
          className="w-[500px] object-cover transition-transform duration-700 transform hover:scale-125"
        />
      </div>
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 border-gray-200 p-2 z-10">
          <p className="flex justify-center items-center">
            <MdOutlineZoomOutMap className="text-white block text-2xl" />
          </p>
        </div>
      )}
    </div>
  );
};

export default OnHoverZoom;
