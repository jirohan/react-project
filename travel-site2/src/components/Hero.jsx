import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='bg-black/25 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div>
            <p>All Inclusive</p>
            <h1>Private Beaches & Getaways</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis ipsum esse nulla quae reiciendis officiis, alias facere cupiditate! Rerum perspiciatis id delectus architecto. Error incidunt ab vel enim ipsum.</p>
            <button>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero