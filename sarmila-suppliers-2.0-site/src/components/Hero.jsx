import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] uppercase font-bold p-2'>Best Oxygen Service in Kathmandu</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Oxygen Available 24/7</h1>
            <div className='flex justify-center items-center'>
                <p className='md:tex-5xl sm:text-4xl text-xl font-bold py-4'>Contact us for all kinds of </p>
                <Typed className='md:tex-4xl sm:text-3xl text-lg font-bold md:pl-4 pl-2' strings={['Oxygen', 'Concentrator', 'Medical Goods']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl rext-xl font-bold text-gray-500'>We provide you all the Medical Equipment, Oxygen, Surgical Goods.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero