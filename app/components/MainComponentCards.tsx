import React from 'react'
import { BiSolidComment, BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi'
import { CiBookmark } from 'react-icons/ci'
import { FaLink } from 'react-icons/fa6'

const MainComponentCards = () => {
  return (
    <div className="card-container-dev text-white bg-[#1C1F26] w-[318px] px-4 py-2 rounded-lg flex flex-col gap-2 pt-4 border-[1px] border-gray-700 hover:border-[#7147ED] transition-all duration-200 max-md:w-full hover:cursor-pointer hover:scale-105">
                    <div className="logo-container">
                        <img src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/medium" className='w-[36px] h-[36px]' alt="" />
                    </div>
                    <h2 className='text-xl font-bold'>
                        Variable Naming Best Practices in JavaScript
                    </h2>
                    <span className='border-2 border-[#6F788A] text-[#6F788A] text-xs p-0.5 rounded-lg w-fit'>#javascript</span>
                    <span className='text-[#A8B3CF] text-xs'>Sep 05 4m read time</span>
                    <img src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3741bafbe43cd95e774fd2bd4afe0e3a?_a=AQAEuiZ" alt="" className='rounded-lg' />
                    <div className="options-container flex items-center justify-between">
                        <div className='flex items-center gap-2 bg-[#272B34] w-fit rounded-md text-[#A8B3CF]'>
                            <span className='flex gap-1 items-center p-1'><BiSolidUpvote className=' scale-150'/> 1.6K</span>
                            <span className='p-1 border-l-2 border-[#A8B3CF] aspect-square'><BiSolidDownvote className=' scale-150'/></span>
                        </div>
                        <span className='flex items-center gap-1 text-[#A8B3CF]'>
                            <BiSolidComment className=' scale-150'/>
                            24.6K
                        </span>
                        <CiBookmark className=' scale-150'/>
                        <FaLink className=' scale-150'/>
                    </div>
                </div>
  )
}

export default MainComponentCards
