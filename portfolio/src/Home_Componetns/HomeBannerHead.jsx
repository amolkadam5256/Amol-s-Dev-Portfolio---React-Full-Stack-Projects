import React from 'react'

const HomeBannerHead = () => {
    return (
        <div>
            <div className='flex flex-col relative w-full h-52  custom-gif bg-cover bg-center bg-no-repeat'>

                <div className=' flex flex-col relative backdrop-blur-sm w-full h-full m-auto'>

                    <h1 className='font-[Nosifer] text-3xl md:text-5xl m-auto  text-white text-center'>
                        What
                        <span className='px-2 text-pink-600'>
                            I
                        </span>
                        Do
                        <span className='pl-1 text-blue-500'>
                            ?
                        </span>
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default HomeBannerHead
