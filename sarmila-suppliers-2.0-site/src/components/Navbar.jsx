import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black bg-white'>
        
        <img src={Logo} className='w-[50px] h-[50px] cursor-pointer' alt="" />
        <h1 className='w-full text-l font-bold text-[#000000] cursor-pointer'>SARMILA SUPPLIERS</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Service</li>
            <li className='p-4'>Product</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} className='cursor-pointer'/> : <AiOutlineMenu size={20} className='cursor-pointer'/>}
        </div>
        {/* mobile menu */}
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img src={Logo} className='ml-4 mt-6 w-[50px] h-[50px] cursor-pointer' alt="" />
                <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>About</li>
                <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Service</li>
                <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Product</li>
                <li className='p-4 border-b border-gray-600 text-white cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar