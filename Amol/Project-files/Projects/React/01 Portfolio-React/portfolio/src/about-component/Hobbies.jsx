// eslint-disable-next-line no-unused-vars
import React from 'react'
import HobbiesHead from './HobbiesHead'
import Hobbiesimg from './Hobbiesimg'
import Hobbiesimg2 from './Hobbiesimg2'
import Hobbiesimg3 from './Hobbiesimg3'

const Hobbies = () => {
    return (
        <>
            <div className='bg-black text-white mb-1'>
                <HobbiesHead></HobbiesHead>
                <Hobbiesimg></Hobbiesimg>
                <Hobbiesimg2></Hobbiesimg2>
                <Hobbiesimg3></Hobbiesimg3>
            </div>
        </>
    )
}

export default Hobbies
