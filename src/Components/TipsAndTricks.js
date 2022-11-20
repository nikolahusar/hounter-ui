import React from "react";
import sell1 from "../Assets/sell1.png";
import sell2 from "../Assets/sell2.png";
import sell3 from "../Assets/sell3.png";
import sell4 from "../Assets/sell4.png";
import avatar1 from "../Assets/avatar1.png";
import avatar2 from "../Assets/avatar2.png";
import avatar3 from "../Assets/avatar3.png";
import avatar4 from "../Assets/avatar4.png";
import clock from "../Assets/clock.png";
const TipsAndTricks = () => {
  return (
    <div className="relative">
      <div className="sm:w-[800px] w-40  blur-[60px] bg-[#82FFE8] absolute h-[500px] -top-[167px] -left-[170px] -z-10 opacity-30 rotate-90"></div>
      <div className="sm:w-[800px] w-40 blur-[60px] bg-[#C8FF82] absolute h-[500px] top-0 -left-[150px] -z-10 opacity-30 rotate-90"></div>
      <section className="sm:mt-30 mt-20 max-w-[1200px] mx-auto">
        <div
          className="flex flex-col justify-center items-center text-sm gap-4 font-bold capitalize 
      "
        >
          <span className="w-8 h-[1px] bg-gold"></span>
          <p className="text-gold ">See tips and trick from our partnership</p>
          <h1 className="text-center text-blue text-3xl font-semibold  2xl:max-w-[420px] mx-auto ">
            Find out more about selling and buying homes
          </h1>
          <button className="px-4 py-3 rounded-full bg-green-primary text-white text-sm font-semibold">
            More Article
          </button>
        </div>
        <div className="w-full flex mt-12 xl:flex-row flex-col justify-between gap-10 ">
          <div className=" sm:max-h-[524px] flex flex-col justify-between gap-11  ">
            <div className="flex items-center sm:max-h-[144px]  sm:gap-8 gap-4  flex-col sm:flex-row ">
              <img src={sell1} alt="" />
              <div className="flex flex-col justify-between max-w-[340px] gap-4 sm:gap-0   h-full">
                <div className="flex items-center gap-4 mx-auto sm:mx-0 ">
                  <img src={avatar1} alt="" />
                  <p className="text-sm text-[#3C4563]">Dianne Russell</p>
                </div>
                <p className="text-blue text-lg font-medium capitalize text-center sm:text-left">
                  The things we need to check when we want to buy a house
                </p>
                <div className="flex items-center gap-3 mx-auto sm:mx-0">
                  <img src={clock} alt="" />
                  <span className="text-sm text-gray">
                    4 min read | 25 Apr 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:max-h-[144px] gap-8 flex-col sm:flex-row">
              <img src={sell2} alt="" />
              <div className="flex flex-col justify-between max-w-[340px] h-full gap-4 sm:gap-0">
                <div className="flex items-center gap-4 mx-auto sm:mx-0">
                  <img src={avatar2} alt="" />
                  <p className="text-sm text-[#3C4563]">Courtney Henry</p>
                </div>
                <p className="text-blue text-lg font-medium capitalize text-center sm:text-left">
                  7 Ways to distinguish the quality of the house we want to buy
                </p>
                <div className="flex items-center gap-3 mx-auto sm:mx-0">
                  <img src={clock} alt="" />
                  <span className="text-sm text-gray">
                    6 min read | 25 Apr 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:max-h-[144px] gap-8 flex-col sm:flex-row">
              <img src={sell3} alt="" />
              <div className="flex flex-col justify-between max-w-[340px] h-full gap-4 sm:gap-0">
                <div className="flex items-center gap-4 mx-auto sm:mx-0">
                  <img src={avatar3} alt="" />
                  <p className="text-sm text-[#3C4563]">Darlene Robertson</p>
                </div>
                <p className="text-blue text-lg font-medium capitalize text-center sm:text-left">
                  The best way to know the quality of the house we want to buy
                </p>
                <div className="flex items-center gap-3 mx-auto sm:mx-0">
                  <img src={clock} alt="" />
                  <span className="text-sm text-gray">
                    2 min read | 25 Apr 2021
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3  max-w-[560px]">
            <img src={sell4} alt="" className="max-h-[280px] max-w-[560px]" />
            <div className="flex items-center gap-4">
              <img src={avatar4} alt="" />
              <p className="text-sm text-[#3C4563]">Dianne Russell</p>
            </div>
            <h1 className="text-blue font-semibold text-2xl">
              12 Things to know before buying a house
            </h1>
            <p className="text-gray text-sm">
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>
            <div className="flex items-center gap-3">
              <img src={clock} alt="" />
              <span className="text-sm text-gray">
                8 min read | 25 Apr 2021
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsAndTricks;
