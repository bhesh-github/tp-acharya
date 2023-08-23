import React from "react";
import Slider from "infinite-react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlider = ({ sliderImages }) => {
  return (
    <div className="infinite-carousel">
      <Slider
        dots
        className="react-responsive-carousel"
        autoplay={true}
        autoplaySpeed="2200"
        dotsClass="dots-indicator"
        arrowsBlock={false}
        arrows={false}
      >
        {/* {sliderImages &&
          sliderImages.map((item, idx) => (
            <div
              className="slider-img"
              style={{ backgroundImage: `url(${item && item})` }}
              key={idx}
            >
            </div>
          ))} */}
          {sliderImages &&
          sliderImages.map((item, idx) => (
            <div
              className="slider-img"
              style={{ backgroundImage: `url(https://media.wired.com/photos/5cf5ab3ee2e491e5ae8ae0a9/16:9/w_2400,h_1350,c_limit/WI070119_FF_Lionking_01.jpg)` }}
              key={idx}
            >
            </div>
          ))}
          {/* {sliderImages &&
            sliderImages.map((item, idx) => (
              <img className="slider-img" src={item && item} alt="" key={idx} />
            ))} */}
      </Slider>
    </div>
  );
};

export default HomeSlider;
