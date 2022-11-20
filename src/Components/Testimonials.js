import React from "react";
import Slider from "react-slick";
import testimonials from "../test.js";
const Testimonials = () => {
  console.log(testimonials);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className="mt-20 w-full ">
      <div
        className="text-gold flex flex-col justify-center items-center text-sm gap-2 font-bold
      "
      >
        <span className="w-8 h-[1px] bg-gold"></span>
        <p>See Our Review</p>
      </div>
      <h1 className="text-center text-blue text-3xl font-semibold">
        What Our User Say About Us
      </h1>
      <div className="max-w-[1600px] mx-auto">
        <Slider {...settings} className=" my-10 text-center ">
          {testimonials.map((test, index) => (
            <article
              key={index}
              className=" flex flex-col  max-w-[720px] text-left pb-20 "
            >
              <div
                className="w-full h-[400px] object-cover bg-center rounded-3xl"
                style={{ backgroundImage: `url(${test.img})` }}
              ></div>

              <div className=" p-8  bg-white shadow-xl rounded-3xl -mt-20 sm-mt-32 w-full sm:w-[80%] mx-auto relative ">
                <h1 className="text-blue sm:text-xl text-sm mb-4 font-semibold">
                  {test.title}
                </h1>
                <p className="text-gray sm:text-sm text-xs ">{test.desc}</p>
                <div className="flex items-center gap-4 mt-6 w-full">
                  <img
                    src={test.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                  <div className="">
                    <p className="text-sm text-[#0E1735]">{test.person}</p>
                    <span className="text-[#888B97] text-sm">{test.job}</span>
                  </div>
                  <div className="flex ml-auto items-center gap-2 ">
                    {test.rate}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
