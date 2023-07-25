import React from 'react'
import logo from '../assets/logo.png';

import {AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <img className='w-20 h-25 mr-4' src={logo} alt="" />
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Out</button>
        </div>
      </div>
      <AiOutlineMenu size={30}/>
    </div>
  )
}

export default Navbar