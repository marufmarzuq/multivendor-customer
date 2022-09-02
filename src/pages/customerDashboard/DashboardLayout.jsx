import React from "react";
import { Outlet } from "react-router-dom";
import BreadCumb from "../../common/breadcumb/BreadCumb";
import DashboardLinks from "./components/links/DashboardLinks";
import layoutStyle from "./layout.module.css";

const DashboardLayout = () => {
  return (
    <>
      <BreadCumb data="Dashboard" />
      <div className="container">
        <div className={layoutStyle.layoutContainer}>
          <div>
            <DashboardLinks />
          </div>

          <div
            style={{
              overflowX: "auto",
            }}
            className="ps-0 ps-md-4"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
