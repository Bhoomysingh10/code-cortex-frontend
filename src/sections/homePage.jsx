import React from 'react'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <div className='h-[100vh] w-[100vw] bg-gradient-to-b from-[#1A161E] to-[#282231]'>
            <div className=''>
                <div className='bg-black w-[40rem] h-[15rem] rounded-xl absolute top-[10rem] left-[5rem] flex items-center p-5 font-extrabold text-white text-[42px] leading-tight'>
                Revolutionizing Wellness: Detect Mental Fatigue with AI
                </div>  
            </div>

            <div className='bg-[#5e558e76] h-[15rem] w-[38rem] absolute bottom-[10rem] rounded-xl left-[5rem] p-5 text-white text-[42px] flex flex-col gap-3'>
                <p>15/17
                2025</p>
                <p className='font-bold'>OCTOBER</p>
                <button className='button bg-white h-[1rem] w-[20%] rounded-xl text-black flex items-center justify-center uppercase text-[18px] font-bold p-5'>
                    Start
                </button>
            </div>

            <div className='h-[15rem] w-[15rem] rounded-xl absolute right-[10rem] top-[8rem]'>
                <img src="/emo-1.png" alt="" />
            </div>
            <div className='h-[15rem] w-[15rem] rounded-xl absolute right-[26rem] top-[25rem]'>
                <img src="/emo-2.png" alt="" />
            </div>

            <div className='h-[25rem] w-[18rem] rounded-xl absolute right-[3rem] top-[25rem]'>
                <img src="/emo-3.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default HomePage