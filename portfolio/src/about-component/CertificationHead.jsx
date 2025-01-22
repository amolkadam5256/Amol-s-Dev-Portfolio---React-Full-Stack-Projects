import React from 'react'
import { BiSolidCertification } from "react-icons/bi";
import { PiNotepadFill } from "react-icons/pi";

const CertificationHead = () => {
    return (
        <>
            <div className="relative flex items-center justify-center text-center gap-20  py-20 mt-1">
                <div className='relative flex items-center justify-center text-center'>
                    <BiSolidCertification className="absolute text-blue-600 md:text-9xl text-8xl" />
                    <PiNotepadFill className='absolute text-white md:text-6xl text-5xl' ></PiNotepadFill>

                </div>
                <div>
                    <h1 className="md:text-6xl text-3xl font-[anzo5] text-white md:first-letter:text-6xl first-letter:text-4xl">Certification</h1>
                </div>
            </div>

        </>
    )
}

export default CertificationHead
