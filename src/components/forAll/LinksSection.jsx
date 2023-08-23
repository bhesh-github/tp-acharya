import React from "react";
import { BsDot } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LinksSection = ({ englishLinks }) => {
  return (
    <div className="links-section">
      <h2 className="title">English</h2>
      <div className="links-wrapper">
        {englishLinks &&
          englishLinks.map((item) => {
            const { id = "", text = "", link = "" } = item;
            return (
              <NavLink to={`/inner-links/${link}`} className="link" key={id}>
                <BsDot className="dot" />
                {text}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default LinksSection;

LinksSection.defaultProps = {
  englishLinks: [
    {
      id: 0,
      text: "Organizational Profile",
      link: "profile",
    },
    {
      id: 1,
      text: "Workshop and Seminar",
      link: "workshop",
    },
    {
      id: 2,
      text: "Professional Rostrum",
      link: "rostrum",
    },
    {
      id: 3,
      text: "Board and Advisory Panel Members",
      link: "members",
    },
    {
      id: 4,
      text: "प्रकाशन",
      link: "prakashan",
    },
  ],
};
