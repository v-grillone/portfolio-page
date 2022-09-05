import React from 'react'

const HobbyArrow = ( {direction, changeHobby, clickHobbyArrow, setClickHobbyArrow} ) => {
  const arrowAnimationReset = () => {
    setClickHobbyArrow({left:false, right:false})
  }
  return (
    <svg width="70" height="30" viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${direction === 'left' ? 'rotate-180' : ''}`}>
      <g className={`hover:cursor-pointer`} onClick={changeHobby}>
      <path id={`${direction === 'left' ? 'left-next-arrow' : 'right-next-arrow'}`} d="M70 25L32.5 46.6506L32.5 3.34937L70 25Z" fill="#1E40AF" fillOpacity="0.7"/>
      <path id={`${direction === 'left' ? 'left-next-arrow' : 'right-next-arrow'}`} opacity="0.7" d="M50 25L12.5 46.6506L12.5 3.34937L50 25Z" fill="#7DD3FC" fillOpacity="0.7"/>
      </g>
      <g id="secondary-arrow">
      <path id={`${direction === 'left' ? 'left-secondary-arrow' : 'right-secondary-arrow'}`} d="M50 25L12.5 46.6506L12.5 3.34937L50 25Z" fill="#7DD3FC" fillOpacity="0.7" className={`translate-x-[-70%] ${(clickHobbyArrow.right && direction !== 'left') ? 'hobby-arrow-slide' : (clickHobbyArrow.left && direction === 'left') ? 'hobby-arrow-slide' : ''}`} onAnimationEnd={arrowAnimationReset}/>
      </g>
    </svg>
  )
}

export default HobbyArrow