import React from "react";

const Demo = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="path_to_your_video.mp4" // Replace with your video path
        autoPlay
        muted
        loop
      />

      {/* Text on top of the video */}
      <p className="bg-clip-text text-transparent bg-black text-[200px] font-bold z-10 bg-no-repeat bg-cover text-custome-bg">
        TRANSPARENT
      </p>
    </div>
  );
};

export default Demo;
