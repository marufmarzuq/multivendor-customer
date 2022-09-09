import { useEffect,useState,Fragment } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import wishlistStyle from "./wishlistCom.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setWishlist } from "../../../../redux/slices/seller/products";
import ReactPaginate from 'react-paginate';
import SimpleLoading from "../../../../common/loading/SimpleLoading";

const WishlistCom = () => {
	const { wishlist , total , per_page ,loading, error} = useSelector((state) => state.wishlistSlice);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(per_page);
	const [search, setSearch]     = useState(null);

  useEffect(() => {
    getApi("wishlists", setWishlist);
  }, []);

	const handlePageClick = (event) => {
		setCurrentPage(event.selected+1)
	};
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
							<ReactPaginate
								breakLabel="..."
								nextLabel="Next >"
								onPageChange={handlePageClick}
								pageRangeDisplayed={per_page}
								pageCount={total}
								previousLabel="< Previous"
								containerClassName="pagination"
								pageClassName="page__count"
								activeLinkClassName="active"
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
