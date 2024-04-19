import React from 'react'
import Itemcont from './Itemcont'
// import Login from '../other/Login'
import Logo from "../other/Logo"
function Footer() {
  return (
    <div className='bg-[#424242] text-[#F5F0E1]  w-[100%] overflow-x-hidden  bottom-0 mt-5'>
      <div className='md:flex md:justify-center md:items-center sm:px-12 sm:py-4 py-5'>
        <h1 className='md:text-4xl text-2xl md:mb:0 md:6 font-semibold md:w-2/5'>
            <span className='text-slate-300'> Feel Free</span>
                         { " "}to give feedbacks
        </h1>
        <div>
            <input type="text" placeholder='Enter Feedback ' className='w-full sm:w-72 sm:mr-4 lg:mb-0 py-2 focus:outline-none rounded-md p-2 text-black' />
            <button className='rounded-md hover:scale-110 bg-[#D1A611] text-[#000080] md:w-auto m-2 md:m-0 p-2'> Submit</button>
        </div>
      </div>
      <Itemcont/>
      <div className='mt-3 mb-3 '>
        <p className='md:text-3xl text-xl text-red-600  flex justify-center'> All rights reserved BlogSpire     <Logo/> </p>
      </div>
    </div>
  )
}

export default Footer
