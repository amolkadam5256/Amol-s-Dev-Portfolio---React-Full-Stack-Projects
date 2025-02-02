import React from 'react'

const HomeCopyWrite = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center pt-10 text-black">
            <h3 className="text-[0.9rem] tracking-[2px]">
                © {currentYear} Amol Kadam |<br className="md:hidden" /> designed and developed
            </h3>
        </div>
    )
}

export default HomeCopyWrite;
