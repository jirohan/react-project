import React from 'react'
import {BsFillMapFill} from 'react-icons/bs'
import {AiTwotoneMail, AiFillPhone} from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='flex sm:flex flex-col sm:items-start sm:justify-start md:flex-row md:justify-evenly md:items-center bg-blue-400 text-white px-4 py-4 md:h-12'>
        {/* info */}
            {/* Address */}
            <div className='flex items-center px-6 py-2'>
              <BsFillMapFill size={20} className='mr-2'/>
              <p className='text-sm '>Tyangla, Kirtipur</p>
            </div>
            <div className='flex items-center px-6 py-2'>
              <AiTwotoneMail size={20} className='mr-2'/>
              <p className='text-sm '>info@abcschool.com</p>
            </div>
            <div className='flex items-center px-6 py-2'>
              <AiFillPhone size={20} className='mr-2'/>
              <p className='text-sm '>+977 9841987452</p>
            </div>
    </div>
  )
}

export default Topbar