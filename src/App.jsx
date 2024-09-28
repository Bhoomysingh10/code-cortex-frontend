import React from 'react'
import Navbar from './Components/Navbar'
import FirstPage from './Components/FirstPage'
import DashBoard from './Components/DashBoard'
import Loginpage from './sections/Loginpage'
import Chart from './sections/Chart'
function App() {
  return (
    <div>
      <Navbar bgColor={'bg-[#1A161E]'} textColor={'text-white'}/>
      <FirstPage/>
      <DashBoard/>
     
    
    </div>
  )
}

export default App