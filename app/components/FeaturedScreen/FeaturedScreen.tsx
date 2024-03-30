"use client";

// Importing the datasource of Image and its information
import { ImageDetails } from "../../../public/FeaturedContent.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 400,
  cssEase: "linear",
};

export default function FeaturedScreen() {
  return (
    <div className=" mx-auto my-5 w-[70%]">
      <Slider {...settings}>
        {ImageDetails.map((image) => (
          <img
            src={image.img}
            alt={image.movieName}
            key={image.id}
            className="object-contain"
          />
        ))}
      </Slider>
    </div>
  );
}
