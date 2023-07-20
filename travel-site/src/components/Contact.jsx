import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
        <form>
          <div className='grid grid-cols-2'>
              <input className='border m-2 p-2' type="text" placeholder='First' />
              <input className='border m-2 p-2' type="text" placeholder='Last' />
              <input className='border m-2 p-2' type="email" placeholder='Email' />
              <input className='border m-2 p-2' type="tel" placeholder='Phone' />
              <input className='border col-span-2 m-2 p-2' type="text" placeholder='Address' />
              <textarea className='border col-span-2 m-2 p-2' id="" cols="30" rows="10"></textarea>
              <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact