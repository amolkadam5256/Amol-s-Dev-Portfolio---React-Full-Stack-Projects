// eslint-disable-next-line no-unused-vars
import React from 'react';
import WhatIDo1 from './WhatIDo1';
import OnHoverZoom from './OnHoverZoom';
import WhatIDo2 from './WhatIDo2';
import HomeBannerHead from './HomeBannerHead';

const HomeBanner = () => {
    return (
        <div className=' mt-5 bg-white relative'>
            {/* Heading component in "What I Do?" page */}
            <HomeBannerHead></HomeBannerHead>
            
            {/*  first banner banner  */}

            <div className='block md:flex justify-center items-center bg-black w-full mt-2 py-10'>
                {/* Left side of "What I Do?" page */}
                <div className='flex-1'>
                    <WhatIDo1></WhatIDo1>
                </div>

                {/* Right side of "What I Do?" page: Image */}
                <div className='flex-1 flex justify-center items-center relative'>
                    <OnHoverZoom></OnHoverZoom>
                </div>
            </div>



            {/*  second banner  */}
            <div className='block md:flex justify-center items-center bg-black w-full mt-2 py-10'>

                {/* left side of "What I Do?" page: Image */}
                <div className='flex-1 flex justify-center items-center relative'>
                    <OnHoverZoom></OnHoverZoom>

                </div>

                {/* right side of "What I Do?" page */}
                <div className='flex-1'>
                    <WhatIDo2></WhatIDo2>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
