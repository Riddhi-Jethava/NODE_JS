import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Store from './components/Store'
import LoginPage from './components/LoginPage'
import ForgetPassword from './components/ForgetPassword'
import OTP from './components/OTP'
import SignupPage from './components/SignupPage'
import Nav from './components/Nav'
import AddProducts from './components/AddProducts'


function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/forgetPass' element={<ForgetPassword />} />
          <Route path='/otp' element={<OTP />} />
          <Route path="/home" element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/addProduct' element={<AddProducts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
