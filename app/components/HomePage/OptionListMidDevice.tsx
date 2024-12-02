import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const OptionListMidDevice = () => {
  return (
    <div className='hidden max-lg:flex overflow-x-scroll hidescrollbar w-full'>
        <div className=' p-2 flex gap-2 border-b-[2px] border-[#1C1F26]' >
            <button className='bg-[#1C1F26] p-1 flex items-center justify-center text-[#A8B3CF] aspect-square rounded-md'><FaPlus /></button>
            <button className='bg-[#1C1F26] p-1 flex items-center justify-center font-bold text-[#A8B3CF] px-3 rounded-md w-[57px]'>For you</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>Discussions</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>Tags</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>Sources</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>LeaderBoard</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>Bookmarks</button>
            <button className=' p-1 flex items-center justify-center font-bold text-[#8767ea] px-3 rounded-md'>History</button>
        </div>
    </div>
  )
}

export default OptionListMidDevice
