import React from 'react'

const BtnMain = ({text, url}) => {

  const clickHandler = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  }

  return (
    <button className='bg-indigo-600 rounded text-white font-poppins hover:bg-indigo-500 duration-200 mx-4 px-6 py-2' onClick={clickHandler}>{text}</button>
  )
}

export default BtnMain