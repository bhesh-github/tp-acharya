import React, { useState, useEffect, useRef, createRef } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { PiClockCountdownFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import Button from "@mui/material/Button";

const Timeline = ({ yearsList }) => {
  const [isOverlay, setIsOverlay] = useState(false);

  const [selectedYear, setSelectedYear] = useState(yearsList[0]);
  const yearRefs = useRef([]);

  useEffect(() => {
    yearRefs.current = Array(yearsList.length)
      .fill(null)
      .map((_, index) => yearRefs.current[index] || createRef());
  }, [yearsList.length]);

  useEffect(() => {
    yearRefs.current.forEach((yearRef, index) => {
      yearRef.style.top = `${index * 100}px`; // Adjust this as needed
    });

    const handleScroll = () => {
      let selectedIndex = -1;
      yearRefs.current.forEach((yearRef, index) => {
        if (yearRef) {
          const yearTop = yearRef.getBoundingClientRect().top;
          const yearBottom = yearTop + yearRef.offsetHeight;
          const windowHeight = window.innerHeight;
          const windowCenter = windowHeight / 2;
          if (window.innerWidth >= 1020) {
            if (yearTop <= windowCenter && yearBottom >= windowCenter) {
              selectedIndex = index;
            }
          } else {
            if (yearTop <= windowCenter / 3 && yearBottom >= windowCenter / 3) {
              selectedIndex = index;
            }
          }
        }
      });
      setSelectedYear(
        selectedIndex !== -1 ? yearsList[selectedIndex] : selectedYear
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yearsList]);

  const handleDotClick = (index) => {
    setSelectedYear(yearsList[index]);
    // Scroll to center the selected year in the window
    const yearTop = yearRefs.current[index].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollToY = window.scrollY + yearTop - windowHeight / 2;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  };

  isOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <>
      {isOverlay && isOverlay && (
        <div className="overlay">
          <RxCross1
            className="close-icon"
            onClick={() => {
              setIsOverlay(false);
            }}
          />
          <div className="text-wrapper">
            {selectedYear &&
              selectedYear.brief[0].description &&
              selectedYear.brief[0].description}
          </div>
        </div>
      )}
      <div className="timeline-wrapper">
        <div
          className="timeline-background"
          style={{ backgroundImage: `url(${selectedYear.image})` }}
        ></div>
        <div className="timeline">
          <div className="columns-wrapper">
            <div className="years-inner-caption">
              <div className="samaya-rekha-text-wrapper">
                <div className="clock-text-wrapper">
                  <PiClockCountdownFill className="clock-icon" />
                  <span className="clock-text">समय</span>
                </div>
                <span className="samaya-rekha">
                  समय <span className="rekha"> रेखा</span>
                </span>
              </div>
              <div className="years-inner">
                {yearsList.map((year, index) => (
                  <div
                    className="dot-year-wrapper"
                    key={year.year}
                    ref={(ref) => (yearRefs.current[index] = ref)}
                    onClick={() => handleDotClick(index)} // Add click handler
                  >
                    <span
                      className={`year ${
                        selectedYear.year === year.year ? "selected" : ""
                      }`}
                    >
                      <span className="year-num">{year.year}</span>
                      <FiberManualRecordIcon className="dot" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="content">
              <div className="text">
                <h1 className="title">
                  {selectedYear && selectedYear.year && selectedYear.year}
                  <span> </span>
                  {selectedYear &&
                    selectedYear.brief[0].title &&
                    selectedYear.brief[0].title}
                </h1>
                <div className="brief">
                  {selectedYear &&
                    selectedYear.brief[0].description &&
                    selectedYear.brief[0].description}
                </div>
                <Button
                  className="read-more-btn"
                  onClick={() => {
                    setIsOverlay(true);
                  }}
                >
                  थप पढ्नुहोस्
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;

Timeline.defaultProps = {
  yearsList: [
    {
      id: 0,
      year: "२०५०",
      image:
        "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",
          description:
            "किमव कमवव कमविप कमव कमपव कबमाव  यकषमफलभ बकयमषअवफधभ कबयमअषभफ यवकअयभ यकभअय यकभय यकभफ । उकमवापभ । कभयफ यकफभअय  कयभाफ कयषवाअ यकफभअय यषवकअभ यपफिकयभवय यअकभपय । ",
        },
      ],
    },
    {
      id: 1,
      year: "२०५१",
      image:
        "https://images.pexels.com/photos/17877123/pexels-photo-17877123/free-photo-of-cames-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",
          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 2,
      year: "२०५२",
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",
          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 3,
      year: "२०५३",
      image:
        "https://images.pexels.com/photos/2832077/pexels-photo-2832077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 4,
      year: "२०५४",
      image:
        "https://images.pexels.com/photos/70846/netherlands-landscape-sky-clouds-70846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 5,
      year: "२०५५",
      image:
        "https://images.pexels.com/photos/37861/elephant-baby-elephant-animal-wilderness-37861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 6,
      year: "२०५६",
      image:
        "https://images.pexels.com/photos/7001092/pexels-photo-7001092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 7,
      year: "२०५७",
      image:
        "https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 8,
      year: "२०५८",
      image:
        "https://images.pexels.com/photos/751673/pexels-photo-751673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 9,
      year: "२०५९",
      image:
        "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 9,
      year: "२०६०",
      image:
        "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 10,
      year: "२०६१",
      image:
        "https://images.pexels.com/photos/63330/geese-water-birds-waterfowl-63330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 11,
      year: "२०६२",
      image:
        "https://images.pexels.com/photos/54462/gulls-bird-fly-coast-54462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 12,
      year: "२०६३",
      image:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief: [
        {
          title: "कबमािपव बकमिपाव सिबयफभ भफ फअयभवफपि यअकफभि अयभफ । ",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  य अयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
    {
      id: 13,
      year: "२०६४",
      image:
        "https://images.pexels.com/photos/2091074/pexels-photo-2091074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief: [
        {
          title: "कमबाप बकमाविक बकमापव वकमा  वकमा ।",

          description:
            "पिकवअयषभफ अयषभ अयकभ यकषभवअअ  यअयक ययवकायवकअयफय यवकअयव यकभ अयषभ ययलकभअय यअिअभ यलबभयाव अमय यकषवअहअ यअयकअयकअय यकिभ अयकभयअिकभ ।",
        },
      ],
    },
  ],
};
