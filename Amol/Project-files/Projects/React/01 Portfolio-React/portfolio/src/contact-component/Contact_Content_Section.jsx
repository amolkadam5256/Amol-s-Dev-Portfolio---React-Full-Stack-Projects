// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";

const Contact_Content_Section = () => {
    return (
        <>
            <div className='md:flex px-20 py-20 mt-10 gap-20'>

                <div className='md:w-1/3 block  p-5 md:p-7 relative rounded-lg text-base text-white bg-white/10 shadow-[0_6px_24px_0_rgba(255, 0, 0, 0.2),0_0_0_6px_rgba(204, 0, 0, 0.06)] '>
                    <div>
                        <p className=' flex justify-center text-7xl'>
                            <FaLocationCrosshairs></FaLocationCrosshairs>
                        </p>
                        <h2>address</h2>
                        <span>1215 Lorem Ipsum, Ch 176080 </span>
                        <span>Chandigarh , INDIA</span>
                    </div>
                </div>


                <div className=' md:w-1/3 block  p-5 md:p-7 relative rounded-lg text-base text-white bg-white/10 shadow-[0_6px_24px_0_rgba(255, 0, 0, 0.2),0_0_0_6px_rgba(204, 0, 0, 0.06)] break-words'>
                    <div>
                        <p className=' flex justify-center text-7xl'>
                            <FaLocationCrosshairs></FaLocationCrosshairs>
                        </p>
                        <h2>E-mail</h2>
                        <span>info@LoremIpsum.com</span>
                        <span>yourmail@gmail.com</span>
                    </div>
                </div>
                <div className='md:w-1/3 block  p-5 md:p-7 relative rounded-lg text-base text-white bg-white/10 shadow-[0_6px_24px_0_rgba(255, 0, 0, 0.2),0_0_0_6px_rgba(204, 0, 0, 0.06)]'>
                    <div>
                        <p className=' flex justify-center text-7xl'>
                            <FaLocationCrosshairs></FaLocationCrosshairs>
                        </p>
                        <h2>office time</h2>
                        <span>Mon - Thu  9:00 am - 4.00 pm</span>
                        <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Content_Section
