import React from 'react'

import project1Img from '../assets/mock-profile-pic.jpg'
import reactSvg from '../assets/react-svgrepo-com.svg'
import cssSvg from '../assets/css3-svgrepo-com.svg'
import jsSvg from '../assets/js-svgrepo-com.svg'
import tailwindSvg from '../assets/tailwindcss-icon-svgrepo-com.svg'
import BtnMain from './BtnMain'

const Project2 = ({ project2Ref }) => {
  
  return (
    <div ref={project2Ref} id="project2-section" className='project2-section h-85vh bg-gradient-to-b from-indigo-300 to-indigo-100 p-10 flex flex-col items-center space-y-6 relative'>
      <h3 className='font-poppins text-2xl md:text-4xl font-bold'>Weather App</h3>
      <div className='project-container w-full max-h-[90%] bg-white flex flex-col md:flex-row items-center space-y-4 md:space-y-0 boder rounded border-gray-800 shadow'>
        <div className='project-img-continer w-full md:w-[75%] h-[40%] md:h-full bg-red-200'>
          <img className="object-cover object-center h-full w-full" src={project1Img} alt="project-1-background" />
        </div>
        <div className="project-description-container flex flex-col md:w-[25%] items-center justify-evenly h-full ">
          <div className='project-text-container text-sm md:text-base px-6'>
            <p>Weather App is an application using a global weather API allowing the user to input a city name and return the current temperature, wind speeds, and a 7-day forecast for that city.</p>
          </div>
          <div className='project-techs-container w-full px-6 flex flex-row items-center justify-center space-x-2'>
            <img className='w-8' src={reactSvg} alt="" />
            <img className='w-8' src={tailwindSvg} alt="" />
          </div>
          <div className='project-source-code-container'>
            <BtnMain text={`Source Code`} url={'https://github.com/v-grillone/cv-creator'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2