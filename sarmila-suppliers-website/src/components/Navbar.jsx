import React, { useState } from 'react'
import logo from '../assets/logo.png';

import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
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
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden cursor-pointer' onClick={handleClick}>
          {!nav ? <AiOutlineMenu size={30}/> : < AiOutlineClose size={30}/> }
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Service</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-black px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
      
    </div>
  )
}

export default Navbar