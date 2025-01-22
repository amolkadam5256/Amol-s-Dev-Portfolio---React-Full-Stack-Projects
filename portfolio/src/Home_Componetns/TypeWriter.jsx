// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
    const [textTyper] = useTypewriter({
        words: ['Developer', 'Frontend Developer ', 'Full Stack Developer', 'Junior Java Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 1500, // Optional: delay between typing and deleting
    });

    return (
        <div>
            <h1 className="text-white font-semibold mt-5 text-2xl md:text-4xl">
                I'm a {''}
                <span className="font-bold text-white">
                    {textTyper || ' '} {/* default space if text is undefined */}
                </span>
                <span className='text-[#FF6500]'>
                    <Cursor cursorStyle="|" />

                </span>
            </h1>
        </div>
    );
};

export default TypeWriter;