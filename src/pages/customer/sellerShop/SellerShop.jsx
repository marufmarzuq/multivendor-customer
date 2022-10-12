import { useParams } from "react-router-dom";
import AboutShop from "./components/aboutShop/AboutShop";
import AllProducts from "./components/allProducts/AllProducts";
import ShopCategories from "./components/categories/ShopCategories";
import NewArrivals from "./components/newArrivals/NewArrivals";
import TopPart from "./components/topPart/TopPart";
import TopSelling from "./components/topSelling/TopSelling";

const SellerShop = () => {
  const { id } = useParams();
  return (
    <>
      <TopPart />
      <ShopCategories />
      <NewArrivals />
      <TopSelling />
      <AllProducts />
      <AboutShop />
    </>
  );
};

export default SellerShop;
