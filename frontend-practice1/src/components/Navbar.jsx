import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] '>
        <div className='max-w-full h-full mx-auto px-4 flex justify-between items-center cursor-pointer bg-blue-100'>
            <div className='flex'>
                <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
                <h1 className='text-[var(--primary-orange)]'>LAM</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-gray-500 items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Product</li>
                    <li>Contact</li>
                    <button className='ml-4'>Get Started</button>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-orange-400' /> : <AiOutlineMenu size={30} className='text-orange-400' />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center ease-in duration-200' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-xl'>Home</li>
                    <li className='text-xl'>About</li>
                    <li className='text-xl'>Service</li>
                    <li className='text-xl'>Product</li>
                    <li className='text-xl'>Contact</li>
                    <button className='m-8'>Get Started</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar