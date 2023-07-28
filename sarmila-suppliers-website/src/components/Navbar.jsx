import React, { useState } from 'react'
import logo from '../assets/logo.png';

import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='w-full h-[90px] bg-gray-100'>
      <div className='max-w-[1240px] h-full mx-auto px-4 flex justify-between items-center cursor-pointer bg-gray-100'>
        <div className='flex'>
          <img src={logo} className='w-20 h-20' alt="" />
        </div>
        <div className='hidden md:flex'>
          <ul className='flex items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Products</li>
            <li>Contact</li>
            <button className='px-4 py-2'>Call Now</button>
          </ul>
        </div>
        {/* <div className='hidden md:flex gap-2'>
          <button className='px-4 py-2'>Call Now</button>
        </div> */}
        {/* Hamburger Menu */}
        <div onClick={handleClick} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'w-full absolute top-[90px] left-0 justify-center text-center bg-black text-white py-4 ease-in duration-200' : 'absolute left-[-100%]'}>
          <ul className='flex flex-col items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Products</li>
            <li>Contact</li>
            <button className='px-4 py-2'>Call Now</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar