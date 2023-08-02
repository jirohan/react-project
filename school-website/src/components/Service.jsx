import React from 'react'
import {FaChild} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {PiCertificateBold} from 'react-icons/pi'
import {GiTeacher} from 'react-icons/gi'

const Service = () => {
  return (
    <div className='relative flex mt-[-10px] md:mt-[-100px]'>
        <div className='w-full relative mx-auto grid md:grid-cols-4 px-0 py-0'>
            <div className='flex flex-col justify-evenly items-center'>
                <div className='bg-white sm:border sm:border-black md:border-none md:border-transparent w-[80px] rounded-full relative px-[25px] py-[25px] justify-center items-center z-20'>
                    <FaChild size={30} className='text-blue-800'/>
                </div>
                <div className='bg-blue-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Certified Teachers</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <div className='bg-white sm:border sm:border-black md:border-none md:border-transparent w-[80px] rounded-full  px-[25px] py-[25px] justify-center items-center z-20'>
                    <GiTeacher size={30} className='text-blue-800 '/>
                </div>
                <div className='bg-green-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Special Education</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <div className='bg-white sm:border sm:border-black md:border-none md:border-transparent w-[80px] rounded-full  px-[25px] py-[25px] justify-center items-center z-20'>
                    <BsBookHalf size={30} className='text-blue-800 '/>
                </div>
                <div className='bg-purple-700 text-white px-4 py-6 text-center h-[250px] z-10 mt-[-20px]'>
                    <h2 className='text-2xl font-semibold'>Book & Library</h2>
                    <p className='my-2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <div className='bg-white sm:border sm:border-black md:border-none md:border-transparent w-[80px] rounded-full  px-[25px] py-[25px] justify-center items-center z-20'>
                    <PiCertificateBold size={30} className='text-blue-800 '/>
                </div>
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