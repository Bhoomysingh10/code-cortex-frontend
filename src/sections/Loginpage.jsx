import React from 'react';
import Navbar from '../Components/Navbar';

const Login = () => {

  return (
    <>
    <Navbar bgColor = 'bg-white' textColor= 'text-black'/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#322E4A] text-white py-2 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;