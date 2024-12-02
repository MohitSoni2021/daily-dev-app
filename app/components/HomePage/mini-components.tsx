'use client'

import React from 'react'
import './MiniComponent.css'
import { redirect } from 'next/navigation'

export const ProfileCardHome = () => {
  const logout_operations = ()=>{
    localStorage.removeItem('logined_user_email_of_daily_dev_copy_app')
    redirect('/login')
  }

  return (
    <div className="homepage_profile_card absolute right-5 homepage_profile_card top-12 hidden rounded-lg p-2 pt-6 ">
      <div className="profile-card bg-black p-2 border-2 border-slate-600 rounded-md">
        <div className="button bg-red-600 rounded-md text-white px-6 py-2 cursor-pointer" onClick={logout_operations}>Log out</div>
      </div>
    </div>
  )
}

