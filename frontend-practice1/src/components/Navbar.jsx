import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full min-h-[50px] flex justify-between'>
        <header>
            <nav className='flex items-center justify-between bg-white text-Black gap-4 py-4 px-4'>
                <a className='font-bold text-4xl' href="">ME</a>
                <div className='flex items-center justify-between '>
                    <ul className='flex justify-between gap-4'>
                        <li>
                            <a href="/live">Live</a>
                        </li>
                        <li>
                            <a href="/push">Push</a>
                        </li>
                        <li>
                            <a href="/note">Note</a>
                        </li>
                        <li>
                            <a href="/link">Link</a>
                        </li>
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li>
                            <a href="/packs">Packs</a>
                        </li>
                        <li>
                            <a href="/help">Help</a>
                        </li>
                        <li>
                            <a href="/more">More</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar