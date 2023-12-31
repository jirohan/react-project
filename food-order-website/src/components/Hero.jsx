import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1360px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best Food</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>in </span>Kathmandu </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://i0.wp.com/tipsnepals3.sgp1.cdn.digitaloceanspaces.com/2020/08/newari-food.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero