import React, { useState } from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiOutlineCaretUp, AiOutlineCaretDown, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import list from "../list.json"

const App = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full h-[90px] py-2 px-6 md:px-0 '>
      <div className='max-w-[1240px] bg-gray-50 h-full mx-auto px-8 flex justify-between items-center cursor-pointer shadow-xl'>

        {/* logo */}
        <div className='flex items-center'>
          <BsFillHouseFill size={30} className='mr-2 text-cyan-600'/>
          <h1 className='text-3xl font-bold text-cyan-600'>PIN</h1>
        </div>

        {/* ul and li */}
        <div className='hidden md:flex'>
          <ul className='flex'>
            <li>Home</li>
            <div className='realtive items-center p-4'>
              <button onClick={()=> setIsOpen((prev) => !prev)} className='hover:text-cyan-600 text-gray-600 justify-between flex'>
                Properties
                {
                  isOpen ? (<AiOutlineCaretUp className='h-7'/>) : (<AiOutlineCaretDown className='h-7' />)
                }
              </button>
              {
                isOpen && <div className='bg-white absolute top-[70px] flex flex-col items-start w-[200px] p-4 cursor-pointer shadow-lg' >
                  {list.map((item, i) => (
                  <div className='flex w-full justify-between hover:bg-gray-50 hover:text-cyan-600 rounded-r-xl border-l-transparent p-2' key={i}>
                    <h3>{item.dropdown}</h3>
                  </div>
                  ))}
                  </div>
              }
            </div>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block md:hidden'>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu 
               size={30}/> }
        </div>
        {/* mobile menu */}
        <div className={nav ? 'w-[45%] h-[45%] absolute top-[82px] right-0 justify-center bg-white text-black shadow-lg' : 'absolute right-[-100%]'}>
              <ul>
                <li>Home</li>
                <div className='realtive items-center p-4'>
                <button onClick={()=> setIsOpen((prev) => !prev)} className='hover:text-cyan-600 text-gray-600 justify-between flex'>
                    Properties
                    {
                    isOpen ? (<AiOutlineCaretUp className='h-7'/>) : (<AiOutlineCaretDown className='h-7' />)
                    }
                </button>
                {
                    isOpen && <div className='bg-white absolute top-[110px] flex flex-col items-start w-[200px] p-4 cursor-pointer shadow-lg' >
                    {list.map((item, i) => (
                    <div className='flex w-full justify-between hover:bg-gray-50 hover:text-cyan-600 rounded-r-xl border-l-transparent p-2' key={i}>
                        <h3>{item.dropdown}</h3>
                    </div>
                    ))}
                    </div>
                }
                </div>
                <li>Services</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default App