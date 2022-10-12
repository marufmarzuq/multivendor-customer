import { useEffect, useState } from "react";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import SortFilter from "./components/storesCom/SortFilter";
import StoreList from "./components/storesCom/StoreList";
import { markutosFrontendApi } from "../../services/Api/api";
import authHeader from "../../services/auth-header";
import FrontendPagination from "../../../common/pagination/frontend/FrontendPagination";
const Checkout = () => {
  const [layout, setLayout] = useState("grid");
	const [loading, setLoading] = useState(false);
	const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalStores, setTotalStores] = useState(1);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/all-stores?per_page=${perPage}&search_value=${search}&per_page=${perPage}&page=${currentPage}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data?.data);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
        setTotalStores(response?.data?.total);
      });
  }, [
		search,
		currentPage,
    perPage,
  ]);
  return (
    <div className="wrapper">
      <BreadCumb data={"Stores"} />
      <div className="container">
        <SortFilter setLayout={setLayout} search={search} setSearch={setSearch}  totalStores={totalStores} />
        <StoreList loading={loading} layout={layout} currentItems={currentItems} />
        {currentItems.length > 0 && (
					<FrontendPagination
						currentItem={currentItems}
						perPage={perPage}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
      </div>
    </div>
  );
};

export default Checkout;
