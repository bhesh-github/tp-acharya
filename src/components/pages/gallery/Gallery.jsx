import React from "react";
import StartingBanner from "../../forAll/StartingBanner";

import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const Gallery = () => {
  return (
    <>
      <StartingBanner />
      <div className="gallery-page">
        <div className="contents">
          <div className="main-section">
            <h1 className="heading">Event’s Picture Gallery</h1>
            <div className="desc"></div>
          </div>
          <LinksSection />
        </div>
      </div>
    </>
  );
};

export default Gallery;
