import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsDot } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const TopBar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="contents">
          <div className="social-icons-wrapper">
            <BiLogoFacebookCircle className="icon" />
            <TwitterIcon className="icon" />
            <BsYoutube className="icon" />
          </div>
          <div className="info-wrapper">
            <div className="info contact">
              <Tooltip title="tpamf93@gmail.com" placement="bottom-start">
                इमेल
              </Tooltip>
            </div>
            <BsDot className="dot-icon" />
            <div className="info contact">
              <Tooltip title="९७७ –०१–४४६४७७९" placement="bottom-start">
                फोन नं.
              </Tooltip>
            </div>
            <BsDot className="dot-icon" />
            <div className="info contact">
              <Tooltip
                title="बानेश्वर हाइट, रोहिणी मार्ग, घर नम्बर २१५/२३"
                placement="bottom-start"
              >
                ठेगाना
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
