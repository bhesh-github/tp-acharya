import React from "react";
// import HomeBanner from "./homeBanner/HomeBanner";
import TimelineGuide from "./timelineGuide/TimelineGuide";
import Intro from "./Intro";
import Udayashya from "./Udayashya";
import PararastaNiti from "./PararastaNiti";

const Home = () => {
  return (
    <div className="home-page">
      {/* <HomeBanner /> */}
      <TimelineGuide />
      <Intro />
      <Udayashya />
      <PararastaNiti />
    </div>
  );
};

export default Home;
