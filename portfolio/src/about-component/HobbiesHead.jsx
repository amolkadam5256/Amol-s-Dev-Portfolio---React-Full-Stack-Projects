// eslint-disable-next-line no-unused-vars
import React from 'react'
import assets from '../assets/images/assets'

const HobbiesHead = () => {
    return (
        <>
            <div className='md:flex block relative justify-center items-center py-20 mt-1'>
                <div>
                    <h1 className='text-center md:text-7xl text-5xl font-[anzo5]'>My Hobbies</h1>
                </div>

                <div className='flex justify-center'>
                    <img className='w-[70%]' src={assets.Hobbies_head} alt="Hobbies-img" />
                </div>
            </div>
        </>
    )
}

export default HobbiesHead
