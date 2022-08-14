import React from 'react'
import { useState } from 'react'
import BtnMain from './BtnMain'

const Navigation = () => {

  const [dropdownActive, setDropdownActive] = useState(false);

  const menuDropdown = () => {
    setDropdownActive(!dropdownActive);
  }

  return (
    <nav className='h-15vh p-8 fixed w-full bg-white md:p-5 md:flex md:items-center md: justify-between'>
        <div className='flex flex-row items-center justify-between relative z-[3]'>
            <span className='flex flex-row items-center space-x-2 cursor-pointer '>
              <i className="fa-solid fa-code fa-lg "></i>
              <span className='text-3xl font-mono cursor-pointer'>Vincenzo Grillone</span>
            </span>
            <span className='cursor-pointer mx-2 md:hidden block'>
              <i className={`fa-solid ${dropdownActive ? 'fa-x' : 'fa-bars'} fa-xl`} onClick={menuDropdown}></i>
            </span>
        </div>
        <span className='absolute z-[2] bg-white w-screen h-15vh top-0 left-0 shadow'></span>
        <ul id='menu-list' className={`md:flex md:items-center z-[1] md:z-[4] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${dropdownActive ? 'top-[100%] opacity-100': '-top-96 opacity-0'} transition-all ease-in duration-500`}>
            <li className='mx-4 my-6 md:py-0'><a className='text-xl hover:text-indigo-600 duration-200' href={'#'}>About Me</a></li>
            <li className='mx-4 my-6 md:my-0'><a className='text-xl hover:text-indigo-600 duration-200' href={'#'}>Project 1</a></li>
            <li className='mx-4 my-6 md:my-0'><a className='text-xl hover:text-indigo-600 duration-200' href={'#'}>Project 2</a></li>
            <li className='mx-4 my-6 md:my-0'><a className='text-xl hover:text-indigo-600 duration-200' href={'#'}>Project 3</a></li>
            <li className='mx-4 my-6 md:my-0'><a className='text-xl hover:text-indigo-600 duration-200' href={'#'}>Reach Out</a></li>
            <BtnMain text='Resume' />
        </ul>
    </nav>
  )
}

export default Navigation