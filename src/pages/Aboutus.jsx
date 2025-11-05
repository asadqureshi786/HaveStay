import React from 'react'
import About from '../components/landingpage/About';
import Banner1 from '../assets/img/website/about_img/banner1.jpg'
import Man from '../assets/img/website/about_img/man.png'

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Aboutus() {
  return (
    <>
      <div className='container'>
           <div className='banners rounded-[20px] overflow-hidden'>
              <div className='items flex lg:h-[100vh] h-full flex lg:flex-row lg:gap-0 gap-10 flex-col  lg:py-0 lg:py-[50px] py-10 lg:px-[40px] items-center  before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0  before:content-[""] before:bg-[rgba(255,255,255,0.7)] bg-bottom bg-cover bg-center bg-no-repeat' style={{backgroundImage : `url(${Banner1})`}} >
                  <div className='content lg:w-6/12 w-12/12 lg:block flex flex-col items-center  relative z-1 '>
                      <div className='heading font-[100] lg:text-[50px] text-[34px] font-melow text-black lg:text-start text-center '>
                          <h1>Hotel <span className='text-primary' >HaveSay</span> </h1>
                          <h1>Gateway To Security</h1>
                      </div>
                      <button type='button' className='mt-5 btn btn-primary' >Explore Rooms <span className='icon' ><IoIosArrowRoundForward/> </span></button>
      
                  </div>
                <img src={Man} className='w-[25%] mxa-[100%] absolute z-1 bottom-0  right-50 lg:block hidden' />
              </div>
          </div>
      </div>
      <div className='mb-10'>
        <About/>
      </div>

      
    </>
  )
}
