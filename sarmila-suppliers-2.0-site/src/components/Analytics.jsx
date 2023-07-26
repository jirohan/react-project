import React from 'react'
import Oxygen from '../assets/oxygen.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Oxygen} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>ABOUT US</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Sarmila Suppliers</h1>
                <p className='text-[#00df9a] mb-5'>Welcome to Sarmila Suppliers!!</p>
                <p>
                Established in 2067 BS, Sarmila Suppliers is a leading healthcare provider specializing in oxygen solutions for asthma, pneumonia, and Covid patients. We offer a wide range of oxygen concentrators, nebulizers, and high-quality surgical goods. Our unwavering commitment to excellence and customer-centric approach makes us a trusted name in the industry. Let us be your source for all oxygen-related needs, and together, we can make a positive impact on people's lives. Thank you for choosing Sarmila Suppliers.
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics