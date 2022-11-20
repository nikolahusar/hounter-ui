import React from "react";
import house from "../Assets/mainhouse.png";
import bed from "../Assets/greenbed.png";
import art1 from "../Assets/art1.png";
import art2 from "../Assets/art2.png";
import { MdKingBed } from "react-icons/md";
import { GiBathtub, Gi3DStairs } from "react-icons/gi";
import avatar1 from "../Assets/avatar1.png";
import play from "../Assets/play.png";
import { AiFillCar } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const ReadyToSell = () => {
  return (
    <div className="relative w-full">
      <div className="sm:w-[438px] w-40 blur-[60px] bg-[#FF9882] absolute h-[500px] -top-[167px] -right-[94px] -z-10 opacity-30 rotate-90"></div>
      <div className="sm:w-[438px] w-40 blur-[60px] bg-[#FFFA82] absolute h-[500px] -top-[45px] -right-[144px] -z-10 opacity-30 rotate-90"></div>
      <section className="max-w-[1220px] mx-auto lg:mt-40 mt-20 ">
        <div className="w-full flex justify-between items-center md:flex-row flex-col gap-10">
          <div className="max-w-[480px]">
            <p className="text-gold flex items-center text-sm gap-2 -ml-10">
              <span className="w-8 h-[1px] bg-gold"></span> Ready to Sell!
            </p>
            <h1 className="text-blue font-bold text-3xl mt-3">
              Let’s tour and see our house!
            </h1>
            <p className="text-gray mt-4">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
            <h3 className="text-bold text-blue my-4">House Detail</h3>
            <div className="grid-cols-2 grid gap-y-4 border-b border-[#F0F3FD] pb-10">
              <div className="flex items-center">
                <MdKingBed className="text-[#888B97] text-2xl mr-5" />
                <span className="text-[#3C4563]">4 Bedrooms</span>
              </div>
              <div className="flex items-center">
                <GiBathtub className="text-[#888B97] text-2xl mr-5" />
                <span className="text-[#3C4563]">2 Bathrooms</span>
              </div>
              <div className="flex items-center">
                <AiFillCar className="text-[#888B97] text-2xl mr-5" />
                <span className="text-[#3C4563]">1 Carport</span>
              </div>
              <div className="flex items-center">
                <Gi3DStairs className="text-[#888B97] text-2xl mr-5" />
                <span className="text-[#3C4563]">2 Floors</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6 w-full">
              <img
                src={avatar1}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />
              <div className="">
                <p className="sm:text-lg text-sm text-[#0E1735]">
                  Dianne Russell
                </p>
                <span className="text-[#888B97] text-sm sm:text-base">
                  Manager Director
                </span>
              </div>
              <button className="flex ml-auto items-center gap-2 px-6 py-4 rounded-full bg-green-primary text-white">
                <BsFillTelephoneFill className="sm:block hidden" />{" "}
                <span className="text-sm">Contact</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <img src={house} alt="" />
            <img
              src={play}
              alt=""
              className="absolute top-1/2 right-[calc(50%-48px/2)] "
            />
            <img
              src={bed}
              alt=""
              className="absolute -bottom-10 -left-10 z-10 xl:block hidden"
            />
            <img
              src={art1}
              alt=""
              className="absolute -bottom-10 right-[130px] z-10 xl:block hidden"
            />
            <img
              src={art2}
              alt=""
              className="absolute -bottom-10 right-6 z-10 xl:block hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToSell;
