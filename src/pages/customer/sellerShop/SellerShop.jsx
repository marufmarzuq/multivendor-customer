import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import AboutShop from "./components/aboutShop/AboutShop";
import AllProducts from "./components/allProducts/AllProducts";
import ShopCategories from "./components/categories/ShopCategories";
import NewArrivals from "./components/newArrivals/NewArrivals";
import TopPart from "./components/topPart/TopPart";
import TopSelling from "./components/topSelling/TopSelling";
import { markutosFrontendApi } from "../../services/Api/api";

const SellerShop = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [sellerShop, setSellerShop] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/seller-shop?slug=${slug}`)
      .then((response) => {
        setLoading(false);
				setSellerShop(response?.data);
		});
	}, []);

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
