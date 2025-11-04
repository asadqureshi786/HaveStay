import React from 'react'
import Logo from '../../assets/img/website/logo.png'

export default function Footer() {
  return (
    <footer className='bg-[#7c6280] rounded-t-[40px] text-white py-12 lg:mt-0 mt-15'>
        <div className='container'>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-5 col-span-12 lg:text-left text-center'>
                    <a href="#" className='flex lg:justify-start justify-center'>
                        <div className='w-fit rounded-full mb-2  flex justify-center items-center' >
                            <img src={Logo} loading="lazy" className='' width={150} height={100} alt="" />
                        </div>
                    </a>
                     <h1 className='lg:!text-[28px] !text-[20px] !font-monst font-medium' > Welcome to HaveStay,<br></br> where comfort meets tranquility. 
                        Nestled in the heart of a bustling <br></br> <span className='font-normal text-primaryText' >city our hotel offers 
                        a peaceful retreat for both.</span></h1>
                </div>
                <div className='lg:col-span-7 lg:mt-17 mt-12 col-span-12 lg:me-25'>
                   <div className='flex justify-end lg:flex-row flex-col lg:gap-20 '>
                        <div className='left flex flex-col lg:justify-start justify-center items-center '>
                            <h2 className='text-xl  mb-4 text-uppercase' >Quick Links</h2>
                            <ul className='font-normal flex flex-col lg:text-left text-center gap-2' >
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200 ' >About Us</a></li>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200 ' >Privacy Policy</a></li>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200 ' >Contact us</a></li>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200 ' >News</a></li>
                            </ul>
                        </div>
                        <div className='right flex flex-col lg:mt-0 mt-10 lg:justify-start justify-center items-center '>
                            <h2 className='text-xl  mb-4 text-uppercase' >Inspiration</h2>
                            <ul className='text-primaryText font-normal flex flex-col lg:text-left text-center gap-2'>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200' >Yoga Videos</a></li>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200' >Music Lists</a></li>
                                <li><a href="#" className='text-primaryText  hover:text-white transition duration-200' >Meditations</a></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </footer>
  )
}
