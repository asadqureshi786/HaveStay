import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";

// Social
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



import Logo from '../../assets/img/website/logo.png'
export default function Header() {
    return (
      <>
      <div className="bg-secondary">
        <div className="container">
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-6 " >
                    <a href="#" className='flex items-center gap-1' >
                        <span className="text-primary text-[18px]"><IoCallOutline/></span> 
                        <span className='text-[13px] font-[500]' >+123 456 7890</span>
                    </a>
                    <a href="#" className='flex items-center gap-1' >
                        <span className="text-primary text-[18px]"><HiOutlineEnvelope/></span> 
                        <span className='text-[13px] font-[500]' >yourinfo@youremail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-6 text-primary ">
                    <a href=""> <FaFacebookF/> </a>
                    <a href=""> <IoLogoInstagram/> </a>
                    <a href=""> <FaTwitter/> </a>
                    <a href=""> <FaLinkedinIn/> </a>
                    <a href=""> <FaYoutube/> </a>
                </div>
            </div>
        </div>
      </div>
        <div className="container">
            <header className='flex justify-between items-center py-10' >
                <a href="#" className='' >
                    <img src={Logo} loading="lazy" width={150} height={120} alt="" />
                </a>
                <nav >
                    <ul className='gap-10 flex justify-between items-center text-[14px]' >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Rooms</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="search_icon bg-secondary w-fit relative py-2 rounded-full ">
                    <input type="text" className='focus:outline-0 text-[1rem] px-6' placeholder='Search here...' />
                    <span className='absolute top-[50%] translate-y-[-50%] right-[20px] text-[20px] ' ><RiSearchLine /></span>
                </div>
            </header>
        </div>
      </>
    )
}
