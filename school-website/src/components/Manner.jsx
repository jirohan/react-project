import React from 'react'

const Manner = () => {
  return (
    <div className='w-full py-16 bg-black text-white px-4'>
        
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>Teaching Your Child Some Good Manners</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='py-4'>
                <button className='px-4 py-3 rounded-full text-white bg-orange-400 hover:bg-orange-500'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Manner