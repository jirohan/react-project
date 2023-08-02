import React from 'react'
import {FaChild} from 'react-icons/fa'

const Service = () => {
  return (
    <div className='relative flex mt-[-105px]'>
        <div className='w-full relative mx-auto grid lg:grid-cols-4 px-4 py-16'>
            <div className='flex flex-col items-center'>
                <div className='bg-black w-[80px] rounded-full relative px-[35px] py-[25px] justify-center items-center z-20'>
                    <FaChild size={30} className='text-blue-800 '/>
                </div>
                <div className='bg-blue-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Certified Teachers</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                <div className='bg-green-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Special Education</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                <div className='bg-purple-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Book & Library</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                <div className='bg-red-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Certification</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service