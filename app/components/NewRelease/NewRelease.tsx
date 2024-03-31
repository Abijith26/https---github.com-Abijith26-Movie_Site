"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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

export default function NewRelease({ NewReleaseDetails, heading }) {
  return (
    <div className="w-full p-8">
      <h1 className="text-white font-semibold mb-2 text-2xl">{heading}</h1>
      <Slider {...settings}>
        {NewReleaseDetails.map((item) => (
          <div className="w-[125px] h-[350px] relative hover:scale-75 transition-all">
            <div className="absolute left-0 top-[80%] ml-2 ">
              <p className="text-white font-bold text-3xl uppercase">
                {item.movieName}
              </p>
              <p className="text-white font-bold">{item.language}</p>
            </div>
            <img src={item.img} className="object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
