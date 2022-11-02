import { useEffect,useState } from "react";
import "./shopCom.css";
import LeftComp from "../leftComp/LeftComp";
import RightComp from "../rightComp/RightComp";
import { markutosFrontendApi } from "../../../../services/Api/api";
import "react-loading-skeleton/dist/skeleton.css";

const ShopCom = () => {
  const [loading, setLoading] = useState(false);
  const [shopProduct, setShopProduct] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/shop?per_page=12&search_value=&category=&brand=&rating=&color=&sort_by=${sortBy}&choice_name=&choice_value=&page=${currentPage}`)
      .then((response) => {
        setLoading(false);
				setShopProduct(response?.data.data);
				setLoading(false);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
		});
	}, [currentPage,sortBy]);

  return (
      <section className="shop-wrap my-4">
        <div className="container">
          <div className="shopContainer">
			<LeftComp/>
			<RightComp
			loading={loading}
			shopProduct={shopProduct}
			pageCount={pageCount}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			setSortBy={setSortBy}
			/>
          </div>
        </div>
      </section>
  );
};

export default ShopCom;
