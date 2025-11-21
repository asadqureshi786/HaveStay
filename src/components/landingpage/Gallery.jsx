import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import useFancybox  from './UseFancybox'

// Images
import img1 from '../../assets/img/website/rooms/img1.jpg'
import img2 from '../../assets/img/website/rooms/img2.jpg'
import img3 from '../../assets/img/website/rooms/img3.jpg'
import img4 from '../../assets/img/website/rooms/img4.jpg'
import img5 from '../../assets/img/website/rooms/img5.jpg'
import img6 from '../../assets/img/website/rooms/img6.jpg'

// Icons
import { TfiSearch } from "react-icons/tfi";


export default function Gallery() {
  var settings = {
     dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    margin : 10,
    slidesToScroll: 1,
    // centerPadding: "60px",
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    margin : 10,
    slidesToScroll: 1,
    // centerPadding: "60px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  const items = [
    {
        img : img1,
    },
    {
        img : img2,
    },
    {
        img : img3,
    },
    {
        img : img4,
    },
    {
        img : img5,
    },
    {
        img : img6,
    },
  ]
  return (
    <>
      <div className="containers gallery_item overflow-x-hidden mt-10 mb-20"  ref={fancyboxRef} >
      <Slider {...settings} >
        {
            items.map((item,index)=>(
                <div key={index}  className="" data-fancybox="gallery" href={item.img}  >
                    <div className="item h-80 overflow-hidden  w-full  object-contain cursor-pointer">
                        <img src={item.img} className="w-full h-full" />
                        <div className="gallery_hover flex justify-center gap-3 flex-col items-center text-5xl">
                            <span className="text-white" ><TfiSearch/></span>
                            <span className="text-white text-sm uppercase">Search</span>
                        </div>
                    </div>
                </div>
            ))
        }
      </Slider>
      <Slider {...settings2} >
        {
            [...items].reverse().map((item,index)=>(
                <div key={index}  className="" data-fancybox="gallery" href={item.img}  >
                    <div className="item h-80  overflow-hidden w-full object-contain cursor-pointer">
                        <img src={item.img} className="w-full h-full" />
                           <div className="gallery_hover flex justify-center gap-3 flex-col items-center text-5xl">
                            <span className="text-white" ><TfiSearch/></span>
                            <span className="text-white text-sm uppercase">Search</span>
                        </div>
                    </div>
                </div>
            ))
        }
        
      </Slider>
      </div>
    </>
  );
}
