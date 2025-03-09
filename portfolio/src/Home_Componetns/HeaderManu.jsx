// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import Navbar from './Navbar';



// New component to display
const NewComponent = () => {
    return (
        <div>
            <Navbar></Navbar>
        </div>
    );
};


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [showNewComponent, setShowNewComponent] = useState(false); // State to control visibility of new component

    const handleMenuClick = () => {
        setShowNewComponent(prev => !prev); // Toggle the visibility of the new component

        setIsOpen(!isOpen);
    };

    return (
        <>

            <div className='flex items-center justify-between p-7 absolute md:top-[53px] top-[40px] z-[200]'>

                <div className='flex group z-50 fixed  right-4 md:right-10 cursor-pointer ' onClick={handleMenuClick}>

                    {isOpen ? (
                        <i className="ri-close-fill text-3xl text-gray-400 transform transition duration-[2s] delay-50 ease-in-out   hover:scale-125"></i>  // Close icon
                    ) : (
                        <i className="ri-bar-chart-horizontal-line text-3xl text-gray-400 rotate-180 transform transition duration-[1s] delay-50 ease-in-out  hover:scale-125"></i>
                    )}
                </div>
            </div>

            {showNewComponent && <NewComponent />} {/* Conditionally render the new component */}

        </>
    )
}

export default Header
