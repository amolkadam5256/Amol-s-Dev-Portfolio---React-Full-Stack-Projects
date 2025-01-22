// eslint-disable-next-line no-unused-vars
import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'

const Footer = () => {
    return (
        <>
            <div className='p-4 bg-black'>
                <FooterLogo></FooterLogo>
                <FooterContent></FooterContent>
            </div>

        </>
    )
}

export default Footer
