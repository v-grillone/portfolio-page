import { useEffect, useRef, useState } from 'react'
import HobbyArrow from './HobbyArrow';

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
    icon4: 'left-[150%]',
    icon5: 'left-[200%]'
  })

  const [clickHobbyArrow, setClickHobbyArrow] = useState({
    left: false,
    right: false
  });

  const changeHobby = (e) => {
    let iconsPositionArr = Object.values(hobbiesIconPosition).map(iconPosition => Number(iconPosition.slice(6,iconPosition.indexOf('%'))));
    console.log(iconsPositionArr);
    if(e.target.id === 'right-next-arrow' && iconsPositionArr[0] !== 50){
      setClickHobbyArrow({left: false, right: true});
      let updatedRight = {}
      iconsPositionArr.map(position => position + 50).forEach((item, index) => {updatedRight[`icon${index + 1}`] = String(`left-[${item}%]`)});
      setHobbiesIconPosition(updatedRight);
    }else if(e.target.id === 'left-next-arrow' && iconsPositionArr[iconsPositionArr.length - 1] !== 50){
      setClickHobbyArrow({left: true, right: false});
      let updatedLeft = {}
      iconsPositionArr.map(position => position - 50).forEach((item, index) => {updatedLeft[`icon${index + 1}`] = String(`left-[${item}%]`)});
      setHobbiesIconPosition(updatedLeft);
    }
  }

  return (
    <div ref={aboutRef} id="about-section" className='about-section md:px-16 px-4 md:py-4 h-85vh w-full bg-gradient-to-b from-indigo-300 to-indigo-100 flex flex-col items-center justify-evenly md:space-y-0'>
      <div className='technologies-section flex flex-col items-center w-full'>
        <h5 className='md:text-4xl text-2xl font-poppins uppercase tracking-wider text-white'>Technologies</h5>
        <div ref={technologiesIconSection} className={`tech-icons-container md:p-10 p-2 flex justify-evenly md:w-[50vw] w-[95vw] ${techIconsVisable ? 'tech-icons-compress' : ''}`}>
          <i className={`fa-solid fa-chevron-left md:text-4xl text-2xl text-indigo-700`}></i>
          <i className={`fa-brands fa-react md:text-4xl text-2xl text-indigo-700 ${techIconsVisable ? 'white-slide-1' : ''}`}></i>
          <i className={`fa-brands fa-js md:text-4xl text-2xl text-indigo-700 ${techIconsVisable ? 'white-slide-2' : ''}`}></i>
          <i className={`fa-brands fa-html5 md:text-4xl text-2xl text-indigo-700 ${techIconsVisable ? 'white-slide-3' : ''}`}></i>
          <i className={`fa-brands fa-css3 md:text-4xl text-2xl text-indigo-700 ${techIconsVisable ? 'white-slide-4' : ''}`}></i>
          <i className={`fa-solid fa-chevron-right md:text-4xl text-2xl text-indigo-700`}></i>
        </div>
      </div>
      <div className='introduction-container flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-4 md:w-full w-[85%] max-h-72 md:mb-5 md:p-6 p-4 md:mb-6 items-center rounded bg-indigo-100 shadow'>
        <img src={require('../assets/mock-profile-pic.jpg')} alt="profile-pic" className='object-cover object-center md:h-52 h-20 md:min-w-[13rem] min-w-[5rem] border border-indigo-700 rounded-full shadow' />
        <p className='font-poppins md:text-lg text-sm leading-relaxed md:overflow-hidden overflow-scroll'>donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla</p>
      </div>
      <div className="hobbies-section flex flex-col space-y-6 items-center">
        <h5 className='md:text-4xl text-xl font-poppins uppercase tracking-wider'>Interests & Hobbies</h5>
        <div className="hobbies-icons-container flex flex-row w-72 justify-between items-center">
          <HobbyArrow direction={'left'} changeHobby={changeHobby} clickHobbyArrow={clickHobbyArrow} setClickHobbyArrow={setClickHobbyArrow}/>
          <ul className='hobbies-icons-list flex flex-row list-none relative'>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon1} transform -translate-x-1/2 -translate-y-1/2 `}>
              <div id="icon1" className={`${hobbiesIconPosition.icon1 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'} flex flex-col items-center`}>
                <i className={`fa-solid fa-futbol md:text-4xl text-3xl animate-spin ${hobbiesIconPosition.icon1 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
                <p className='font-poppins text-xs md:text-base'>Soccer</p>
              </div>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon2} transform -translate-x-1/2 -translate-y-1/2 `}>
              <div className={`${hobbiesIconPosition.icon2 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'} flex flex-col items-center`} id="icon2">
                <i className={`fa-solid fa-terminal md:text-4xl text-3xl ${hobbiesIconPosition.icon2 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
                <p className='font-poppins text-xs md:text-base'>Coding</p>
              </div>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon3} transform -translate-x-1/2 -translate-y-1/2 `}>
              <div className={`${hobbiesIconPosition.icon3 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'} flex flex-col items-center`} id="icon3">
                <i className={`fa-solid fa-hockey-puck md:text-4xl text-3xl`}></i>
                <p className='font-poppins text-xs md:text-base'>Hockey</p>
              </div>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon4} transform -translate-x-1/2 -translate-y-1/2 `}>
              <div className={`${hobbiesIconPosition.icon4 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'} flex flex-col items-center`} id="icon4">
                <i className={`fa-solid fa-gamepad md:text-4xl text-3xl ${hobbiesIconPosition.icon4 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`}></i>
                <p className='font-poppins text-xs md:text-base'>Gaming</p>
              </div>
            </li>
            <li className={`absolute top-1/2 ${hobbiesIconPosition.icon4} transform -translate-x-1/2 -translate-y-1/2`}>
              <div className={`${hobbiesIconPosition.icon5 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'}`} id="icon5">
                <i className={`fa-solid fa-dumbbell md:text-4xl text-3xl ${hobbiesIconPosition.icon5 === 'left-[50%]' ? 'opacity-1' : 'opacity-0'} flex flex-col items-center`}></i>
                <p className='font-poppins text-xs md:text-base'>Fitness</p>
              </div>
            </li>
          </ul>
          <HobbyArrow direction={'right'} changeHobby={changeHobby} clickHobbyArrow={clickHobbyArrow} setClickHobbyArrow={setClickHobbyArrow}/>
        </div>
      </div>
    </div>
  )
}

export default AboutSection