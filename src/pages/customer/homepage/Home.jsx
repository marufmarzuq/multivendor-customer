import React from "react";
import Footer from "../../../common/footer/Footer";
import Header from "../../../common/header/Header";
import AddSection from "./componetns/AddSection";
import AddSectionTwo from "./componetns/AddSectionTwo";
import Brands from "./componetns/Brands";
import Category from "./componetns/Category";
import DailyDeals from "./componetns/DailyDeals";
import Featured from "./componetns/Featured";
import MostPopular from "./componetns/MostPopular";
import Shops from "./componetns/Shops";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Category />
        <MostPopular />
        <AddSection />
        <DailyDeals />
        <AddSectionTwo />
        <Featured />
        <Brands />
        <Shops />
        <Footer />
      </div>
    </>
  );
};

export default Home;
