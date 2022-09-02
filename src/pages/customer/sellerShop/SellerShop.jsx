import React from "react";
import About from "./components/sellerShopCom/About";
import AllProducts from "./components/sellerShopCom/AllProducts";
import Categories from "./components/sellerShopCom/Categories";
import NewArrival from "./components/sellerShopCom/NewArrival";
import ShopInfo from "./components/sellerShopCom/ShopInfo";
import Slider from "./components/sellerShopCom/Slider";
import TopSellingProducts from "./components/sellerShopCom/TopSellingProducts";

const Checkout = () => {
  return (
		<div className="">
			<div className="">
				<ShopInfo/>
				<Slider/>
			</div>
			<Categories/>
			<NewArrival/>
			<TopSellingProducts/>
			<AllProducts/>
			<About/>
		</div>
  );
};

export default Checkout;
