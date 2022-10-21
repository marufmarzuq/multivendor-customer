import { useEffect, useState } from "react";
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
  const [sliders, setSliders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pinnedCategories, setPinnedCategories] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [dailyDeals, setDailyDeals] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [shops, setShops] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/index`)
      .then((response) => {
        setLoading(false);
				setCategories(response?.data.categories);
				setPinnedCategories(response?.data.pinned_categories);
				setPopularProducts(response?.data.popular_products);
				setDailyDeals(response?.data.daily_deal_products);
				setFeatureProducts(response?.data.featured_products);
				setShops(response?.data.shops);
				setBrands(response?.data.brands);
				setSliders(response?.data.sliders);
      });
  }, []);
  return (
    <div className="wrapper">
			<Category sliders={sliders} categories={categories} pinnedCategories={ pinnedCategories }/>
			<MostPopular popularProducts={ popularProducts }/>
			<AddSection />
			<DailyDeals dailyDeals={dailyDeals}/>
			<AddSectionTwo />
			<Featured featureProducts={featureProducts}/>
			<Brands brands={brands}/>
			<Shops shops={shops}/>
    </div>
  );
};

export default Home;
