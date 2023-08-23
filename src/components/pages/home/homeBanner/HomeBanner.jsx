import React from "react";
import HomeBannerSlider from "./HomeSlider";

const HomeBanner = ({ sliderImages }) => {
  return (
    <div className="home-banner-comp">
      <HomeBannerSlider sliderImages={sliderImages} />
    </div>
  );
};

export default HomeBanner;

HomeBanner.defaultProps = {
  sliderImages: [
    "http://tpfoundation.com.np/wp-content/themes/tpfm/img/banner/banner1.jpg",
    "https://media.istockphoto.com/id/973092094/photo/gulls-flying-under-the-sun-x2.jpg?s=612x612&w=0&k=20&c=vO4dCkTmG0ihgN6kqiIvyJnmBnqt4ybfG9jS3w-W5EM=",
    "https://images.unsplash.com/photo-1637025336676-f0b2a32f029a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
  ],
};
