import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

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
                        <li><NavLink  to="rooms" className='text-black  hover:text-primary font-medium transition duration-200' >Rooms</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >Services</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >News</NavLink></li>
                        <li><NavLink  to="#" className='text-black  hover:text-primary font-medium transition duration-200' >Contact</NavLink></li>
                    </ul>
                </nav>


               <div className='flex items-center gap-3' >
                {/* <button className='btn btn-secondary'>Login</button> */}
                    <div className="search_icon sm:block hidden bg-secondary w-fit relative py-2 rounded-[8px] ">
                        <input type="text" className='focus:outline-0 text-[14px] ps-6 pe-10' placeholder='Search here...' />
                        <span className='absolute top-[50%] translate-y-[-50%] right-[20px] text-[20px] ' ><RiSearchLine /></span>
                    </div>
                    <div className='text-[24px] cursor-pointer block lg:hidden' onClick={()=> setShowMenu(!showMenu)} >
                        <RiMenu3Fill/>
                    </div>
               </div>
            </header>
        </div>
      </>
    )
}
