import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../../common/footer/Footer";
import Header from "../../../../common/header/Header";

const CustomerLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CustomerLayout;
