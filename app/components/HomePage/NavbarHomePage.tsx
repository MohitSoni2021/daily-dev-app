import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { CiBellOn } from 'react-icons/ci'
import { ImSearch } from 'react-icons/im'

const NavbarHomePage = () => {
  return (
    <nav className=' border-b-2 border-[#1C1F26] flex p-3 justify-between relative max-lg:hidden max-md:flex'>
        <div className='flex items-center w-full justify-between  max-xl:justify-start max-xl:w-fit'>
          <img src="https://miro.medium.com/v2/resize:fit:1200/0*_eGXmwqKm6zShcv8" alt="" className='h-10 w-[118px]' />
          <div className='flex bg-[#1C1F26] p-1 rounded-lg gap-1 absolute left-1/2 -translate-x-1/2 w-[450px] px-2 max-xl:relative max-md:hidden'>
            <ImSearch className='text-[#A8B3CF] w-10 h-10 p-2' />
            <input type="text" className='outline-none w-full bg-transparent text-white text-lg' placeholder='Search' />
          </div>

        </div>
        <div className='flex items-center w-full justify-end gap-2'>
          <button className='px-5 py-1 bg-white h-10 rounded-md font-bold max-md:hidden'>New Post</button>
          <button className=' hover:text-white max-md:hidden'> <CiBellOn className=' text-white w-10 p-2 rounded-md h-10 bg-[#1A1F26] aspect-square' /> </button>
          <div className='h-10 bg-[#1C1F26] p-1  flex gap-3 rounded-md'>
            <div className='p-1 gap-3 flex'>
              <div className='flex h-full gap-1 items-center'>
                <div className='h-full aspect-square rounded-full border-2 border-dashed border-red-600'></div>
                <span className=' font-bold text-white text-lg'>0</span>
              </div>
              <div className='flex h-full gap-1 items-center'>
                <div className='h-full aspect-square rounded-full  flex items-center justify-center p-0.5'><AiFillThunderbolt className='bg-[#7147ED] rounded-full w-full h-full p-0.5' /></div>
                <span className=' font-bold text-white text-lg'>0</span>
              </div>
            </div>
            <div className='h-full aspect-square bg-orange-600 rounded-md flex items-center justify-center text-xl font-bold text-white'>M</div>
          </div>
        </div>
      </nav>
  )
}

export default NavbarHomePage
