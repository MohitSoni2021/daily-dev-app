'use client'

import React from 'react'
import HomePageLayout from './components/HomePage/HomePageLayout'
import { redirect } from 'next/navigation'


const loginCheckMiddleware = ()=>{
  if(localStorage.getItem('logined_user_email_of_daily_dev_copy_app')==null){
    redirect('/login')
  }
}
loginCheckMiddleware();

const MainPage = () => {
  return (
    <div className='h-full'>
      <HomePageLayout />
    </div>
  )
}

export default MainPage
