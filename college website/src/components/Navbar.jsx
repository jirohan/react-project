import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  } 

  return (
    <div className='w-full h-[90px] bg-blue-300'>
        <div className='w-[80%] h-full mx-auto px-4 flex justify-between items-center cursor-pointer bg-orange-500 text-white'>
            {/* logo and h1 */}
            <div className='flex items-center text-white'>
              <svg className='mr-1' id="logo-88" width="25" height="25" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z" fill="#FF630B"></path></svg>
                <h1 className='uppercase font-bold text-4xl'>NEPCOLLEGE</h1>
            </div>
            {/* ul and li elememt */}
            <div className='hidden md:flex'>
              <ul className='flex items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Teachers</li>
                <li>Contact</li>
                <button className='p-2 my-2 mx-2 rounded-xl w-[20%] items-center bg-white text-black'>Call Now</button>
              </ul>
            </div>
            {/*  hamburger menu */}
            <div onClick={handleNav} className='block md:hidden'>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {/*  mobile menu */}
            <div className={nav ? 'w-[80%] h-[50%] absolute top-[90px] left-0 justify-center bg-black/90 text-white' : 'absolute left-[-100%]'}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Teachers</li>
                <li>Contact</li>
                <button className='p-2 my-2 mx-2 rounded-xl w-[15%] bg-white text-black'>Call</button>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar