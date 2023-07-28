import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full bg-white'>
        <div className='max-w-[1240px] h-[90px] mx-auto px-4 flex justify-between items-center text-black bg-white'>
            {/* LOGO AND TEXT */}
            <div className='flex items-center'>
                <img src={Logo} className='w-[50px] h-[50px] cursor-pointer' alt="" />
                <h1 className='w-full text-l font-bold text-[#000000] cursor-pointer'>SARMILA SUPPLIERS</h1>
            </div>
            {/* ul and li elements */}
            <div className='hidden md:flex cursor-pointer'>    
                <ul className='flex items-center'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Service</li>
                    <li className='p-4'>Product</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>    
            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className='cursor-pointer'/> : <AiOutlineMenu size={20} className='cursor-pointer'/>}
            </div>
            {/* mobile menu */}
            <div className={nav ? 'w-[70%] h-full fixed left-0 top-0 border-r border-r-gray-900 bg-[#000300] justify-center text-start ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='flex'>
                    <img src={Logo} className='ml-4 mt-6 w-[50px] h-[50px] cursor-pointer' alt="" />
                    <h1 className='w-full text-l mt-9 mr-4 font-bold text-[#ffffff] cursor-pointer'>SARMILA SUPPLIERS</h1>
                </div>
                <ul>
                    <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>About</li>
                    <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Service</li>
                    <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Product</li>
                    <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Contact</li>
                </ul>
            </div>    
        </div>
    </div>    
  )
}

export default Navbar