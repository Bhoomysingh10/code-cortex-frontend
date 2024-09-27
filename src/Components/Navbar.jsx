import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A161E] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          ZenoVate
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Careers</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Resources</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Cart (0)</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#44403C] text-white rounded-md hover:bg-gray-700">
            Log In
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 flex items-center">
            Get Started <span className="ml-2">↗</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
