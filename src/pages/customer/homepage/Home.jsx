import { Fragment, useEffect, useState } from "react";
import AddSectionTwo from "./components/addSection/AddSectionTwo";
import AddSection from "./components/addSection/AddSection";
import Brands from "./components/brand/Brands";
import Category from "./components/category/Category";
import DailyDeals from "./components/dailyDeals/DailyDeals";
import Featured from "./components/featured/Featured";
import MostPopular from "./components/mostPopular/MostPopular";
import Shops from "./components/shops/Shops";
import { markutosFrontendApi } from "../../services/Api/api";

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/index`)
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data);
				setPopularProducts(response?.data.popular_products);
      });
  }, []);
  return (
    <div className="wrapper">
			<Category />
			<MostPopular popularProducts={ popularProducts }/>
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
