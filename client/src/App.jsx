import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
