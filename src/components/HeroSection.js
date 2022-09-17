import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-section flex flex-col justify-center items-center space-y-4 p-4 relative h-screen pt-[15vh] z-[-1]'>
      <p className='text-xl md:text-5xl font-silkscreen text-white'>Hello my name is</p>
      <img id='hero-img-upper' className='hero-img h-10 md:h-20 w-[75vw] ml-48 rounded object-cover object-center-top shadow' src={require('../assets/hero-background-org.jpg')} alt="" />
      <p className='hero-name text-xl md:text-5xl font-silkscreen relative max-w-max text-indigo-700'>Vincenzo</p>
      <img id='hero-img-mid' className='hero-img h-10 md:h-20 w-[75vw] mr-48 rounded object-cover object-center shadow' src={require('../assets/hero-background-org.jpg')} alt="" />
      <p className='text-xl md:text-5xl font-silkscreen text-white'>I am a</p>
      <img id='hero-img-lower' className='hero-img h-10 md:h-20 w-[75vw] ml-48 rounded object-cover object-center-bottom shadow' src={require('../assets/hero-background-org.jpg')} alt="" />
      <p className='hero-title text-xl md:text-5xl font-silkscreen relative text-indigo-700'>Frontend Developer</p>

    </div>
  )
}

export default HeroSection