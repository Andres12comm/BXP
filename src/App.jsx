<<<<<<< HEAD
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainMenu from './Components/MainMenu.jsx'; 

function App() {
  return (
    <MainMenu />
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
>>>>>>> 968bb78830e9eb61eb25e49749aadcc339cfc8bc
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> 968bb78830e9eb61eb25e49749aadcc339cfc8bc
