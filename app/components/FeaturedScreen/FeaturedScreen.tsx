"use client";

// Importing the datasource of Image and its information
import { ImageDetails } from "../../../public/FeaturedContent.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
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
