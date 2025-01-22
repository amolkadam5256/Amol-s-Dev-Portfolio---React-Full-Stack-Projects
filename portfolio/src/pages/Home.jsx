// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../Home_Componetns/Hero'
import HomeCopyWrite from '../Home_Componetns/HomeCopyWrite'
import Slogan from '../Home_Componetns/Slogan'
import StarAnimation from '../Home_Componetns/StarAnimation'
import Demo from '../Demo'

const Home = () => {
  return (
    <>
      <div className="relative overflow-hidden">

        {/* Hero section  */}
        <StarAnimation />
        <Hero />

        {/* copy Write text section */}
        <HomeCopyWrite />

        {/* Slogan section */}
        <Slogan />

      </div>
      <Demo />
    </>

  )
}

export default Home  
