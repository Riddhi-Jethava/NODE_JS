import React, { useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import logo from '../assets/images/Logo.png'
import img from '../assets/images/promo_logo_apple_watch_series_10__qk5vaa89vnm2_large.png'
import img2 from '../assets/images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png'
import img3 from '../assets/images/promo_logo_iphone_tradein__7y3gtai5az66_large.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         navigate("/") // Redirect to login if not authenticated
    //     }

    //     axios
    //         .get("http://localhost:1001/home")
    //         .then(response => console.log(response))
    //         .catch(error => console.error(error));
    // }, [navigate])

    return (
        <div className='relative'>
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
                            <a href="" className='text-lg'><FaUser /></a>
                            <a href="signupPage" className='text-lg'><IoBagOutline /></a>
                        </li>
                    </ul>
                </nav>
                <div className="shop text-center p-3 text-white">
                    <h5>Celebrate with up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12 months of No Cost EMI.‡ <a href="" className='text-blue-400'>Shop</a></h5>
                </div>
            </header>

            <div className='w-100 h-[566px] z-0 flex justify-between flex-col' id='appleADDPro'>
                <div className='text-white text-center flex justify-center flex-col'>
                    <h1 className='  text-[10px] md:text-[35px] lg:text-[50.7px] pt-[33px] font-semibold'>iPhone 16 Pro</h1>
                    <h3 className='text-[22px] font-semibold'>Built for Apple Intelligence</h3>
                </div>
                <div className='h-[120px] flex justify-evenly flex-col items-center mb-5'>
                    <div className='text-white'>
                        <a href=""><button className='text-[18px] py-2 px-5 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                        <a href=""><button className='text-[18px] text-sky-600 border border-sky-600 py-[5.5px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                    </div>
                    <div>
                        <a href="" className='text-gray-500 text-sm'>Apple Intelligence starting in US English later this year<sup>1</sup></a>
                    </div>
                </div>
            </div>

            <div className='h-[595px] mt-3 z-0 flex justify-between flex-col pb-2' id='appleAdd'>
                <div className='text-white text-center flex justify-center flex-col'>
                    <h1 className='text-[50.7px] pt-[33px] font-semibold'>iPhone 16</h1>
                    <h3 className='text-[26px] font-semibold'>Built for Apple Intelligence</h3>
                </div>
                <div className='h-[120px] flex justify-evenly flex-col items-center mb-5'>
                    <div className='text-white'>
                        <a href=""><button className='text-[18px] py-2 px-5 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                        <a href=""><button className='text-[18px] text-sky-600 border border-sky-600 py-[5.5px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                    </div>
                    <div>
                        <a href="" className='text-gray-500 text-sm'>Apple Intelligence starting in US English later this year<sup>1</sup></a>
                    </div>
                </div>
            </div>

            <div className='h-[595px] mt-3 z-0 flex justify-between flex-col pb-2' id='iPad'>
                <div className='text-center flex justify-center flex-col'>
                    <h1 className='text-[52px] pt-[33px] font-semibold'>iPad mini</h1>
                    <h3 className='text-[26px] font-semibold'>Built for Apple Intelligence</h3>
                    <h5 className='text-gray-500 text-[18px] mt-2 mb-3'>Available from 23 October</h5>
                    <div>
                        <a href=""><button className='text-[18px] text-white py-2 px-5 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                        <a href=""><button className='text-[18px] text-sky-600 border border-sky-600 py-[5.5px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Pre-order</button></a>
                    </div>
                </div>
                <div className='text-center mb-5'>
                    <a href="" className='text-gray-500 text-sm'>Apple Intelligence starting in <br /> US English later this year<sup>1</sup></a>
                </div>
            </div>

            <div className='mt-3 z-0 flex justify-evenly flex-wrap'>
                <div className='w-[90%] lg:w-[740px] h-[580px] mb-[12.7px]' id='offerA'>
                    <div className="w-[400px] m-auto text-center text-white mt-5">
                        <h1 className='text-[40px] font-semibold pt-5'>Gift to wrap up the festive season</h1>
                        <h4 className='text-[20px]'>Enjoy up to 10000.00 instant cashback <br /> with eligible cards.* Plus up to 12 months <br /> of No Cost EMI.<sup>‡</sup></h4>
                        <button className='py-[5px] px-4 mt-3 border rounded-full hover:bg-[white] hover:text-[black]'>Shop</button>
                    </div>
                </div>
                <div className='w-[740px] h-[580px] mb-[12.7px]' id='offerB'>
                    <div className="w-[400px] m-auto text-center mt-5 pt-5">
                        <img src={img} alt="" className='m-auto' />
                        <h4 className='text-[20px] pt-2'>Thinstant classic.</h4>
                        <div className='mt-3'>
                            <a href=""><button className='text-[16px] text-white py-[8px] px-4 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                            <a href=""><button className='text-[16px] text-sky-600 border border-sky-600 py-[7px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-[740px] h-[580px] mb-[12.7px] flex justify-center items-end' id='offerC'>
                    <div className="w-[400px] h-[220px] text-center text-white mt-5 mb-5">
                        <h1 className='text-[40px] font-semibold pt-5'>AirPods 4</h1>
                        <h4 className='text-[20px] mb-4'>Iconic. Now supersonic. <br />Available with Active Noice Cancellation.<sup>2</sup></h4>
                        <div>
                            <a href=""><button className='text-[16px] text-white py-[8px] px-4 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                            <a href=""><button className='text-[16px] text-sky-600 border border-sky-600 py-[7px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-[740px] h-[580px] mb-[12.7px]' id='offerD'>
                    <div className="w-[400px] m-auto text-center mt-5 pt-5">
                        <h1 className='text-[38px] font-semibold'>MackBook Air</h1>
                        <h4 className='text-[20px]'>Supercharged by M3.</h4>
                        <div className='mt-3'>
                            <a href=""><button className='text-[16px] text-white py-[8px] px-4 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                            <a href=""><button className='text-[16px] text-sky-600 border border-sky-600 py-[7px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-[740px] h-[580px] mb-[12.7px]' id='offerE'>
                    <div className="w-[400px] m-auto text-center mt-5 pt-5">
                        <img src={img2} alt="" className='m-auto pt-3' />
                        <h4 className='text-[20px] pt-2 text-white'>New finish. Never quite.</h4>
                        <div className='mt-3'>
                            <a href=""><button className='text-[16px] text-white py-[8px] px-4 rounded-full me-3 bg-[#0071e3]'>Learn more</button></a>
                            <a href=""><button className='text-[16px] text-sky-600 border border-sky-600 py-[7px] px-5 rounded-full hover:bg-[#0071e3] hover:text-white'>Buy</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-[740px] h-[580px]' id='offerF'>
                    <div className="w-[400px] m-auto text-center mt-5 pt-5">
                        <img src={img3} alt="" className='m-auto pt-3' />
                        <h4 className='text-[20px] pt-2'>Upgrade and save. It's that easy.</h4>
                        <div className='mt-3'>
                            <a href=""><button className='text-[16px] text-white py-[8px] px-4 rounded-full me-3 bg-[#0071e3]'>Get your estimate</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className='w-[68%] m-auto p-3 text-gray-500'>
                    <p className='text-[13px]'>
                        *Instant cashback is available with the purchase of an <a href="" className='underline text-gray-700'>eligible product</a> with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. <a href="" className='underline text-gray-700'>Click here</a> to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. <a href="" className='underline text-gray-700'>Additional terms apply</a>. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                    </p>
                    <p className='text-[13px] pt-2'>
                        ‡No Cost EMI is available with the purchase of an <a href="" className='underline text-gray-700'>eligible product</a> made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are excluded from No Cost EMI on 9- and 12-month tenures. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. <a href="" className='underline text-gray-700'>Terms Apply.</a>
                    </p>
                    <p className='text-[13px] pt-2 pb-2'>
                        Representative example: Based on a 12-month tenure. ₹79900.00 total cost includes 15.99% p.a. and No Cost EMI savings of ₹6514.00, paid over 12 months as 12 monthly payments of ₹6658.00.
                    </p>
                    <p className='text-[13px] pb-2'>
                        1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro) and iPad and Mac models with M1 and later, with Siri and device language set to US English, as part of an iOS 18, iPadOS 18 and macOS Sequoia update later this year. English (Australia, Canada, New Zealand, South Africa, UK) language support available this December. Some features, additional platforms and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese and others, will be coming over the course of the next year.
                    </p>
                    <p className='text-[13px] pb-2'>
                        2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                    </p>
                    <p className='text-[13px] pb-2'>
                        A subscription is required for Apple TV+.
                    </p>
                    <p className='text-[13px] pb-2'>
                        Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
                    </p>
                </div>

                <hr className='w-[68%] m-auto border border-gray-300' />

                <div className='w-[68%] m-auto p-3 flex justify-between' id='footerLinks'>
                    <div className='flex flex-col'>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Shop and Learn</h6>
                        <a href="">Store</a>
                        <a href="">Mac</a>
                        <a href="">iPad</a>
                        <a href="">iPhone</a>
                        <a href="">Watch</a>
                        <a href="">AirPods</a>
                        <a href="">Tv & Home</a>
                        <a href="">AirTag</a>
                        <a href="">Accessories</a>
                        <a href="">Gift Cards</a>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Apple Wallet</h6>
                        <a href="">Wallet</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Account</h6>
                        <a href="">Manage Your Apple Account</a>
                        <a href="">Apple Store Account</a>
                        <a href="">i.Cloud.com</a>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Entertainment</h6>
                        <a href="">Apple One</a>
                        <a href="">Apple TV+</a>
                        <a href="">Apple Music</a>
                        <a href="">Apple Arcade</a>
                        <a href="">Apple Podcasts</a>
                        <a href="">Apple Books</a>
                        <a href="">App Store</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Apple Store</h6>
                        <a href="">Find a Store</a>
                        <a href="">Genius Bar</a>
                        <a href="">Today at Apple</a>
                        <a href="">Group Reservations</a>
                        <a href="">Apple Camp</a>
                        <a href="">Apple Trade In</a>
                        <a href="">Way to Buy</a>
                        <a href="">Recycling Programme</a>
                        <a href="">Order Status</a>
                        <a href="">Shopping Help</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>For Business</h6>
                        <a href="">Apple and Business</a>
                        <a href="">Shop for Business</a>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>For Education</h6>
                        <a href="">Apple and Education</a>
                        <a href="">Shop for Education</a>
                        <a href="">Shop for University</a>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>For Healthcare</h6>
                        <a href="">Apple in Healthcare</a>
                        <a href="">Mac in Healthcare</a>
                        <a href="">Health on Apple Watch</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>Apple Values</h6>
                        <a href="">Accessibility</a>
                        <a href="">Education</a>
                        <a href="">Environment</a>
                        <a href="">Privacy</a>
                        <a href="">Supply Chain</a>
                        <h6 className='text-[13px] font-semibold mt-2 mb-2'>About Apple</h6>
                        <a href="">Newsroom</a>
                        <a href="">Apple Leadership</a>
                        <a href="">Career Opportunities</a>
                        <a href="">Investores</a>
                        <a href="">Ethics & Compliance</a>
                        <a href="">Events</a>
                        <a href="">Contact Apple</a>
                    </div>
                </div>
                <div className='w-[68%] m-auto p-3 mb-3'>
                    <h6 className='text-[13px] text-gray-600'>More ways to shop: <a href="" className='underline text-blue-700 text-semibold'>Find an Apple Store</a> or <a href="" className='underline text-blue-700 text-semibold'>other retailer</a> near you. Or call 000800 040 1966.</h6>
                    <hr className='border border-gray-300 mt-5 mb-5' />
                    <h6 className='text-[13px] text-gray-600'>
                        Copyright © 2024 Apple Inc. All rights reserved. <a href="" className='ms-[34px] me-2 hover:underline'>Privacy Policy</a> | <a href="" className='ms-2 me-2 hover:underline'>Terms of Use</a> | <a href="" className='ms-2 me-2 hover:underline'>Sales Policy</a> | <a href="" className='ms-2 me-2 hover:underline'>Legal</a> | <a href="" className='ms-2 hover:underline'>Site Map</a>
                        <a href="" className='ms-[26%] hover:underline'>India</a>
                    </h6>
                </div>
            </footer >
        </div >
    )
}

export default Home

