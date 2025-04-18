import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import LayoutContent from "../layout-conent";
import SideBar from "../sidebar";

const BaseLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <SideBar />
        <LayoutContent>
          <Outlet />
        </LayoutContent>
      </Layout>
    </>
  );
};

export default BaseLayout;
