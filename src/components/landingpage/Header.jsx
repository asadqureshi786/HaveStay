import React, { useState, useEffect, useRef } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { NavLink  } from 'react-router-dom';


// Social
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



import Logo from '../../assets/img/website/logo.png'
export default function Header() {

    const [showMenu , setShowMenu] = useState(false)
    const [showRoomsDropdown, setShowRoomsDropdown] = useState(false)
    const [showVipSearch, setShowVipSearch] = useState(false)
    const roomsDropdownRef = useRef(null)
    const vipSearchRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (roomsDropdownRef.current && !roomsDropdownRef.current.contains(event.target)) {
                setShowRoomsDropdown(false)
            }
            if (vipSearchRef.current && !vipSearchRef.current.contains(event.target)) {
                setShowVipSearch(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Close VIP search on ESC key
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && showVipSearch) {
                setShowVipSearch(false)
            }
        }

        document.addEventListener('keydown', handleEscKey)
        return () => {
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [showVipSearch])

    return (
      <>
      <div className="bg-secondary">
        <div className="container">
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2 md:gap-6 " >
                    <a href="#" className='flex items-center gap-1' >
                        <span className="text-primary text-[18px]"><IoCallOutline/></span> 
                        <span className='text-[13px] font-[500]  md:block hidden' >+123 456 7890</span>
                    </a>
                    <a href="#" className='flex items-center gap-1' >
                        <span className="text-primary text-[18px]"><HiOutlineEnvelope/></span> 
                        <span className='text-[13px] font-[500] md:block hidden' >yourinfo@youremail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-2 md:gap-6 text-primary ">
                    <a href="#" className='transition duration-75 hover:scale-105' > <FaFacebookF/> </a>
                    <a href="#" className='transition duration-75 hover:scale-105' > <IoLogoInstagram/> </a>
                    <a href="#" className='transition duration-75 hover:scale-105' > <FaTwitter/> </a>
                    <a href="#" className='transition duration-75 hover:scale-105' > <FaLinkedinIn/> </a>
                    <a href="#" className='transition duration-75 hover:scale-105' > <FaYoutube/> </a>
                </div>
            </div>
        </div>
      </div>
        <div className="container sticky top-0 z-99 bg-white">
            <header className='flex justify-between items-center py-5' >
                <a href="#" className='' >
                    <img src={Logo} loading="lazy" className='lg:w-40 w-24' width={150} height={120} alt="" />
                </a>
                {/* <nav className='lg:block hidden' > */}
                <nav className={`${!showMenu ? 'hide_menu' : ''}`}>
                    <div className='flex justify-between items-center' >
                        <img src={Logo} className='lg:hidden block' loading="lazy" width={100} height={120} alt="" />
                        <div className='cursor-pointer lg:hidden text-[24px]' onClick={()=> setShowMenu(false)} >
                            <IoClose/>
                        </div>
                    </div>
                    <ul className='gap-10 flex justify-between items-center text-[14px]' >
                        <li><NavLink  to="" className='text-black  hover:text-primary font-medium transition duration-200' >Home</NavLink></li>
                        <li><NavLink  to="about" className='text-black  hover:text-primary font-medium transition duration-200' >About Us</NavLink></li>
                        <li><NavLink  to="rooms" className='text-black  hover:text-primary font-medium transition duration-200' >About Us</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >Services</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >News</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >Contact</NavLink></li>
                    </ul>
                </nav>


               <div className='flex items-center gap-3' >
                {/* <button className='btn btn-secondary'>Login</button> */}
                    <div className="search_icon sm:block hidden bg-secondary w-fit relative py-2 rounded-[8px] ">
                        <input 
                            type="text" 
                            className='focus:outline-0 text-[14px] ps-6 pe-10 cursor-pointer' 
                            placeholder='Search here...' 
                            onClick={() => setShowVipSearch(true)}
                            readOnly
                        />
                        <span className='absolute top-[50%] translate-y-[-50%] right-[20px] text-[20px] ' ><RiSearchLine /></span>
                    </div>
                    <div className='text-[24px] cursor-pointer block lg:hidden' onClick={()=> setShowMenu(!showMenu)} >
                        <RiMenu3Fill/>
                    </div>
               </div>
            </header>
        </div>

        {/* VIP Search Popup */}
        {showVipSearch && (
            <div className='fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 animate-fadeIn'>
                <div 
                    ref={vipSearchRef}
                    className='bg-white rounded-[20px] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden'
                >
                    {/* Header */}
                    <div className='bg-gradient-to-r from-primary to-primary/80 p-6 flex justify-between items-center'>
                        <div>
                            <h2 className='text-white text-2xl font-bold mb-1'>VIP Search</h2>
                            <p className='text-white/90 text-sm'>Find exactly what you're looking for</p>
                        </div>
                        <button
                            onClick={() => setShowVipSearch(false)}
                            className='text-white hover:bg-white/20 rounded-full p-2 transition duration-200'
                        >
                            <IoClose className='text-2xl' />
                        </button>
                    </div>

                    {/* Search Content */}
                    <div className='p-8'>
                        {/* Main Search Bar */}
                        <div className='relative mb-8'>
                            <input
                                type='text'
                                placeholder='Search rooms, amenities, services...'
                                className='w-full px-6 py-4 pr-14 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition duration-200'
                                autoFocus
                            />
                            <RiSearchLine className='absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400' />
                        </div>

                        {/* Quick Filters */}
                        <div className='mb-8'>
                            <h3 className='text-lg font-semibold text-gray-700 mb-4'>Quick Filters</h3>
                            <div className='flex flex-wrap gap-3'>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Standard Rooms
                                </button>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Deluxe Rooms
                                </button>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Suite Rooms
                                </button>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Ocean View
                                </button>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Pet Friendly
                                </button>
                                <button className='px-5 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-200'>
                                    Balcony
                                </button>
                            </div>
                        </div>

                        {/* Recent Searches */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-semibold text-gray-700 mb-4'>Recent Searches</h3>
                            <div className='space-y-2'>
                                <button className='w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-primary transition duration-200 flex items-center justify-between'>
                                    <span>Luxury Suite with Ocean View</span>
                                    <RiSearchLine className='text-gray-400' />
                                </button>
                                <button className='w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-primary transition duration-200 flex items-center justify-between'>
                                    <span>Family Rooms</span>
                                    <RiSearchLine className='text-gray-400' />
                                </button>
                                <button className='w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-primary transition duration-200 flex items-center justify-between'>
                                    <span>Pet Friendly Accommodations</span>
                                    <RiSearchLine className='text-gray-400' />
                                </button>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className='flex gap-4'>
                            <button 
                                onClick={() => setShowVipSearch(false)}
                                className='flex-1 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition duration-200 flex items-center justify-center gap-2'
                            >
                                <RiSearchLine className='text-xl' />
                                Search Now
                            </button>
                            <button 
                                onClick={() => setShowVipSearch(false)}
                                className='px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition duration-200'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </>
    )
}
