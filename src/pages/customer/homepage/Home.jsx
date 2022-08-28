import React from "react";

import AddSectionTwo from "./components/addSection/AddSectionTwo";
import AddSection from "./components/addSection/AddSection";
import Brands from "./components/brand/Brands";
import Category from "./components/category/Category";
import DailyDeals from "./components/dailyDeals/DailyDeals";
import Featured from "./components/featured/Featured";
import MostPopular from "./components/mostPopular/MostPopular";
import Shops from "./components/shops/Shops";

const Home = () => {
  return (
    <div className="wrapper">
      <Category />
      <MostPopular />
      <AddSection />
      <DailyDeals />
      <AddSectionTwo />
      <Featured />
      <Brands />
      <Shops />
    </div>
  );
};

export default Home;
