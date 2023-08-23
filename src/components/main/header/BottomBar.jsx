import React from "react";
import mainLogo from "../../../images/forAll/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SideDrawer from "./SideDrawer";


const BottomBar = ({ menuList }) => {
  // const [isSidebar, setIsSidebar] = useState(false);

  const [drawerState, setDrawerState] = React.useState({
    right: false,
  });

  const navigate = useNavigate();

  return (
    <>
      <SideDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        mainLogo={mainLogo}
        menuList={menuList}
      />
      <div className="bottom-bar">
        <div className="contents">
          <img
            src={mainLogo}
            alt=""
            className="main-logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="menu-items">
            {menuList &&
              menuList.map((item) => {
                const {
                  id = "",
                  head = "",
                  headNavigate = "",
                  subHeadList = "",
                } = item;
                if (subHeadList) {
                  return (
                    <div class="dropdown menu-item" key={id}>
                      <NavLink
                        class="nav-btn"
                        to={`${headNavigate}`}
                        style={{ textDecoration: "none", color: "#003893" }}
                      >
                        {head}
                      </NavLink>
                      <div class="dropdown-content">
                        {subHeadList.map((item) => {
                          const { id = "", link = "", subNavigate = "" } = item;
                          if (subNavigate === "contact") {
                            return (
                              <NavLink
                                to={`/${subNavigate}`}
                                className="sub-cat nav-link"
                                key={id}
                              >
                                {link}
                              </NavLink>
                            );
                          } else {
                            return (
                              <NavLink
                                to={`${headNavigate}/${subNavigate}`}
                                className="sub-cat nav-link"
                                key={id}
                              >
                                {link}
                              </NavLink>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      className=" menu-item"
                      key={id}
                      to={`${headNavigate}`}
                    >
                      {head}
                    </NavLink>
                  );
                }
              })}
          </div>
          <RxHamburgerMenu
            className="burger-icon toggle-icon"
            onClick={() => {
              setDrawerState((prev) => ({
                ...prev,
                right: true,
              }));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BottomBar;
BottomBar.defaultProps = {
  menuList: [
    {
      id: 0,
      head: "गृहपृष्ठ",
      headNavigate: "/",
    },
    {
      id: 1,
      head: "प्रतिष्ठानको परिचय",
      headNavigate: "/parichaya",
      subHeadList: [
        {
          id: 0,
          link: "उद्देश्य",
          subNavigate: "udayashya",
        },
        {
          id: 1,
          link: "कार्यसमिति",
          subNavigate: "karyasamiti",
        },
        {
          id: 2,
          link: "व्यबस्थापन",
          subNavigate: "bewasthapan",
        },
        {
          id: 3,
          link: "मुख्यकार्य",
          subNavigate: "mukhyaKarya",
        },
        {
          id: 4,
          link: "सम्पर्क",
          subNavigate: "contact",
        },
      ],
    },
    {
      id: 2,
      head: "प्रमुख कार्यहरू",
      headNavigate: "/pramukh-karyaharu",
      subHeadList: [
        {
          id: 0,
          link: "अनुसन्धानात्मक प्रकाशनहरु",
          subNavigate: "anusandhanatmak",
        },
        {
          id: 1,
          link: "प्रकाशन",
          subNavigate: "prakshan",
        },
      ],
    },
    {
      id: 3,
      head: "अवलोकन (१९९७ – २०१७)",
      headNavigate: "/abalokan",
      subHeadList: [
        {
          id: 0,
          link: "टंकप्रसाद आचार्यको परराष्ट्र निति, २०६९",
          subNavigate: "pararasta",
        },
      ],
    },
    {
      id: 4,
      headNavigate: "/gallery",
      head: "ग्यालेरी",
    },
  ],
};
