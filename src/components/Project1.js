import React from 'react'

const Project1 = ({ project1Ref, sectionRef }) => {
  return (
    <div ref={project1Ref} id='project1-section' className='project1-section h-85vh bg-gradient-to-b from-indigo-100 to-indigo-300'>
      <p>project 1</p>

    </div>
  )
}

export default Project1