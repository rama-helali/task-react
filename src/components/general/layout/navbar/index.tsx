import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Image,
  Popover,
  Avatar,
  Badge,
  Flex,
  Typography,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./style.css";
import MenuSide from "../menu";
import AppContext from "../../../../context/app/context";
import ProfileCard from "../../../auth/profile-card";
import { FiBell } from "react-icons/fi";
// import AuthContext from "../../../../context/auth/context"
import { useNavigate } from "react-router-dom";
import { Grid } from "antd";
import AuthContext from "../../../../context/auth/context";
const { useBreakpoint } = Grid;

const NavBar = () => {
  const { screenSize } = useContext(AppContext);
  const [visible, setVisible] = useState(false);
  const { xs, md } = useBreakpoint();

  const navigate = useNavigate();

  useEffect(() => {
    if (screenSize === "laptopOrDesktop" || screenSize === "mobileOrTablet") {
      setVisible(false);
    }
  }, [screenSize]);

  // User Popover
  const [userPopoverVisible, setUserPopoverVisible] = useState(false);

  // Auth context
  const { authUser: user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />

      <Flex
        justify="space-between"
        align="center"
        style={{ width: "100%", height: "100%" }}
      >
        <div>
          <Typography.Title
            level={md ? 4 : 2}
            style={{ margin: 0, display: xs ? "none" : "block" }}
          >
            School Management Dashboard
          </Typography.Title>
        </div>

        <Flex align="center">
          <span className="bell-icon-tablet">
            <FiBell
              color="black"
              size="20"
              onClick={() => {
                navigate("/notifications");
              }}
            />
          </span>

          <Popover
            trigger="click"
            open={userPopoverVisible}
            onOpenChange={setUserPopoverVisible}
            placement="bottomRight"
            content={
              <ProfileCard toogleUserPopoverVisible={setUserPopoverVisible} />
            }
          >
            <Flex className={"avatarContainer"}>
              <Avatar
                size="large"
                src={user?.image?.url ?? "/images/user.png"}
              />

              <div className={"username"}>
                <div style={{ color: "black" }}>{`${
                  user?.firstName ?? "Administrator"
                }`}</div>
                <small style={{ opacity: "0.5", color: "black" }}>
                  {`${user?.email ?? "email"}`}
                </small>
              </div>
            </Flex>
          </Popover>
        </Flex>
      </Flex>

      <Drawer
        title={
          <Flex justify="center">
            <Image
              preview={false}
              src={`/images/logo.png`}
              alt={"logo"}
              style={{
                marginBottom: "0.2rem",
                height: "50px",
                objectFit: "contain",
              }}
            />
          </Flex>
        }
        headerStyle={{
          backgroundColor: "#00123B",
          color: "white",
          placeItems: "flex-end",
        }}
        closable={false}
        placement="left"
        className="drawer"
        width={"17.5rem"}
        bodyStyle={{ padding: 0, backgroundColor: "#00123B" }}
        onClose={() => setVisible(false)}
        open={visible}
        footerStyle={{
          backgroundColor: "#00123B",
          color: "white",
        }}
        footer={
          <Flex justify="center">
            <h6 style={{ opacity: "0.5" }}> © Copyright 2024</h6>
          </Flex>
        }
      >
        <MenuSide />
      </Drawer>
    </nav>
  );
};
export default NavBar;
