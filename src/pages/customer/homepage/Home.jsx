import React from "react";
import AddSection from "./componetns/addSection/AddSection";
import AddSectionTwo from "./componetns/addSection/AddSectionTwo";
import Brands from "./componetns/brand/Brands";
import Category from "./componetns/category/Category";
import DailyDeals from "./componetns/dailyDeals/DailyDeals";
import Featured from "./componetns/featured/Featured";

import MostPopular from "./componetns/mostPopular/MostPopular";
import Shops from "./componetns/shops/Shops";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        {/* <Header /> */}
        <Category />
        <MostPopular />
        <AddSection />
        <DailyDeals />
        <AddSectionTwo />
        <Featured />
        <Brands />
        <Shops />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
