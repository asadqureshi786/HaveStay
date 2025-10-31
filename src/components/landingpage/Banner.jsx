import React from 'react'
import Banner1 from '../../assets/img/website/Banner1.jpg'



import { IoIosArrowRoundForward } from "react-icons/io";

export default function Banner() {
  return (
   <div className='container'>

     <div className='banners rounded-[20px] overflow-hidden'>
        <div className='items flex lg:h-[100vh] h-full flex lg:flex-row lg:gap-0 gap-10 flex-col  lg:py-0 py-[50px] items-center px-[40px] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0  before:content-[""] before:bg-[rgba(255,255,255,0.7)] bg-bottom bg-cover bg-center bg-no-repeat' style={{backgroundImage : `url(${Banner1})`}} >
            <div className='content lg:w-6/12 w-12/12 lg:block flex flex-col items-center  relative z-1 '>
                <div className='heading font-[100] text-[50px] font-melow text-black lg:text-start text-center '>
                    <h1>Hotel <span className='text-fuchsia-400' >HaveSay</span> </h1>
                    <h1>Gateway To Security</h1>
                </div>
                <button type='button' className='mt-5 btn btn-primary' >Explore Rooms <span className='icon' ><IoIosArrowRoundForward/> </span></button>

            </div>
            <div className='form lg:w-6/12 w-12/12  relative z-1 flex justify-center'>
                <div className='checkout bg-white px-[30px] py-[40px] lg:max-w-[350px] rounded-[20px]'>
                    <h1 className='font-melow text-[30px] text-[400] mb-4' >Check Availability</h1>
                    <form>
                        <div className='fields'>
                            <label>Check In</label>
                            <input type='date' />
                        </div>
                        <div className='fields'>
                            <label>Check Out</label>
                            <input type='text' />
                        </div>
                        <div className='fields'>
                            <label>Room</label>
                            <input type='text' />
                        </div>
                        <div className='fields'>
                            <label>Guests</label>
                            <input type='text' />
                        </div>
                        <button type='button' className='mt-5 w-full btn btn-secondary' >Explore Rooms <span className='icon' ><IoIosArrowRoundForward/> </span></button>

                    </form>
                </div>
            </div>
        </div>
    </div>

   </div>
  )
}
