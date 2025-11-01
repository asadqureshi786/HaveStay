import React from "react";
import Img1 from "../../assets/img/website/about_img/img1.jpg"

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";


export default function About() {
  return (
    <section className="container mt-[105px]">
      <div className="heading  font-[100] text-[35px] font-melow text-black text-center ">
        <h1> <span className="text-fuchsia-400">HaveStay:  </span>Your Gateway</h1>
        <h1>To Serenitry</h1>
      </div>

    <div className="grid grid-cols-2">
        <div className="left_side">
            <p className="px-8 pb-5">
                <div className="p-7" >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal it look like readable English. Many desktop publishing packages and web page editors now use Various versions have evolved over the years, sometimes by accident.
                <button type='button' className=' bg-transparent text-black border-0 btn btn-secondary' >Read About Us <span className='icon text-black' ><IoIosArrowRoundForward/> </span></button>
                </div>
                
            </p>
                <img src={Img1} className="rounded-[20px] w-full h-[250px] object-cover" />
        </div>
    </div>

    </section>
  );
}
