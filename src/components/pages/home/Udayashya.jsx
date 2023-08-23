import React from "react";
import { useNavigate } from "react-router-dom";

const Udayashya = () => {
  const navigate = useNavigate();

  return (
    <div className="outer">
      <div className="udayashya-comp">
        <div className="contents">
          <img
            src="http://tpfoundation.com.np/wp-content/themes/tpfm/img/mission.jpg"
            alt=""
            className="image"
          />
          <div className="text-container">
            <h1 className="head">उद्देश्य</h1>
            <div className="brief">
              पूर्वप्रधानमन्त्री एवं जनआन्दोलनका पिताका रुपमा सुपरिचित टंकप्रसाद
              आचार्यको नाममा स्थापित यस संस्थाको मुख्य उद्देश्य नेपालको
              राष्ट्रिय सार्वभौमिकता, क्षेत्रिय अक्ष्क्षुणता, स्वाभिमान र
              लोकतान्त्रिक मूल्य तथा मान्यताहरूको संरक्षण र प्रवद्र्धन गर्नु तथा
              देशको सर्वतोमूखि विकासमा सहयोग पुर्याउनु हो । तसर्थ यस
              प्रतिष्ठानको भौतिक, वित्तिय तथा मानव संसाधन क्षेत्रमा विशेष योगदान
              हुने गरि आफ्ना क्रियाकलाप संचालन गर्ने गरेको छ । उक्त उद्देश्यको
              परिपूर्तिका लागि यस संस्थाले विभिन्न कार्यक्रम गर्ने उद्देश्य
              राखेको छ ।
            </div>
            <div className="read-more-wrapper">
              <span
                className="btn-text"
                onClick={() => {
                  navigate("/parichaya/udayashya");
                }}
              >
                थप पढ्नुहोस्{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Udayashya;
