import React from 'react'
import schoolVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video 
          className='w-full h-full object-cover'
          src={schoolVid} 
          autoPlay 
          loop 
          muted
        />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='font-bold text-4xl md:text-6xl'>Best School <span className='md:block'>in the Valley</span></h1>
          <div className='my-3'>
            <button className='border px-2 py-2 w-[200px] rounded-full hover:bg-gray-300 hover:text-black'>Join Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero