// Loader.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center rotate-[340deg]">
      <div className="relative w-14 h-16 bg-[#3D314A] overflow-hidden">
        <div className="absolute left-1 w-0.5 h-[120%] border-l-4 border-dashed border-[#ffffff] animate-roll"></div>
        <div className="absolute right-1 w-0.5 h-[120%] border-l-4 border-dashed border-[#ffffff] animate-roll"></div>
      </div>
      <p className="mt-2  uppercase tracking-wider font-[anzo3]">
      watching 
      </p>
    </div>
  );
};

export default Loader;
