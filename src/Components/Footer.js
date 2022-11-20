import React from "react";
import fb from "../Assets/fb.png";
import insta from "../Assets/insta.png";
import twitter from "../Assets/twitter.png";
const Footer = () => {
  return (
    <footer className="max-w-[1220px] mx-auto sm:mt-32 mt-10 pb-20">
      <div className="flex w-full items-center justify-between ">
        <div className="flex flex-col max-w-[320px] mb-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-8 bg-green-secondary rounded-br-[80%] relative">
              <div className="-top-1 absolute -left-1 w-8 h-8 bg-gold rounded-br-[80%] -z-10"></div>
            </div>
            <span className="font-bold text-blue z-10">Hounter</span>
          </div>
          <p className="text-sm text-gray mb-6 sm:block hidden">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex gap-8">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
        <div className="flex  md:gap-20 gap-4 mb-auto">
          <ul className="sm:flex hidden flex-col gap-4">
            <h2 className="text-[#0E1735] text-lg mb-6">Property</h2>
            <li className="text-gray text-sm">House</li>
            <li className="text-gray text-sm">Apartment</li>
            <li className="text-gray text-sm">Villa</li>
          </ul>
          <ul className="sm:flex flex-col gap-4  hidden ">
            <h2 className="text-[#0E1735] text-lg mb-6">Article</h2>
            <li className="text-gray text-sm">New Article</li>
            <li className="text-gray text-sm">Popular Article</li>
            <li className="text-gray text-sm">Most Read</li>
            <li className="text-gray text-sm">Tips & Tricks</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <h2 className="text-[#0E1735] text-lg sm:mb-6">Contact</h2>
            <li className="text-gray text-sm">Bulevar cara Lazara 33</li>
            <li className="text-gray text-sm">066/963-2400</li>
            <li className="text-gray text-sm">nikolahusar998@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
