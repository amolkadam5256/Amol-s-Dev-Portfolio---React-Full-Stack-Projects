// eslint-disable-next-line no-unused-vars
import React from 'react'
import assets from '../assets/images/assets'

const Hobbiesimg3 = () => {
    return (
        <div className="flex justify-evenly items-center flex-col md:flex-row wave bg-no-repeat bg-center bg-cover py-10">
            {/* Image Section */}
            <div className="flex justify-center md:order-1 order-2">
                <img src={assets.swmming} alt="headphone" className="max-w-xs md:max-w-sm" />
            </div>
            
            {/* Text Section */}
            <div className=" block justify-center text-center md:order-2 order-1 ">
                <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">I Love Swimming</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat dolor animi!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
            </div>
        </div>
    )
}

export default Hobbiesimg3;
