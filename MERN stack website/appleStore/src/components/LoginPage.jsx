import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:1001/login', { email, password });

      // Navigate to the home page upon successful login
      navigate('/home')
      alert('login successfully !');
      

    } catch (err) {
      console.log('Error while logging http://localhost:1001/login');
      console.log(err);
      alert('details not matched !');
    }
  }

  return (
    <div className='bg-gray-100 w-full h-[100vh] flex justify-between items-center flex-col'>
      <header className='w-full'>
        <nav className='sticky top-0 left-0 bg-transprent' id='nav'>
          <ul className='w-[72%] m-auto'>
            <li className='flex justify-evenly p-3 text-[12px] text-gray-300'>
              <a href=""><img src={logo} alt="" className='w-[16px]' id='logo' /></a>
              <Link to='/store'><a href="">Store</a></Link>
              <a href="">Mac</a>
              <a href="">iPad</a>
              <a href="">iPhone</a>
              <a href="">Watch</a>
              <a href="">AirPods</a>
              <a href="">Tv & Home</a>
              <a href="">Entertainment</a>
              <a href="">Accessories</a>
              <a href="">Support</a>
              <a href="" className='text-lg'><IoIosSearch /></a>
              <a href="" className='text-lg'><IoBagOutline /></a>
            </li>
          </ul>
        </nav>
      </header>
      <div className='w-[600px] h-[400px] text-center mt-5'>
        <h1 className='text-[26px] font-semibold mb-3'>Singing to Apple Store</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <input
            className='w-[70%] p-3 m-4 bg-transparent border border-black rounded-lg hover:border-blue-900'
            type="email"
            name='email'
            placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='w-[70%] p-3 bg-transparent border border-black rounded-lg hover:border-blue-900'
            type="password"
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit' className='border border-gray py-2 px-5 w-[70%] mt-5 rounded-lg  text-[20px] bg-blue-900 text-white font-semibold hover:bg-transparent hover:border-blue-900 hover:text-black'>Login</button>
          <div className='mt-5 p-5 flex'><input type="checkbox" /><h1 className='ms-2 text-[20px] text-gray-600'> Remember me</h1></div>
          <a href="/forgetPass" className='text-blue-800'>Forgotten your password?</a>
          <h1>Do not have an Apple Account?<a href="/signup" className='text-blue-800'> Create yours now.</a></h1>
        </form>
      </div>
      <hr className='w-full' />
      <h1 className='text-[18px] mt-3 pt-5 ms-[-44.7%]'>Need some help? <span className='text-blue-900 underline'>Chat now</span> or call 000800 040 1966.</h1>
      <p className='text-gray-500 text-[12px] ms-[-20.7%]'>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.</p>
      <hr />
    </div>
  )
}

export default LoginPage;
