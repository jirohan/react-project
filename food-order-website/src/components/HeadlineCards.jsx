import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1360px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Chaku Yomari</p>
                <p className='px-2'>Available</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://askmeaboutnepal.com/wp-content/uploads/2021/12/Yomari_double.jpg" alt="" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Buff Choila</p>
                <p className='px-2'>Available</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://www.century-foods.com/wp-content/uploads/2021/05/Buff-chhoila-recipe.jpg" alt="" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Egg Woo</p>
                <p className='px-2'>Available</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://nepalicookbook.com/wp-content/uploads/2015/08/black-gram-pancake-maasko-bara.jpg" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards