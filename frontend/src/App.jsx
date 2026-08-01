import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Nav from './components/Nav';
import Feed from './pages/Feed';
import Edit from './pages/Edit';

const App = () => {
  return (
    <>
    <Nav className="w-full h-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-between px-10 shadow-lg text-white" />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/feed" element={<Feed/>} />
      <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
    </>
  )
}

export default App
