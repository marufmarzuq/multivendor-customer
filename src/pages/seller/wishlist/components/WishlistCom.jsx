import { useEffect, useState, Fragment } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import wishlistStyle from "./wishlistCom.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setWishlist } from "../../../../redux/slices/seller/products";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import axios from "axios";
import authHeader from "../../../services/auth-header";
import { API_URL } from "../../../services/Api/api";

const WishlistCom = () => {
  const { wishlist, last_page, per_page, current_page, loading, error } =
    useSelector((state) => state.wishlistSlice);
  const [perPage, setPerPage] = useState(per_page);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApi(
      `wishlists?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
      setWishlist
    );
  }, [perPage, currentPage, search]);

	const removeItem =(id)=>{
		axios
			.get(
				`${API_URL}/wishlists/delete?product_id=${id}`,
				{
					headers: {
						Authorization: authHeader(),
					},
				})
			.then((response) => {
			});
	}

  return (
    <Fragment>
      <div className={` ms-4 ${wishlistStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 pt-3 pb-3">Wishlist</h5>
          <div className="tableFilters">
            <input
              type="text"
              className="table-search-input"
              placeholder="Search product by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section>
          <div className={`row px-0 mx-0 ps-3  ${wishlistStyle.header}`}>
            <div className={`col-4 col-lg-3 `}>
              <p>Product</p>
            </div>
            <div className={`col-4 col-lg-4 text-center ${wishlistStyle.hide}`}>
              <p>Last Wish</p>
            </div>
            <div className="col-4 col-lg-3 text-center">
              <p>Total Wish</p>
            </div>
            <div className={`col-4 col-lg-2 text-center`}>
              <p>Action</p>
            </div>
          </div>
        </section>
        {error ? <h1>{error}</h1> : ""}
        {loading ? (
          <SimpleLoading />
        ) : (
          <section>
            {wishlist.length > 0 && (
              <Fragment>
                <Fragment>
                  {wishlist.map((item, key) => {
                    return (
                      <div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
                        <div className="col-4 col-lg-3">
                          <p className={wishlistStyle.code}>
                            {item.product_name}
                          </p>
                        </div>
                        <div
                          className={`col-4 col-lg-4 text-center ${wishlistStyle.hide}`}
                        >
                          <p> {item.last_wishlist} </p>
                        </div>
                        <div className="col-4 col-lg-3 text-center">
                          <p> {item.total_wishlist} </p>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                          <button className={wishlistStyle.del} onClick={() =>removeItem(item.id)}>
                            <RiDeleteBin2Line />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
                <PaginationCom
                  currentItem={wishlist}
                  perPage={per_page}
                  pageCount={last_page}
                  currentPage={currentPage}
                  setPerPage={setPerPage}
                  setCurrentPage={setCurrentPage}
                />
              </Fragment>
            )}
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default WishlistCom;
