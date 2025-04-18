import { useContext, useState } from "react";
import { Avatar, Badge, Layout, Menu, Popover } from "antd";
import "./style.css";
import AppContext from "../../../../context/app/context";
import MenuSide from "../menu";
import ProfileCard from "../../../auth/profile-card";
import { FiBell } from "react-icons/fi";
// import AuthContext from "../../../../context/auth/context";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const { screenSize } = useContext(AppContext);

  const [collapsed, setCollapsed] = useState(false);

  // User Popover
  const [userPopoverVisible, setUserPopoverVisible] = useState(false);

  // Auth context
  // const { authUser: user } = useContext(AuthContext)

  return (
    <Layout.Sider
      className="sidebar"
      width={"17.5rem"}
      theme="light"
      collapsed={screenSize === "mobileOrTablet" || collapsed}
      collapsible={screenSize !== "mobileOrTablet"}
      onCollapse={setCollapsed}
      trigger={null}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <a
            style={{
              marginBottom: "2px",
              padding: "0.5rem",
              display: "flex",
              justifyContent: "center",
              textAlign: screenSize === "mobileOrTablet" ? "center" : "initial",
              width: "100%",
            }}
          >
            {/* <img style={{ height: "3vw" }} src="/images/logo.png" /> */}
            <img
              style={{ height: "3vw" }}
              src={`${
                screenSize === "mobileOrTablet"
                  ? "/images/logo_small.png"
                  : "/images/logo.png"
              }`}
            />
          </a>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent:
                  screenSize !== "mobileOrTablet" ? "space-between" : "center",
                alignItems: "center",
              }}
            ></div>
          </div>

          <MenuSide />
        </div>
        {/* Footer */}
        <div style={{ color: "white", textAlign: "center" }}>
          <h6 style={{ opacity: "0.5" }}> © Copyright 2024</h6>
        </div>
      </div>
    </Layout.Sider>
  );
};
export default SideBar;
