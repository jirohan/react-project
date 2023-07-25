import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 gap-2 max-w-[1240px] m-auto'> 
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 mt-0'>
                <p className='text-2xl'>Oxygen Cylinder and Products</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Oxygen Suppliers</h1>
                <p className='text-2xl'>We provide you all the medical equipments</p>
                <button className='py-3 px-8 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/8260447/pexels-photo-8260447.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[100%] h-[80%]' alt="" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-8%] mx-1 md:translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>OUR SERVICES</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'>Oxygen Cylinder</p>
                    <p className='flex px-4 py-2 text-slate-500'>Oxygen Concentrator</p>
                    <p className='flex px-4 py-2 text-slate-500'>Medical Equipment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero