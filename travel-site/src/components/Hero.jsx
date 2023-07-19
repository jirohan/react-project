import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1571401847270-78ab5f316800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" className='w-full h-full object-cover' />
        <div className='max-w-[1200px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Monthly</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta, rerum eaque nisi porro rem possimus, eos, in dicta facere necessitatibus corrupti commodi itaque eveniet at doloremque quia dolor qui.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero