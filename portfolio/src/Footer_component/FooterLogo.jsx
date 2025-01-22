// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/images/assets';

const FooterLogo = () => {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex justify-center sm:justify-start m-5 ml-0 md:ml-20 ">
                <img className='w-40 cursor-pointer' src={assets.logo_transpern} alt="Company Logo" />
                </div>

                <p className="mt-4 max-w-md text-center leading-relaxed text-white sm:text-left lg:mt-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                    cum itaque neque.
                </p>
            </div>
        </div>
    )
}

export default FooterLogo
