import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>VACATIONS</h1>
        <HiMenuAlt3 className='text-white cursor-pointer z-20' size={25} />
        <div className='fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'>
            <ul>
                <li>Home</li>
                <li>Destinations</li>
                <li>Reservations</li>
                <li>Amenities</li>
                <li>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar