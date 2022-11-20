import React from "react";
import hero from "../Assets/hero.png";
import { MdLocationPin } from "react-icons/md";
import airbnb from "../Assets/airbnb.png";
import ticket from "../Assets/ticket.png";
import traveloka from "../Assets/traveloka.png";
import tripadvisor from "../Assets/tripadvisor.png";
import right from "../Assets/right.png";
import { AiFillCaretDown } from "react-icons/ai";
import avatar10 from "../Assets/avatar10.png";
import avatar5 from "../Assets/avatar5.png";
import avatar6 from "../Assets/avatar6.png";
import pool from "../Assets/poolhouse.png";

const Hero = () => {
  return (
    <>
      <div className="sm:w-[500px] w-[200px] blur-[200px] bg-green-secondary absolute h-[400px] rounded-full -top-[100px] left-0"></div>
      <nav className=" z-20 w-full  ">
        <div className="max-w-[1200px] mx-auto  flex justify-between items-center  py-10 ">
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-green-secondary rounded-br-[80%] relative font-semibold">
              <div className="-top-1 absolute -left-1 w-8 h-8 bg-gold rounded-br-[80%] -z-10"></div>
            </div>
            <span className="font-bold text-blue z-10">Hounter</span>
          </div>
          <button className="border-none outline-none text-[#047857] ml-14 rounded-full bg-[#D1FAE5] py-3 px-6 xl:hidden block">
            Sign Up!
          </button>
          <ul className="xl:flex text-white gap-x-6 hidden ">
            <li className="border border-white/30 rounded-full  px-4 py-2 h-full bg-white/10">
              About Us
            </li>
            <li className="border border-white/30 rounded-full bg-white/10 px-4 py-2 h-full ">
              Article
            </li>
            <li
              className="border border-white/30 rounded-full bg-white/10 px-4 py-2 h-full flex gap-4 items-center 
            "
            >
              Property
              <AiFillCaretDown />
            </li>
            <button className="border-none outline-none text-[#047857] font-semibold ml-14 rounded-full bg-[#D1FAE5] py-3 px-6 ">
              Sign Up!
            </button>
          </ul>
        </div>
      </nav>

      <div className="flex max-w-[1220px] mx-auto  gap-4 ">
        <div className="sm:flex-1">
          <div className="flex justify-center h-full  flex-col items-center sm:mt-10 xl:max-w-[500px] mr-auto">
            <h1 className="sm:text-[40px] text-4xl font-bold capitalize text-blue z-20 mb-5 sm:pr-20">
              find the place to live{" "}
              <span
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStrokeWidth: "1px",
                  color: "[#1B1C57]",
                  fontFamily: "sans-serif",
                }}
              >
                Your dreams
              </span>{" "}
              easily here
            </h1>
            <p className="text-gray ">
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
            <div className="w-full rounded-full border border-[#E0E3EB] flex items-center my-8 py-2 sm:py-0 bg-white z-10">
              <MdLocationPin className="text-gold text-2xl ml-6 hidden sm:block" />
              <input
                placeholder="Search for the location you want!"
                className="flex-1 ml-4 placeholder:text-sm outline-none"
              />
              <button className="rounded-full bg-[[#047857]] text-white py-3 px-4 m-0.5 sm:flex items-center gap-2 hidden ">
                <span>Search</span>
                <img src={right} alt="" />
              </button>
            </div>
            <div className="mr-auto hidden md:block">
              <p className="text-gray ">Our partnership:</p>
              <div className="flex items-center sm:gap-5 sm:flex-row flex-col gap-0 py-y ">
                <img src={traveloka} alt="" />
                <img src={ticket} alt="" />
                <img src={airbnb} alt="" />
                <img src={tripadvisor} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden xl:block ">
          <div
            className="xl:absolute top-0  right-0  min-h-[720px] 2xl:max-h-[900px] -z-10 xl:w-1/2 bg-cover object-contain bg-center rounded-bl-[80px]  "
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className="bottom-10 left-10 absolute flex items-center gap-10 ">
              <div className="p-6 bg-white rounded-[32px] flex items-center gap-4">
                <div className="flex items-center flex-row">
                  <img
                    src={avatar10}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover border-[3px] border-white   drop-shadow-xl"
                  />
                  <img
                    src={avatar5}
                    alt=""
                    className=" w-14 h-14 rounded-full object-cover border-[3px] border-white -ml-7 drop-shadow-xl"
                  />
                  <img
                    src={avatar6}
                    alt=""
                    className=" w-14 h-14 rounded-full object-cover border-[3px] border-white -ml-7 drop-shadow-xl"
                  />
                </div>
                <div>
                  <h1 className="text-blue font-semibold mb-0.5">1K+ People</h1>
                  <p className="text-xs  text-gray">
                    Successfully Getting Home
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-[32px] flex items-center gap-4">
                <img src={pool} alt="" />
                <div>
                  <h1 className="text-blue font-semibold mb-0.5">56 Houses</h1>
                  <p className="text-xs  text-gray">Sold Monthly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
