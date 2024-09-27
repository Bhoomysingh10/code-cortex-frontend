import React from 'react';
import Navbar from '../Components/Navbar';
function AboutUs({bgColor, textColor}) {
  return (
    <>
      <Navbar bgColor={'bg-[#1A161E]'} textColor={'text-white'}/>
      <div className='w-full h-screen text-white flex flex-col items-center bg-gradient-to-b from-[#1A161E] to-[#282231]'>
        <h1 className='text-3xl font-bold mb-6 text-white pt-[1.5rem]'>About Us</h1>
        <p className='text-lg leading-relaxed text-white max-w-4xl text-justify'>
          As remote work continues to grow, so do the challenges of maintaining mental well-being and consistent productivity. At ZenoVate, we are dedicated to helping individuals find the balance between professional performance and personal wellness with our innovative, AI-driven solutions.<br /><br />

          Our platform uses advanced technologies like sentiment analysis, facial recognition, typing behavior analysis, and voice analysis to assess emotional states in real-time. By analyzing communication patterns, typing speed, and voice tone, we detect emotions like stress, frustration, or happiness, providing deeper insights into your well-being. Based on these insights, we offer personalized wellness recommendations, including mindfulness exercises, break schedules, and cognitive-behavioral strategies.<br /><br />

          We also provide detailed productivity reports that help users optimize focus and performance while preserving mental health. For organizations, we offer anonymized insights to help manage workloads and prevent burnout, promoting healthier, more engaged teams.<br /><br />

          At ZenoVate, our mission is to enhance well-being and productivity in the remote work environment, empowering individuals and teams to thrive through smarter emotional and performance insights.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
