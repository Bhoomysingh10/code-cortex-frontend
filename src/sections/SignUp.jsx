import React from 'react';
import Navbar from '../Components/Navbar';

const SignUp = () => {
  return (
    <>
      <Navbar bgColor="bg-white" textColor="text-black" />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="Name"
                className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="Password"
                className="w-full px-4 py-2 bg-transparent border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#322E4A] text-white py-2 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up 
            </button>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default SignUp;
