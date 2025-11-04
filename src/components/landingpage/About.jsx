import React from "react";
import Img1 from "../../assets/img/website/about_img/img1.jpg"
import Img2 from "../../assets/img/website/about_img/img2.jpg"
import Img3 from "../../assets/img/website/about_img/img3.jpg"

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";


export default function About() {
  return (
    <section className="container mt-[105px]">
      <div className="heading  font-[100] text-[35px] font-melow text-black text-center ">
        <h1> <span className="text-primary">HaveStay:  </span>Your Gateway</h1>
        <h1>To Serenitry</h1>
      </div>

    <div className="grid lg:grid-cols-2 gap-7 lg:mt-10">
        <div className="left_side">
            <p className="px-8 pb-5 lg:text-left text-center">
                <div className="p-7" >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal it look like readable English. Many desktop publishing packages and web page editors now use Various versions have evolved over the years, sometimes by accident.
                <button type='button' className=' bg-transparent lg:mx-0 mx-auto mt-2 text-black border-0 btn btn-secondary' >Read About Us <span className='icon text-black' ><IoIosArrowRoundForward/> </span></button>
                </div>
                
            </p>
                <img src={Img3} className="lg:block hidden rounded-[20px] w-full h-[250px] object-cover" />
        </div>
        <div className="right_side lg:block hidden">
            <img src={Img2} className="rounded-[20px] w-full h-[250px] object-cover" />
            <img src={Img1} className="rounded-[20px] mt-[20px] w-[60%] object-contain" />
        </div>
    </div>

    </section>
  );
}
