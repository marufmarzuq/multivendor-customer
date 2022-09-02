import React from "react";
import AboutShop from "./components/aboutShop/AboutShop";
import AllProducts from "./components/allProducts/AllProducts";
import ShopCategories from "./components/categories/ShopCategories";
import NewArriavals from "./components/newArrivals/NewArriavals";
import TopPart from "./components/topPart/TopPart";
import TopSelling from "./components/topSelling/TopSelling";

const Checkout = () => {
  return (
    <>
      <TopPart />
      <ShopCategories />
      <NewArriavals />
      <TopSelling />
      <AllProducts />
      <AboutShop />
    </>
  );
};

export default Checkout;
