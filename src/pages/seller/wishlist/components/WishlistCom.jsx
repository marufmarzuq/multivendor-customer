import { useEffect,useState,Fragment } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import wishlistStyle from "./wishlistCom.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setWishlist } from "../../../../redux/slices/seller/products";
import ReactPaginate from 'react-paginate';
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import Select from "react-select";

const WishlistCom = () => {
  const { wishlist , last_page , per_page , current_page  ,loading, error } = useSelector((state) => state.wishlistSlice);
  const [perPage, setPerPage] = useState(per_page);
	const [currentPage, setCurrentPage] = useState(current_page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApi(
      `wishlists?search_value=${search}&sort_by=price_high_to_low&per_page=${perPage}&page=${currentPage}`,
      setWishlist
    );
  }, [perPage,currentPage,search]);

	const options = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '15', label: '15' },
		{ value: '20', label: '20' }
	]

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
            <div className={`col-4 col-lg-3 ${wishlistStyle.hide}`}>
              <p>Last Wish</p>
            </div>
            <div className="col-4 col-lg-3">
              <p>Total Wish</p>
            </div>
            <div className={`col-4 col-lg-3 `}>
              <p>Action</p>
            </div>
          </div>
        </section>
				{ error ? <h1>{error}</h1> : ""}
				{loading ? ( <SimpleLoading/> )
				: (
				<section>
						{ wishlist.length > 0 &&
						<Fragment>
							<Fragment>
								{
									wishlist.map((item,key) => {
									return (
													<div className="row px-0 mx-0 ps-3 mt-3 pt-2" key={key}>
														<div className="col-4 col-lg-3">
															<p className={wishlistStyle.code}>{item.product_name}</p>
														</div>
														<div className={`col-4 col-lg-3 ${wishlistStyle.hide}`}>
															<p> {item.last_wishlist} </p>
														</div>
														<div className="col-4 col-lg-3">
															<p> {item.total_wishlist} </p>
														</div>

														<div className="col-4 col-lg-3">
															<button className={wishlistStyle.del}>
																<RiDeleteBin2Line />
															</button>
														</div>
													</div>
													)
									})
								}
							</Fragment>
						<div className="d-flex justify-content-end pe-3">
							<Select
								options={options}
								className={""}
								defaultValue={{ label: 10, value: 10 }}
								onChange={(e) => setPerPage(e.value)}
							/>
							<ReactPaginate
								breakLabel="..."
								nextLabel="Next >"
								onPageChange={(e)=>{setCurrentPage(e.selected + 1)}}
								pageRangeDisplayed={per_page}
								pageCount={Math.ceil(last_page)}
								previousLabel="< Previous"
								containerClassName="pagination"
								pageClassName="page__count"
								activeLinkClassName="active"
								forcePage={currentPage-1}
							/>
						</div>
					</Fragment>
						}
				</section>
				)}
      </div>
    </Fragment>
  );
};

export default WishlistCom;
