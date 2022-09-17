import React from 'react'

import project1Img from '../assets/mock-profile-pic.jpg'
import reactSvg from '../assets/react-svgrepo-com.svg'
import cssSvg from '../assets/css3-svgrepo-com.svg'
import jsSvg from '../assets/js-svgrepo-com.svg'
import tailwindSvg from '../assets/tailwindcss-icon-svgrepo-com.svg'
import BtnMain from './BtnMain'

const Projects = ( {project1Ref, project2Ref, project3Ref }) => {

  const projects = {
    project1: {
      id: 1,
      title: 'CV Creator',
      img: project1Img,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
      techs: [reactSvg, tailwindSvg]
    },
    project2: {
      id: 2,
      title: 'CV Creator',
      img: project1Img,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
      techs: [reactSvg, tailwindSvg]
    },
    project3: {
      id: 3,
      title: 'CV Creator',
      img: project1Img,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
      techs: [reactSvg, tailwindSvg]
    }
  }

  return (
    Object.keys(projects).map(project => {
      return <div key={project} ref={`${project}Ref`}>{project}</div>
    })
    // Object.keys(projects).map(project => 
    //   <div key={projects[project].id} ref={`${projects[project]}Ref`} id={`${project}-section`} className={`${project}-section h-85vh bg-gradient-to-b from-indigo-100 to-indigo-300 p-10 flex flex-col items-center space-y-6 relative`}>
    //     <h3 className='font-poppins text-2xl md:text-4xl font-bold'>{project.title}</h3>
    //     <div className='project-container w-full max-h-[90%] bg-white flex flex-col md:flex-row items-center space-y-4 md:space-y-0 boder rounded border-gray-800 shadow'>
    //       <div className='project-img-continer w-full md:w-[75%] h-[40%] md:h-full bg-red-200'>
    //         <img className="object-cover object-center h-full w-full" src={project.img} alt="project-background" />
    //       </div>
    //       <div className="project-description-container flex flex-col md:w-[25%] items-center justify-evenly h-full ">
    //         <div className='project-text-container text-sm md:text-base px-6'>
    //           <p>{project.text}</p>
    //         </div>
    //         <div className='project-techs-container w-full px-6 flex flex-row items-center justify-center space-x-2'>
    //           <img className='w-8' src={reactSvg} alt="" />
    //           <img className='w-8' src={tailwindSvg} alt="" />
    //         </div>
    //         <div className='project-source-code-container'>
    //           <BtnMain text={`Source Code`} url={`https://github.com/v-grillone/cv-creator`} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>)
  )
}

export default Projects