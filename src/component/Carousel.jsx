import React from "react";
import Slider from "react-slick";
import star from "../assets/img/full star.svg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const items = [
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut.",
    },
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut.",
    },
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut.",
    },
    // Add more data objects for each item as needed
  ];

  return (
    <div className="mx-auto w-4/5 mt-4 mb-6">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white outline outline-8 outline-[#B1B1FF] w-1/4 rounded-2xl mr-[30px] p-4 my-2"
          >
            <div className="flex items-center gap-3">
              <div class="relative w-20 h-20 overflow-hidden bg-gray-100 bottom-2 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute text-gray-400 top-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-lg font-semibold">{item.name}</span>
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p>{item.date}</p>
              </div>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
