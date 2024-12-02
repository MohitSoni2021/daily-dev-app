import React from 'react'
import { FaPlus } from "react-icons/fa6";
import SidebarOptionList from './SidebarOptionList';
import { FaReact } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiTerminalWindowLight } from "react-icons/pi";
import { TbMessageReport } from "react-icons/tb";
import { AiFillHome } from 'react-icons/ai';
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from 'react-icons/cg';


const SideBarHomePage = () => {
    return (
        <div className="sidebar-container w-[240px] max-lg:w-fit max-lg:p-2 border-r-2 h-full border-[#1C1F26]  max-md:h-fit max-md:absolute max-md:bg-gray-700 max-md:w-11/12 max-md:left-1/2 max-md:-translate-x-1/2 rounded-2xl px-4 max-md:z-50 max-md:bottom-2">

            <div className="mid-device-options flex items-center flex-col gap-5 max-lg:flex max-md:flex-row justify-between lg:hidden">
                <img src="https://cdn.brandfetch.io/idDVDWwMN7/w/256/h/256/theme/dark/icon.png?c=1id64Mup7ac03k1S4NH&k=bfHSJFAPEG" alt="" className='h-12 rounded-lg max-md:hidden max-md:px-4 '/>

                <button className=' flex flex-col items-center text-[#A8B3CF]'>
                    <AiFillHome className='text-2xl'/>
                    <p className=' text-xs'>Home</p>
                </button>

                <button className=' flex flex-col items-center text-[#A8B3CF]'>
                    <IoSearchSharp className='text-2xl'/>
                    <p className=' text-xs'>Explore</p>
                </button>

                <button className=' flex flex-col items-center text-[#A8B3CF]'>
                    <FaReact  className='text-2xl'/>
                    <p className=' text-xs'>Squads</p>
                </button>

                <button className=' flex flex-col items-center text-[#A8B3CF]'>
                    <CgProfile   className='text-2xl'/>
                    <p className=' text-xs'>Profile</p>
                </button>

                <button className=' flex flex-col items-center bg-[#1C1F26] p-1 rounded-lg text-[#A8B3CF]'>
                    <FaPlus className='text-xl'/>
                </button>


            </div>

            <div className="SidebarMenu-Options text-[#9DA7C2] flex flex-col gap-5 mt-5 max-lg:hidden">
                <ul>
                    <SidebarOptionList
                    icons = {"M"}
                    title = "My Feed"
                    IconBgColor = "bg-orange-500"
                    />
                    <SidebarOptionList
                    icons = {<FaPlus />}
                    title = "Custom Feed"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                </ul>
                <ul>
                    <small className='px-3 font-bold'>Squads</small>
                    <SidebarOptionList
                    icons = {<FaReact />}
                    title = "My Feed"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<FaPlus />}
                    title = "New Squad"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                </ul>
                <ul>
                    <small className='px-3 font-bold'>Discover</small>
                    <SidebarOptionList
                    icons = {<FaFireFlameCurved/>}
                    title = "Explore"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<TbMessage />}
                    title = "Disscussions"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<FaHashtag />}
                    title = "Tags"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<CiGlobe />}
                    title = "Sources"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<IoPeople />}
                    title = "LeaderBoard"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                </ul>
                <ul>
                    <small className='px-3 font-bold'>Activity</small>
                    <SidebarOptionList
                    icons = {<FiLink/>}
                    title = "Submit a link"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<BsBookmark />}
                    title = "Bookmarks"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<FiEye />}
                    title = "history"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                </ul>

                <ul className='absolute bottom-0'>
                    <small className='px-3 font-bold'>Activity</small>
                    <SidebarOptionList
                    icons = {<IoDocumentTextOutline/>}
                    title = "Docs"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<PiTerminalWindowLight />}
                    title = "Changelogs"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                    <SidebarOptionList
                    icons = {<TbMessageReport />}
                    title = "Feedbacks"
                    IconBgColor = "bg-[#1C1F26]"
                    />
                </ul>
                
            </div>
        </div>
    )
}

export default SideBarHomePage
