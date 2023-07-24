import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-30 relative lg:col-span-1 col-span-2'>
            <h3 className='text-3xl font-bold lg:text-4xl'>Fine Interior Rooms</h3>
            <p className='pt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore unde nesciunt minus doloribus repellendus!
            </p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-3'>
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            <img className='object-cover w-full h-full' src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZGl2ZXMlMjBob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        </div>
    </div>
  )
}

export default Rooms