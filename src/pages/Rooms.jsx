import React from "react";
// Components
import Gallery from '../components/landingpage/Gallery.jsx'


// Images & Icons
import Banner1 from '../assets/img/website/rooms/banner.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Rooms() {
  return (
    <>

      {/* Banner Section Start */}
      <div className="container">
        <div className="banners rounded-[20px] overflow-hidden">
          <div
            className='items flex lg:h-[100vh] h-full flex lg:flex-row lg:gap-0 gap-10 flex-col  lg:py-0 lg:py-[50px] py-10 lg:px-[40px] items-center  justify-center before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0  before:content-[""] before:bg-[rgba(255,255,255,0.7)] bg-bottom bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="content lg:w-12/12 w-12/12 lg:block flex flex-col items-center  relative z-1 ">
              <div className="heading text-center font-[100] lg:text-[50px] text-[34px] font-melow text-black">
                <h1>
                  Discover Comfort,<span className="text-primary">Redefined</span><br></br>
                  Stay <span className="text-primary">Relax</span> Repeat<br></br>
                  Escape <span className="text-primary">Explore</span> Enjoy
                </h1>
              </div>
              <button type="button" className="mt-5 btn mx-auto mt-10 btn-primary">
                Contact Us{" "}
                <span className="icon">
                  <IoIosArrowRoundForward />{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}
    
      {/* Rooms Section Start */}
      <div className="heading  font-[100] mt-20  text-[35px] font-melow text-black text-center ">
        <h1> <span className="text-primary">HaveStay:  </span>Your Gateway</h1>
        <h1>To Serenitry</h1>
      </div>
      <Gallery/>
      {/* Rooms Section End */}




    </>
  );
}
