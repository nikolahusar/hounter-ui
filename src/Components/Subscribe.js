import React from "react";
import sub from "../Assets/subscribe.png";
import envelope from "../Assets/envelope.png";
const Subscribe = () => {
  return (
    <section className="sm:mt-28 mx-auto max-w-[1220px] mt-10 ">
      <div
        className="w-full h-[312px] bg-cover bg-center bg-no-repeat  px-4 "
        style={{ backgroundImage: `url(${sub})` }}
      >
        <div className="flex justify-center items-center flex-col h-full gap-8">
          <h1 className="text-blue md:text-3xl text-lg px-4 sm:px-0 font-semibold max-w-[420px] text-center capitalize">
            Subscribe For More Info and update from Hounter
          </h1>
          <div className="sm:w-[500px] max-w-[400px] rounded-full  flex items-center  py-2 sm:py-0 bg-white shadow-xl overflow-hidden">
            <img src={envelope} alt="" className="ml-6 mr-4 lg:block hidden" />
            <input
              placeholder="Your email here"
              className="placeholder:text-sm outline-none pl-4"
            />
            <button className="rounded-full bg-green-primary text-white py-3 px-4 m-0.5 sm:flex items-center  sm:text-base text-xs ml-auto ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
