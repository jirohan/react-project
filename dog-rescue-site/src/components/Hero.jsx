import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover' />
        <div className='max-w-[1040px] m-auto'>
            <div className='absolute top-[20%] left-[30%] md:top-[40%] md:left-[10%] w-full max-w-[1040px] h-full flex flex-col text-white '>
                <h1 className='font-bold text-3xl md:4xl lg:text-6xl'>WE CARE FOR <span className='md:block'>YOUR DOG</span></h1>
                <h4>We always try to provide your dog the best services.</h4>
            </div>
        </div>
    </div>
  )
}

export default Hero