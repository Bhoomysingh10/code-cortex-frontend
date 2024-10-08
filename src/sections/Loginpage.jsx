import React from 'react';
import Navbar from '../Components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => { 
    e.preventDefault()
    localStorage.setItem('user', email)
    const response = await axios.post("http://localhost:5052/api/auth/login", { 
      username: email,
      password: password
    }, 
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  if(response.status === 200){
    navigate('/homepage')
  }
  else { 
    navigate('/login')  
  }
  }
  
  return (
    <>
    <Navbar bgColor = 'bg-white' textColor= 'text-black'/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#322E4A] text-white py-2 rounded-lg font-medium hover:bg-[#5e558e76] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;