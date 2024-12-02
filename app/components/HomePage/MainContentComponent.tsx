import React from 'react'
import { BiSolidComment, BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';
import { CiBookmark } from 'react-icons/ci';
import { FaLink } from 'react-icons/fa6';
import { LuSettings2 } from "react-icons/lu";
import MainComponentCards from '../MainComponentCards';

const MainContentComponent = () => {
    return (
        <div className='flex flex-col justify-center items-center py-8 w-full'>

            <div className='w-fit flex flex-col gap-10 ' >
                <button className="feeds-setting-icons text-[#A8B3CF] w-fit hover:text-white flex items-center gap-2 bg-[#20262D] py-2 px-4 rounded-md"><LuSettings2 /> Feed Settings</button>

                <div className="main-content-container w-fit gap-4 grid grid-cols-3 mx-auto max-xl:grid-cols-2 max-md:grid-cols-1 container p-2 max-md:pb-36">

                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />
                    <MainComponentCards />



                </div>
            </div>

        </div>
    )
}

export default MainContentComponent
