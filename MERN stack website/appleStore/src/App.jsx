import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Store from './components/Store'
import LoginPage from './components/LoginPage'
import ForgetPassword from './components/ForgetPassword'
import OTP from './components/OTP'
import SignupPage from './components/SignupPage'
import Nav from './components/Nav'
import AddProducts from './components/AddProducts'
import CartPage from './components/CartPage'
import ChangePass from './components/ChangePass'


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Fetch user and token from sessionStorage on page load
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const storedToken = sessionStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }

  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/forgetPass' element={<ForgetPassword />} />
          <Route path='/otp' element={<OTP />} />
          {
            user && <>
              <Route path="/nav" element={<Nav />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path='/changePass' element={<ChangePass />} />
              <Route path="/home" element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/addProduct' element={<AddProducts />} />
              <Route path='/cart' element={<CartPage />} />
            </>
          }
          {/* {user && <Route path="*" element={<Navigate to="/home" />} />}
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
