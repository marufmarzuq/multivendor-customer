import React, { Fragment } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import wishlistStyle from "./wishlistCom.module.css";

const WishlistCom = () => {
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

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-3">
              <p className={wishlistStyle.code}>20210518-5869</p>
            </div>
            <div className={`col-4 col-lg-3 ${wishlistStyle.hide}`}>
              <p>18-05-2022 ----- 09:51 AM </p>
            </div>
            <div className="col-4 col-lg-3">
              <p> 15 </p>
            </div>

            <div className="col-4 col-lg-3">
              <button className={wishlistStyle.del}>
                <RiDeleteBin2Line />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-3">
              <p className={wishlistStyle.code}>20210518-44545</p>
            </div>
            <div className={`col-4 col-lg-3 ${wishlistStyle.hide}`}>
              <p>18-05-2022 ----- 09:51 AM </p>
            </div>
            <div className="col-4 col-lg-3">
              <p> 31 </p>
            </div>

            <div className="col-4 col-lg-3">
              <button className={wishlistStyle.del}>
                <RiDeleteBin2Line />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default WishlistCom;
