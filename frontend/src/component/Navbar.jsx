import React from 'react'
import logo from '../assets/logo.png';
import userlogo from '../assets/userlogo.png';

function Navbar() {
  return (
    <>
    <div className="bg-green-800 flex fixed w-full top-0 left-0 z-10">
        <div>
          <a href="/"><img src={logo} className="w-50 py-0 ml-8 my-1" alt="logo" /></a>
       </div>
        <div className='flex list-none px-2 py-0 gap-14 text-lg text-gray-200 justify-center items-center w-full mr-12 '>
            <li className='cursor-pointer hover:text-white hover:underline underline-offset-8 hover:-translate-y-1 transition-all duration-300 ease-in-out'>Home</li>
            <li className='cursor-pointer hover:text-white hover:underline underline-offset-8 hover:-translate-y-1 transition-all duration-300 ease-in-out'>Services</li>
            <li className='cursor-pointer hover:text-white hover:underline underline-offset-8 hover:-translate-y-1 transition-all duration-300 ease-in-out'>About</li>
            <li className='cursor-pointer hover:text-white hover:underline underline-offset-8 hover:-translate-y-1 transition-all duration-300 ease-in-out'>Blog</li>
            <li className='cursor-pointer hover:text-white hover:underline underline-offset-8 hover:-translate-y-1 transition-all duration-300 ease-in-out'>Contact</li>
        </div>
        <div className='flex justify-center items-center gap-4 mr-14'>
            <p className='cursor-pointer hover:text-white text-lg bg-blue-500 py-1 rounded-sm
                            px-4 text-gray-200'>Login</p>
            <img src={userlogo} className="w-10 h-10 rounded-full" alt="User" />
        </div>
    </div>
    </>
  )
}

export default Navbar
