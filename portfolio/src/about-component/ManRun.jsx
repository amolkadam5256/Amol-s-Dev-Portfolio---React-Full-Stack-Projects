// eslint-disable-next-line no-unused-vars
import React from 'react'
import run_man from '../assets/run_man.gif';
import butterfly from '../assets/butterfly.gif';
import '../Animation.css'
const ManRun = () => {
    return (
        <>
        <div className="overflow-hidden">
            <div className="flex md:gap-40 gap-12  animate-scroll">
                <img className="md:w-40 w-24" src={run_man} alt="Running Man" />
                <h1>Hire Me</h1>
                <img className="md:w-40 w-24 rotate-[75deg] hue-rotate-90" src={butterfly} alt="Butterfly" />
            </div>
        </div>

        </>
    )
}

export default ManRun
