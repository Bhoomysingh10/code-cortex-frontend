import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const HomePage = () => {
  
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const user = localStorage.getItem('user');

  const handleCapture = async () => { 
    const captureData =  await axios.post('http://localhost:8080/start/video');
    const emotions = captureData.data.emotion_data;
    const response = await axios.post('http://localhost:5052/api/user/capture', {
      user: user, 
      emotion_data: emotions,
    }, 
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  console.log(response);
  }


  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      const day = date.getDate(); 
      const month = date.toLocaleString('default', { month: 'long' }); 
      setCurrentDate(day);
      setCurrentMonth(month);
    };

   
    updateTime();
    const interval = setInterval(updateTime, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar bgColor={'bg-[#1A161E]'} textColor={'text-white'} />
      <div className='h-screen w-screen bg-gradient-to-b from-[#1A161E] to-[#282231]'>

        
        <div className=''>
          <div className='bg-[#1A161E] w-[45rem] h-[15rem] rounded-xl absolute top-[28%] left-[5rem] flex items-center p-5 font-extrabold text-white text-[42px] leading-tight'>
            Revolutionizing Wellness: Detect Mental Fatigue with AI
          </div>  
        </div>

    
        <div className='bg-[#282231] h-[8rem] w-[38rem] absolute top-[64%] left-[5rem] p-5 text-white text-[42px] flex flex-col  rounded-xl right-5'>
          <p className='text-[28px] font-bold'>{`Date: ${currentDate} ${currentMonth}`}</p>
          <div className='flex justify-between'>
            <p className='mt-2 text-[22px]'>{`Time: ${currentTime}`}</p> 
            <button className='uppercase text-black bg-white text-[18px] p-2 rounded-lg font-bold' onClick={handleCapture}>Start</button>
          </div>
        </div>

        

       
        <div className='h-[15rem] w-[15rem] rounded-xl absolute right-[20rem] top-[5rem] '>
          <img src="/emo-1.png" alt="" />
        </div>
        <div className='h-[20rem] w-[18rem] rounded-xl absolute right-3 top-[10rem] bottom-[0.5rem] animate-jiggle'>
          <img src="/emo-4.png" alt="" className='w-[14rem]' />
        </div>
        <div className='h-[10rem] w-[10rem] rounded-xl absolute right-[30rem] top-[20rem] '>
          <img src="/emo-2.png" alt="" />
        </div>
        <div className='h-[9rem] w-[9rem] rounded-xl absolute right-[18rem] bottom-[0.5rem] top-[30rem] '>
          <img src="/emo-3.png" alt="" className='w-[14rem]' />
        </div>
      </div>
    </>
  );
}

export default HomePage;

