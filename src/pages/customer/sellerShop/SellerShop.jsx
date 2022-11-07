import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import AboutShop from "./components/aboutShop/AboutShop";
import AllProducts from "./components/allProducts/AllProducts";
import ShopCategories from "./components/categories/ShopCategories";
import NewArrivals from "./components/newArrivals/NewArrivals";
import TopPart from "./components/topPart/TopPart";
import TopSelling from "./components/topSelling/TopSelling";
import { markutosFrontendApi } from "../../services/Api/api";
import "react-loading-skeleton/dist/skeleton.css";
import { useCart } from "react-use-cart";

const SellerShop = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [sellerShop, setSellerShop] = useState([]);
	const { addItem, onItemAdd } = useCart();

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/seller-shop?slug=${slug}`)
      .then((response) => {
        setLoading(false);
				setSellerShop(response?.data);
		});
	},[]);

	const addToCart = (product) => {
    addItem(product);
  };


  return (
    <>
      <TopPart
		loading={loading}
		shopName={sellerShop.name}
		address={sellerShop.address}
		logo={sellerShop.logo}
		avgRating={sellerShop.avg_rating}
		sliders={sellerShop.sliders}
      />
      <ShopCategories loading={loading} categories={sellerShop.categories} />
      <NewArrivals addToCart={addToCart} loading={loading} newArrival={sellerShop.new_arrival_products} />
      <TopSelling addToCart={addToCart} loading={loading} topSelling={sellerShop.top_selling_products} />
      <AllProducts addToCart={addToCart} loading={loading} allProducts={sellerShop.all_products}/>
      <AboutShop loading={loading} shopName={sellerShop.name} about={sellerShop.about}/>
    </>
  );
};

export default SellerShop;
