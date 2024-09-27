import React from "react";

const Navbar = ({bgColor, textColor}) => {
  return (
    <nav className={`${bgColor} ${textColor} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          ZenoVate
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">AboutUs</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">ContactUs</a>
          </li>
          {/*<li>
            <a href="#" className="hover:text-gray-400">Resources</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Cart (0)</a>
          </li>*/}
        </ul>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#44403C] text-white rounded-md hover:bg-gray-700">
            Log In
          </button>
          {/*<button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 flex items-center">
            Get Started <span className="ml-2">↗</span>
          </button>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
