// eslint-disable-next-line no-unused-vars
import React from 'react'
import assets from '../assets/images/assets'
import Loader from './Loader '

const Hobbiesimg2 = () => {
  return (
    <>
      <div className="flex justify-evenly items-center flex-col md:flex-row py-10">
            {/* Text Section */}
            <div className="text-center ">
                <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">watching documentaries <br /> and movies</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat dolor animi!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat</p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <Loader></Loader>
                <img src={assets.popcorn} alt="headphone" className="max-w-xs md:max-w-lg w-[80%] transition-all delay-150 " />
            </div>

            
            
        </div>
    </>
  )
}

export default Hobbiesimg2
