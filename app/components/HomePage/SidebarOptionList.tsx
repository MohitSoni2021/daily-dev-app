import React from 'react'

const SidebarOptionList = (props:any) => {
    return (
        <div className='p-1 hover:bg-white/10 cursor-pointer px-3 flex gap-3 h-8 items-center hover:text-white'>
            <div className={`text-white logo-container-sidebar w-6 flex items-center justify-center aspect-square rounded-md ${props.IconBgColor}`}>
                {props.icons}
            </div>
            <span className='text-sm '>{props.title} </span>
        </div>
    )
}

export default SidebarOptionList
