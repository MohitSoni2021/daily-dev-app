import React from 'react'
import SideBarHomePage from './SideBarHomePage';
import MainContentComponent from './MainContentComponent';
import NavbarHomePage from './NavbarHomePage';
import OptionListMidDevice from './OptionListMidDevice';





const HomePageLayout = () => {
  return (
    <div className='h-full'>
      <NavbarHomePage/>
      <div className="bottom-container flex h-full">
        <SideBarHomePage />
        <div className="main-content-box overflow-scroll mb-12 hidescrollbar scroll w-full">
          <OptionListMidDevice />
          <MainContentComponent />
        </div>
      </div>
    </div>
  )
}

export default HomePageLayout
