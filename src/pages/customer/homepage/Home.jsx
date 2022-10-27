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
import "react-loading-skeleton/dist/skeleton.css";

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
  const [banners, setBanners] = useState([]);

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
				setBanners(response?.data.banners);
				setSliders(response?.data.sliders);
      });
  }, []);
  console.log(banners?.banner_1);
  return (
    <div className="wrapper">
			<Category bannerOne={banners?.banner_1} loading={loading} sliders={sliders} categories={categories} pinnedCategories={ pinnedCategories }/>
			<MostPopular popularProducts={ popularProducts }/>
			<AddSection bannerTwo={banners?.banner_2} loading={loading} />
			<DailyDeals dailyDeals={dailyDeals}/>
			<AddSectionTwo bannerThree={banners?.banner_3}  bannerFour={banners?.banner_4} loading={loading} />
			<Featured featureProducts={featureProducts}/>
			<Brands brands={brands}/>
			<Shops shops={shops}/>
    </div>
  );
};

export default Home;
