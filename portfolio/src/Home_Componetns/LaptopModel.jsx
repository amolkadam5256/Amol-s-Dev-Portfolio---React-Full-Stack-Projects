import React, { useState } from "react";
import assets from "../assets/images/assets"; // Ensure correct path for videos
import "../index.css"; // Ensure the CSS for animation is included

const LaptopModel = () => {
    const [videoSource, setVideoSource] = useState(assets.moon);

    const handleMouseEnter = () => {
        setVideoSource(assets.earth); // Change to the new video on hover
    };

    const handleMouseLeave = () => {
        setVideoSource(assets.moon); // Reset to original video when hover ends
    };

    return (
        <div
            className="relative block md:flex bg-black w-full bg- py-10 "
            onMouseEnter={handleMouseEnter} // Trigger video change on hover
            onMouseLeave={handleMouseLeave} // Reset video on hover out
        >
            <img
                src={assets.time}
                alt="Image"
                className="relative flex justify-center items-center w-[20%] ml-20 object-cover rotate-animation"
            />
            {/* <video
                autoPlay
                loop
                muted
                className="relative flex justify-center items-center w-[50%] object-cover bg-transparent milky-glass"
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
        </div>
    );
};

export default LaptopModel;
