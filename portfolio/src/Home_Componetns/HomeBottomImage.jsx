// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/images/assets';


const HomeBottomImage = () => {
    return (
        <div className="relative block ">

            <div className='relative block'>
                <img className='relative md:w-15 lg:w-24 w-16 pb-2' src={assets.logo_bg_remove} alt="" />
                <img className='relative md:w-15 lg:w-24 w-16' src={assets.logo_bg_remove} alt="" />

            </div>
        </div>
    )
}

export default HomeBottomImage
