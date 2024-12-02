import React from 'react';
import './loginStyle.css';
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";




const LoginPage = () => {
    return (
        <div className='background-login'>
            <img src="https://daily-now-res.cloudinary.com/image/upload/s--EwsBTBt6--/f_auto/v1716969841/dailydev_where_developers_suffer_together_mobile_shkn1w" className=' z-0' alt="" />

            <div className="content-container container px-5  z-10 mx-auto text-white my-20" >

                <div className="header-container flex justify-between items-center">
                    <div className="logo-container rounded-lg overflow-hidden">
                        <img src="https://console.dev/img/favicons/daily.dev.jpg" alt="" />
                    </div>
                    <div className="sign-up-container">
                        <button className='px-7 py-2 bg-transparent border-2 rounded-lg text-white hover:bg-white/15 hover:shadow-lg transition-all duration-200'>
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="form-elements-container max-w-sm flex flex-col gap-5">
                    <div className="text-content1 text-4xl font-semibold bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-transparent bg-clip-text ">
                        Where developers suffer together
                    </div>
                    <div className="text-content2 text-2xl">
                        We know how hard it is to be a developer. It doesn't have to be. Personalized news feed, dev community and search, much better than what's out there. Maybe
                    </div>

                    <div className="form-container flex flex-col gap-3">

                        <div className="email-input-container flex items-center gap-2 bg-white/10 rounded-md px-3 py-3 max-sm:py-1 hover:border-l-2 border-white ">
                            <div className=' w-5 h-5 flex items-center justify-center'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="email"> <path id="vector" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path id="vector_2" d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> </g> </g> </g></svg>
                            </div>

                            <div className='flex flex-col w-full'>
                                <input type="email" name="EmailInputContainer" className='bg-transparent outline-none  ' id="" placeholder='Email' />
                            </div>
                        </div>

                        <button className=' w-full text-center py-3 bg-white rounded-lg text-black font-bold flex items-center justify-center gap-3 hover:bg-cyan-200'>
                            Sign up - Free Forever <FaArrowRight className='text-lg' />
                        </button>

                        <div className=' relative py-5'>
                            <div className='h-[2px]  bg-gray-700 '></div>
                            <p className=' absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black px-3 rounded-lg'>Or sign up with</p>
                        </div>

                        <button className=' w-full text-center py-3 bg-white rounded-lg text-black font-bold flex items-center justify-center gap-3 hover:bg-cyan-200'>
                            <FcGoogle className='text-2xl' /> Google
                        </button>

                        <button className=' w-full text-center py-3 bg-white rounded-lg text-black font-bold flex items-center justify-center gap-3 hover:bg-cyan-200'>
                            <TbBrandGithubFilled className='text-2xl text-black' /> Github
                        </button>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginPage
