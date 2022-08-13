import React from 'react'

const BtnMain = ({text, handleClick}) => {
  return (
    <button className='bg-indigo-600 rounded text-white hover:bg-indigo-500 duration-200 mx-4 px-6 py-2' onClick={handleClick}>{text}</button>
  )
}

export default BtnMain