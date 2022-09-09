import { useEffect,useState,Fragment } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import wishlistStyle from "./wishlistCom.module.css";
import { useSelector } from "react-redux";
import { getApi } from "../../../../api/apiCall";
import { setWishlist } from "../../../../redux/slices/seller/products";
import ReactPaginate from 'react-paginate';

const WishlistCom = () => {
  const { wishlist , loading, error } = useSelector((state) => state.wishlistSlice);

  useEffect(() => {
    getApi("wishlists", setWishlist);
  }, []);

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
				{loading ? ( <h3>Loading</h3>)
				: (
				<section>
						{ wishlist.length > 0 &&
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
						})}
				</section>
				)}
      </div>
    </Fragment>
  );
};

export default WishlistCom;
