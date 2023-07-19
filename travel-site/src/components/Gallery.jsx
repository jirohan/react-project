import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700'>Gallery</h2>
        <div className='grid sm:grid-cols-3 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1486065573442-33f24b484276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div>
            <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1584780995549-43aa857e59d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1681018754447-abe57371b5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjaGhhcHVjaGhyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2F0aG1hbmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1618851142562-ff30d09313a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1524652156139-d4005e60449c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0YW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1562462181-b228e3cff9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9raGFyYSUyMG5lcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
            <div>
                <img classname='w-full h-full object-cover' src="https://images.unsplash.com/photo-1618083840944-31cc42fcf250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9raGFyYSUyMG5lcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery