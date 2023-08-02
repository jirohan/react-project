import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'
import list from "../list.json"

const renderLinks = () => {
    return(
        <div className='bg-white absolute top-[110px] flex flex-col items-start rounded-xl p-4 w-[200px] cursor-pointer shadow-2xl'>
                            {list.map((item, i) => (
                                <div className='flex w-full justify-between hover:bg-gray-50 cursor-pointer rounded-r-xl border-l-transparent p-2 hover:border-l-green-700 border-l-4 ' key={i}>
                                    <h3>{item.dropdown}</h3>
                                    <ul>
                                        {item.links.map((link, j) => (
                                            <li key={j}>
                                                <a href={link.url}>{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>    
                            ))}
                        </div>
    )
};

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className='w-full h-[90px] bg-gray-50'>
        <div className='max-w-[1240px] h-full mx-auto px-4 flex justify-between items-center'>
            {/* Logo and Name */}
            <div className='flex'>
                <h1 className='text-4xl font-medium'>Dogger<span className='font-bold text-4xl text-green-700'>.</span></h1>
            </div>
            {/* ul and li */}
            <div className='hidden md:flex'>
                <ul className='flex items-center text-lg'>
                    <li>Home</li>
                    <div className='relative items-center p-4'>
                        <button
                            onClick={() => {setIsOpen((prev) => !prev);}} className='text-black hover:text-green-700 justify-between flex'>
                                About
                                {
                                    isOpen ? (
                                        <AiOutlineCaretUp className='h-7'  /> ) : ( <AiOutlineCaretDown className='h-7' />)
                                }
                        </button>
                            {isOpen && <div className='bg-red-50 absolute top-[90px] flex flex-col items-start rounded-xl p-4 w-[200px] cursor-pointer shadow-2xl'>
                                {list.map((item, i) => (
                                    <div className='flex w-full justify-between hover:bg-gray-50 cursor-pointer rounded-r-xl border-l-transparent p-2 hover:border-l-green-700 border-l-4' key={i}>
                                        <h3>{item.dropdown}</h3>
                                    </div>    
                                ))}
                                </div>}
                    </div>
                    <li>Trainers</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* hamburger */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-black'/> :<AiOutlineMenu size={30} className='text-black' />}
            </div>
            {/* mobile menu */}
            <div className={nav ? 'w-[45%] h-[45%] absolute top-[90px] right-0 justify-center bg-white text-black shadow-lg ' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul className='text-xl'>
                    <li>Home</li>
                    <div className='flex flex-col p-4'>
                        <button 
                            onClick={() => setIsOpen((prev) => !prev)} className='text-black hover:text-green-700 justify-between flex'>
                                About
                                {
                                    isOpen ? (
                                        <AiOutlineCaretUp className='h-7'  /> ) : ( <AiOutlineCaretDown className='h-7' />)
                                }
                            </button>
                            {isOpen && renderLinks()}
                    </div>
                    <li>Trainers</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar

