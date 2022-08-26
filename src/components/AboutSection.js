import React, { useRef } from 'react'

const AboutSection = ({ aboutRef }) => {

  return (
    <div ref={aboutRef} className='about-section h-85vh bg-gradient-to-b from-indigo-300 to-indigo-100'>
      <p>About section</p>

    </div>
  )
}

export default AboutSection