import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './sections/homePage.jsx';
import React from 'react';
import Login from './sections/Loginpage.jsx';
import SignUp from './sections/SignUp.jsx';
import AboutUs from './sections/AboutUs.jsx';
import Chart from './sections/Chart'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/dashboard" element={<Chart/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
