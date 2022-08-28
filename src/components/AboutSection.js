import { useEffect, useRef, useState } from 'react'

const AboutSection = ({ aboutRef }) => {

  const [techIconsVisable, setTechIconsVisable] = useState(false);
  console.log(techIconsVisable);

  const technologiesIconSection = useRef();
  useEffect(() => {
    const techIconsObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? setTechIconsVisable(true) : setTechIconsVisable(false);
    })
    techIconsObserver.observe(technologiesIconSection.current);
  }, [])


  // let updatedDelay = '0s'
  // const increaseSlideDelay = () => {
  //   const slideDelay = getComputedStyle(document.documentElement).getPropertyValue('--tech-icon-delay')
  //   console.log(slideDelay);
    
  // }
  // increaseSlideDelay();

  return (
    <div ref={aboutRef} className='about-section px-16 py-4 h-85vh w-full bg-gradient-to-b from-indigo-300 to-indigo-100 flex flex-col items-center space-y-8'>
      <div className='technologies-section flex flex-col items-center w-full'>
        <h5 className='text-4xl font-poppins uppercase tracking-wide'>Technologies</h5>
        <div ref={technologiesIconSection} className={`tech-icons-container p-10 flex justify-evenly w-[70vw] ${techIconsVisable ? 'tech-icons-compress' : ''}`}>
          <i className={`fa-solid fa-chevron-left text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-final' : ''}`}></i>
          <i className={`fa-brands fa-react text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-1' : ''}`}></i>
          <i className={`fa-brands fa-js text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-2' : ''}`}></i>
          <i className={`fa-brands fa-html5 text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-3' : ''}`}></i>
          <i className={`fa-brands fa-css3 text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-4' : ''}`}></i>
          <i className={`fa-solid fa-chevron-right text-4xl text-indigo-700 ${techIconsVisable ? 'white-slide-final' : ''}`}></i>
        </div>
      </div>
      <div className='introduction-container flex space-x-12 w-full p-6 items-center border-2 rounded border-indigo-600 bg-indigo-100 shadow'>
        <img src={require('../assets/mock-profile-pic.jpg')} alt="profile-pic" className='object-cover object-center h-52 min-w-[13rem] border border-indigo-700 rounded-full shadow' />
        <p className='font-poppins text-lg leading-relaxed'>donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla</p>
      </div>
      <div className="hobbies-section">
        <h5 className='text-4xl font-poppins uppercase tracking-wide'>Hobbies</h5>
        <div className="hobbies-icons-container">
          <i className="fa-solid fa-futbol"></i>
          <i className="fa-solid fa-terminal"></i>
          <i className="fa-solid fa-hockey-puck"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>
      </div>
    </div>
  )
}

export default AboutSection