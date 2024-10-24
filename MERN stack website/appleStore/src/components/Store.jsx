import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import logo from '../assets/images/Logo.png'
import AddProducts from './AddProducts';

function Store() {
  return (
    <div className='bg-gray-100'>

      <header>
        <nav className='sticky top-0 left-0' id='nav'>
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
              <a href="addProduct">add Product</a>
              <a href="" className='text-lg'><IoBagOutline /></a>
            </li>
          </ul>
        </nav>
        <div className="shop text-center p-3 text-white">
          <h5>Celebrate with up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12 months of No Cost EMI.‡ <a href="" className='text-blue-400'>Shop</a></h5>
        </div>
      </header>

      <div className='border-black h-auto'>
        <div className='w-[80%] m-auto flex justify-between items-center mt-5 pt-5'>
          <div>
            <h1 className='text-[45px] text-[#6a696d] font-semibold'><span className='text-[#8405cd]'>Store.</span> The best place to start <br /> your festive shopping.</h1>
          </div>
          <div className='text-[14px]'>
            <div className='flex items-center mt-2 mb-3'>
              <div className='border rounded-full me-2'><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202309_AV3?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1701194050300" alt="" className='rounded-full' /></div>
              <div>
                <h6 className='font-semibold'>Need a shoping help?</h6>
                <h6><a href="" className='text-blue-800'>Ask a Specialist</a></h6>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='border p-4 rounded-full me-2'></div>
              <div>
                <h6 className='font-semibold'>Visit an Apple Store</h6>
                <h6><a href="" className='text-blue-800'>Find one near you </a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='storeImg' className='h-[260px] flex justify-evenly items-center text-center'>
        <div></div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" alt="" />
          <h6 className='font-semibold text-[15px]'>Mac</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1723857138464" alt="" />
          <h6 className='font-semibold text-[15px]'>iPhone</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875" alt="" />
          <h6 className='font-semibold text-[15px]'>iPad</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" alt="" />
          <h6 className='font-semibold text-[15px]'>Watch</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" alt="" />
          <h6 className='font-semibold text-[15px]'>AirPods</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" />
          <h6 className='font-semibold text-[15px]'>AirTag</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" />
          <h6 className='font-semibold text-[15px]'>Apple Tv 4K</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" />
          <h6 className='font-semibold text-[15px]'>HomePod</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174" alt="" />
          <h6 className='font-semibold text-[15px]'>Accessories</h6>
        </div>
        <div></div>
      </div>

      <div>
        <div className='w-[90%] border'>
          <div>
            <h1 className='text-[23px] font-semibold ms-5'><span className='text-[#8405cd]'>The latest.</span> Fresh arrivals to brighten up the festivities.</h1>
          </div>
          <div>
            products
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
