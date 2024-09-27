import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A161E] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          ZenoVate
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#44403C] text-white rounded-md hover:bg-gray-700 transition duration-300">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
