import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1574223706388-0e0f6f0390b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ad?</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate debitis architecto tenetur esse ea fugit, consectetur cum illo voluptates, quod doloremque quas non delectus consequuntur alias, voluptas impedit iste.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white mr-4 hover:shadow-xl' l>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan