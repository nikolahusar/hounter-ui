import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdVilla, MdApartment } from "react-icons/md";
import Slider from "react-slick";

import data from "../data";
const Recommendation = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <>
      <div className="xl:mt-48 mt-10 max-w-[1220px] mx-auto ">
        <h2 className="text-gold flex items-center text-sm gap-2 mb-2 sm:mb-0">
          <span className="w-8 h-[1px] bg-gold"></span> Our Recommendation
        </h2>
        <div className="px-8 flex justify-between w-full items-center">
          <h1 className="text-blue sm:text-3xl text-lg font-semibold">
            Featured House
          </h1>
          <div className="text-gray xl:flex hidden items-center sm:gap-x-6">
            <div className="flex items-center gap-2 rounded-full py-3 px-6 bg-[#D1FAE5]">
              <BsFillHouseDoorFill className="text-green-primary " /> House
            </div>
            <div className="flex items-center gap-2 rounded-full py-3 px-6 border-[#E0E3EB]">
              <MdVilla className="text-gray " /> Villa
            </div>
            <div className="flex items-center gap-2  rounded-full py-3 px-6 border border-[#E0E3EB]">
              <MdApartment className="text-gray" />
              Apartment
            </div>
          </div>
          <div className="flex gap-4 ">
            <button
              className="outline-none border-none px-7 py-5 rounded-full bg-[#E0E3EB] "
              onClick={() => sliderRef.current.slickPrev()}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="outline-none border-none px-7 py-5 rounded-full bg-green-primary text-white font-bold"
              onClick={() => sliderRef.current.slickNext()}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="max-w-[1500px] ml-auto flex  my-10 overflow-hidden"
      >
        {data.map((data, index) => (
          <article key={index} className="max-w-[340px] flex flex-col">
            <img
              src={data.img}
              alt={data.title}
              className="w-full max-h-[382px] object-cover rounded-3xl min-h-[382px]"
            />
            <h1 className="mt-6">{data.title}</h1>
            <p>{data.price}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.avatar}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />
              <div className="">
                <p>{data.person}</p>
                <span>{data.city}</span>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </>
  );
};

export default Recommendation;
