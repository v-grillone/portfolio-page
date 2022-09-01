import { useEffect, useRef, useState } from 'react'

const AboutSection = ({ aboutRef }) => {

  const [techIconsVisable, setTechIconsVisable] = useState(false);

  const technologiesIconSection = useRef();
  useEffect(() => {
    const techIconsObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? setTechIconsVisable(true) : setTechIconsVisable(false);
    })
    techIconsObserver.observe(technologiesIconSection.current);
  }, [])

  const [hobbiesIconPosition, setHobbiesIconPosition] = useState({
    icon1: 'left-[0%]',
    icon2: 'left-[50%]',
    icon3: 'left-[100%]',
    icon4: 'left-[150%]'
  })

  const changeHobby = (e) => {
    let iconsPositionArr = Object.values(hobbiesIconPosition).map(iconPosition => Number(iconPosition.slice(6,iconPosition.indexOf('%'))));
    console.log(iconsPositionArr);
    if(e.target.id === 'right-next-arrow' && iconsPositionArr[0] !== 50){
      let updatedRight = {}
      iconsPositionArr.map(position => position + 50).forEach((item, index) => {updatedRight[`icon${index + 1}`] = String(`left-[${item}%]`)});
      setHobbiesIconPosition(updatedRight);
    }else if(e.target.id === 'left-next-arrow' && iconsPositionArr[iconsPositionArr.length - 1] !== 50){
      let updatedLeft = {}
      iconsPositionArr.map(position => position - 50).forEach((item, index) => {updatedLeft[`icon${index + 1}`] = String(`left-[${item}%]`)});
      setHobbiesIconPosition(updatedLeft);
    }
  }

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
      <div className='introduction-container flex space-x-12 w-full p-6 items-center rounded bg-indigo-100 shadow'>
        <img src={require('../assets/mock-profile-pic.jpg')} alt="profile-pic" className='object-cover object-center h-52 min-w-[13rem] border border-indigo-700 rounded-full shadow' />
        <p className='font-poppins text-lg leading-relaxed'>donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla</p>
      </div>
      <div className="hobbies-section flex flex-col space-y-6 items-center">
        <h5 className='text-4xl font-poppins uppercase tracking-wide'>Hobbies</h5>
        <div className="hobbies-icons-container flex flex-row w-72 justify-between">
          <span id='left-next-arrow' className='w-12 aspect-[1/1] bg-no-repeat bg-center bg-cover bg-next-arrow rotate-180 hover:cursor-pointer text-white z-[20]' onClick={changeHobby}></span>
          <ul className='hobbies-icons-list flex flex-row list-none w-full relative'>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon1} transform -translate-x-1/2 -translate-y-1/2 z-10`}>
              <i className={`fa-solid fa-futbol text-5xl ${hobbiesIconPosition.icon1 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon2} transform -translate-x-1/2 -translate-y-1/2 z-10`}>
              <i className={`fa-solid fa-terminal text-5xl ${hobbiesIconPosition.icon2 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon3} transform -translate-x-1/2 -translate-y-1/2 z-10`}>
              <i className={`fa-solid fa-hockey-puck text-5xl ${hobbiesIconPosition.icon3 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon4} transform -translate-x-1/2 -translate-y-1/2 z-10`}>
              <i className={`fa-solid fa-gamepad text-5xl ${hobbiesIconPosition.icon4 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
            </li>
          </ul>
          <span id='right-next-arrow' className='w-12 aspect-[1/1] bg-no-repeat bg-center bg-cover bg-next-arrow hover:cursor-pointer z-20' onClick={changeHobby}></span>
        </div>
      </div>
    </div>
  )
}

export default AboutSection