import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SwipeableTemporaryDrawer({
  drawerState,
  setDrawerState,
  mainLogo,
  menuList,
}) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };
  const navigate = useNavigate();
  const [isDropDownOnClass, setIsDropDownOnClass] = React.useState({
    plusOne: "",
    plusTwo: "",
    plusThree: "",
    minusOne: "hide-minus",
    minusTwo: "hide-minus",
    minusThree: "hide-minus",
  });

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className="sidebar"
    >
      <img
        src={mainLogo}
        alt=""
        className="company-logo"
        onClick={() => {
          navigate("/");
          setDrawerState((prev) => ({
            ...prev,
            right: false,
          }));
        }}
      />
      <Divider className="divider" />
      <div className="items-wrapper">
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
                  <div className="head-wapper">
                    <span
                      className={`plus-minus ${
                        id === 1
                          ? isDropDownOnClass.plusOne
                          : id === 2
                          ? isDropDownOnClass.plusTwo
                          : id === 3
                          ? isDropDownOnClass.plusThree
                          : ""
                      }`}
                      onClick={() => {
                        id === 1
                          ? setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusOne: "hide-plus",
                              minusOne: "",
                            }))
                          : id === 2
                          ? setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusTwo: "hide-plus",
                              minusTwo: "",
                            }))
                          : id === 3 &&
                            setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusThree: "hide-plus",
                              minusThree: "",
                            }));
                      }}
                    >
                      +
                    </span>
                    <span
                      className={`plus-minus  ${
                        id === 1
                          ? isDropDownOnClass.minusOne
                          : id === 2
                          ? isDropDownOnClass.minusTwo
                          : id === 3
                          ? isDropDownOnClass.minusThree
                          : ""
                      }`}
                      onClick={() => {
                        id === 1
                          ? setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusOne: "",
                              minusOne: "hide-minus",
                            }))
                          : id === 2
                          ? setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusTwo: "",
                              minusTwo: "hide-minus",
                            }))
                          : id === 3 &&
                            setIsDropDownOnClass((prev) => ({
                              ...prev,
                              plusThree: "",
                              minusThree: "hide-minus",
                            }));
                      }}
                      key={id}
                    >
                      -
                    </span>
                    <NavLink
                      class="nav-btn head-wrapper"
                      to={`${headNavigate && headNavigate}`}
                      onClick={() => {
                        setDrawerState((prev) => ({
                          ...prev,
                          right: false,
                        }));
                      }}
                      style={{
                        textDecoration: "none",
                        color: "#003893",
                      }}
                    >
                      {head}
                    </NavLink>
                  </div>
                  {isDropDownOnClass &&
                  isDropDownOnClass.minusOne === "" &&
                  id === 1 ? (
                    <div class="drop-down-content">
                      {subHeadList.map((item) => {
                        const { id = "", link = "", subNavigate = "" } = item;
                        if (subNavigate === "contact") {
                          return (
                            <NavLink
                              to={`/${subNavigate}`}
                              className="sub-cat nav-link"
                              key={id}
                              onClick={() => {
                                setDrawerState((prev) => ({
                                  ...prev,
                                  right: false,
                                }));
                              }}
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
                              onClick={() => {
                                setDrawerState((prev) => ({
                                  ...prev,
                                  right: false,
                                }));
                              }}
                            >
                              {link}
                            </NavLink>
                          );
                        }
                      })}
                    </div>
                  ) : isDropDownOnClass &&
                    isDropDownOnClass.minusTwo === "" &&
                    id === 2 ? (
                    <div class="drop-down-content">
                      {/* {subHeadList.map((item, idx) => (
                        <NavLink
                          to="/asdf"
                          className="sub-cat nav-link"
                          key={idx}
                        >
                          {item && item}
                        </NavLink>
                      ))} */}
                      {subHeadList.map((item) => {
                        const { id = "", link = "", subNavigate = "" } = item;
                        return (
                          <NavLink
                            to={`${headNavigate}/${subNavigate}`}
                            className="sub-cat nav-link"
                            key={id}
                            onClick={() => {
                              setDrawerState((prev) => ({
                                ...prev,
                                right: false,
                              }));
                            }}
                          >
                            {link}
                          </NavLink>
                        );
                      })}
                    </div>
                  ) : (
                    isDropDownOnClass &&
                    isDropDownOnClass.minusThree === "" &&
                    id === 3 && (
                      <div class="drop-down-content">
                        {subHeadList.map((item) => {
                          const { id = "", link = "", subNavigate = "" } = item;
                          return (
                            <NavLink
                              to={`${headNavigate}/${subNavigate}`}
                              className="sub-cat nav-link"
                              key={id}
                              onClick={() => {
                                setDrawerState((prev) => ({
                                  ...prev,
                                  right: false,
                                }));
                              }}
                            >
                              {link}
                            </NavLink>
                          );
                        })}
                      </div>
                    )
                  )}
                </div>
              );
            } else {
              return (
                <NavLink
                  className="menu-item"
                  key={id}
                  to={`${headNavigate && headNavigate}`}
                  onClick={() => {
                    setDrawerState((prev) => ({
                      ...prev,
                      right: false,
                    }));
                  }}
                >
                  {head}
                </NavLink>
              );
            }
          })}
      </div>
    </Box>
  );

  return (
    <div className="side-drawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={drawerState[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
