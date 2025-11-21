import React, { useState } from 'react'
import Banner1 from '../../assets/img/website/banner1.jpg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Banner() {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  return (
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
            <div className='form lg:w-6/12 w-12/12  relative z-1 flex justify-center'>
                <div className='checkout bg-white px-[30px] py-[40px] lg:max-w-[350px] rounded-[20px]'>
                    <h1 className='font-melow lg:text-[30px] text-[22px] text-[400] lg:mb-4 mb-10 lg:text-left text-center' >Check Availability</h1>
                    <form>
                        <div className='fields'>
                            <label>Check In</label>
                            <DatePicker 
                                selected={checkInDate} 
                                onChange={(date) => setCheckInDate(date)} 
                                selectsStart
                                startDate={checkInDate}
                                endDate={checkOutDate}
                                minDate={new Date()}
                                placeholderText="Select check-in date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                        <div className='fields'>
                            <label>Check Out</label>
                            <DatePicker 
                                selected={checkOutDate} 
                                onChange={(date) => setCheckOutDate(date)} 
                                selectsEnd
                                startDate={checkInDate}
                                endDate={checkOutDate}
                                minDate={checkInDate || new Date()}
                                placeholderText="Select check-out date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                dateFormat="MM/dd/yyyy"
                            />
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
