// eslint-disable-next-line no-unused-vars
import React from 'react'
import AboutHeadSection from '../about-component/AboutHeadSection'
import SelfIntro from '../about-component/SelfIntro'
import Education from '../about-component/Education'
import Skills from '../about-component/Skills'
import Certification from '../about-component/Certification'
import Hobbies from '../about-component/Hobbies'

const About = () => {
  return (
    <>
      <div className='p-0  overflow-hidden bg-white'>

        {/* head sectoin for about page */}

        <AboutHeadSection></AboutHeadSection>

        {/* self intro section  */}

        <SelfIntro></SelfIntro>

        <Education></Education>


        <Skills></Skills>

        <Certification></Certification>

        <Hobbies></Hobbies>

      </div>
    </>
  )
}

export default About
