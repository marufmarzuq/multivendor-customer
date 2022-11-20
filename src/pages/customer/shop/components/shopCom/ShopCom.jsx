import { useEffect,useState } from "react";
import "./shopCom.css";
import LeftComp from "../leftComp/LeftComp";
import RightComp from "../rightComp/RightComp";
import { markutosFrontendApi } from "../../../../services/Api/api";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams , useSearchParams} from "react-router-dom";
const ShopCom = () => {
	const { catId  } = useParams();
	const [searchParams] = useSearchParams();

	const [loading, setLoading] = useState(false);
	const [shopProduct, setShopProduct] = useState([]);
	const [pageCount, setPageCount] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState('price');
	const [categoryId, setCategoryId] = useState('');

	useEffect(() => {
		// category id
		const shop_view_more_slug = catId ? catId : '';
		// search data
		const search_data = searchParams.get('search') ? searchParams.get('search') : "";
		setLoading(true);
		markutosFrontendApi
		.get(`/shop?per_page=12&search_value=${search_data}&category=${categoryId}&brand=&rating=&color=&sort_by=${sortBy}&choice_name=&choice_value=&page=${currentPage}&shop_slug=&shop_view_more_slug=${shop_view_more_slug}`)
		.then((response) => {
			setLoading(false);
			setShopProduct(response?.data.data);
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
