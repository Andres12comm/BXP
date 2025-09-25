import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MainMenu from "./Components/MainMenu";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/MainMenu" element={<MainMenu />} /> 
    </Routes>
  </BrowserRouter>
);

export default App;
