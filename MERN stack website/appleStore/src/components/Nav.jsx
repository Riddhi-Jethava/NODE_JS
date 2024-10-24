import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import logo from '../assets/images/Logo.png'
import img from '../assets/images/promo_logo_apple_watch_series_10__qk5vaa89vnm2_large.png'
import img2 from '../assets/images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png'
import img3 from '../assets/images/promo_logo_iphone_tradein__7y3gtai5az66_large.png'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const token = sessionStorage.getItem("token")

  return (
    <div>
      <header>
        <nav className='sticky top-0 left-0' id='nav'>
          <ul className='w-[72%] m-auto'>
            <li className='flex justify-evenly p-3 text-[12px] text-gray-300'>
            <Link to='/home'><img src={logo} alt="" className='w-[16px]' id='logo' /></Link>
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
              <a href="addProduct">add </a>
              <a href="" className='text-lg'><IoIosSearch /></a>
              <a href="signupPage" className='text-lg'><IoBagOutline /></a>
            </li>
          </ul>
        </nav>
       
      </header>
    </div>
  )
}

export default Nav
