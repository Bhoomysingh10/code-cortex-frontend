import React from 'react';

function DashBoard() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#282231]">
      <img 
        src="image.png" 
        alt="Dashboard" 
        className="absolute w-auto max-w-full h-auto max-h-full p-4 m-4"
        style={{
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

export default DashBoard;
