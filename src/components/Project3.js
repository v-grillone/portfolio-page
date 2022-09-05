import React from 'react'

import project1Img from '../assets/mock-profile-pic.jpg'
import reactSvg from '../assets/react-svgrepo-com.svg'
import cssSvg from '../assets/css3-svgrepo-com.svg'
import jsSvg from '../assets/js-svgrepo-com.svg'
import tailwindSvg from '../assets/tailwindcss-icon-svgrepo-com.svg'
import BtnMain from './BtnMain'

const Project3 = ({ project3Ref }) => {

  const handleClick = () => {

  }

  return (
    <div ref={project3Ref} id="project3-section" className='project3-section h-85vh bg-gradient-to-b from-indigo-100 to-indigo-300 p-10 flex flex-col items-center space-y-6 relative'>
      <h3 className='font-poppins text-2xl font-bold'>Project Title</h3>
      <div className='project-container w-full max-h-[90%] bg-white flex flex-col items-center space-y-4 boder rounded border-gray-800 shadow'>
        <div className='project-img-continer w-full h-[40%] bg-red-200'>
          <img className="object-cover object-center h-full w-full" src={project1Img} alt="project-1-background" />
        </div>
        <div className='project-text-container text-sm px-6'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
        </div>
        <div className='project-techs-container w-full px-6 flex flex-row items-center justify-center space-x-2'>
          <img className='w-8' src={reactSvg} alt="" />
          <img className='w-8' src={tailwindSvg} alt="" />
        </div>
        <div className='project-source-code-container'>
          <BtnMain text={`Source Code`} handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Project3