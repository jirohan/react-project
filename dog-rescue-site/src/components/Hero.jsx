import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt=""  />
        <div className='w-full m-auto'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
              <div className='left-[20%] top-[20%] md:left-[10%] md:top-[50%] max-w-[1100px] m-auto absolute p-4'>
                <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl'>
                WE CARE FOR <span className='md:block'>YOUR DOG</span>
                </h1>
                <p>We always try to provide <span className='md:block'>your dog the best services.</span></p>
                <button className='border py-2 px-3 rounded-full'>Call Now</button>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero