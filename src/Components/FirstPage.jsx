import React from 'react'

function FirstPage() {
  return (
    <div>
      <div className="flex flex-col items-start justify-center h-screen bg-gradient-to-b from-[#1A161E] to-[#282231] text-white px-10">
        <h1 className="text-6xl font-bold mb-4 leading-tight tracking-wide">
          Empowering Remote Work with <br /> 
          AI-Powered Mental Wellness
        </h1>
        <p className="text-lg text-left mb-8 max-w-3xl">
        An AI-powered platform that monitors remote employees' mental wellness and productivity through  sentiment analysis, facial recognition, and machine learning, providing personalized support and real-time interventions to prevent burnout and enhance performance.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-purple-800 py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded shadow hover:bg-white hover:text-purple-800 transition duration-300">
            Discover Now
          </button>
        </div>
        <div className="mt-8">
          
        </div>
      </div>
    </div>
  )
}

export default FirstPage
