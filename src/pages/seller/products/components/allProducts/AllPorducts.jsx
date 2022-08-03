import React, { Fragment } from "react";
import { BsDownload, BsEyeFill } from "react-icons/bs";
import { RiDeleteBin2Line, RiEyeLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io";
import allProductsStyle from "./allProducts.module.css";
import { BiCopy, BiEdit, BiX } from "react-icons/bi";
const AllPorducts = () => {
  return (
    <Fragment>
      <div className={`${allProductsStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2">All Products</h5>
          <hr />
        </section>

        <section>
          <div
            className={`row px-0 mx-0 ps-3 mt-4 pt-2 ${allProductsStyle.header}`}
          >
            <div className={`col-2 col-lg-1 `}>
              <p>#</p>
            </div>
            <div className={`col-6 col-lg-2`}>
              <p>Name</p>
            </div>
            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p>Category</p>
            </div>
            <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
              <p>Current Qty</p>
            </div>
            <div className={`col-4 col-lg-2 `}>
              <p> Base Price</p>
            </div>
            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p> Published</p>
            </div>

            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p> Featured</p>
            </div>

            <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
              <p> Options</p>
            </div>
          </div>
          <hr />
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className={`col-2 col-lg-1 `}>
              <p>1 </p>
            </div>
            <div className={`col-6 col-lg-2`}>
              <p>Seler Product</p>
            </div>
            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p>Baby</p>
            </div>
            <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
              <p>9899</p>
            </div>
            <div className={`col-4 col-lg-2 `}>
              <p> 10000.00</p>
            </div>
            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </p>
            </div>

            <div className={`col-4 col-lg-1 ${allProductsStyle.hide}`}>
              <p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </p>
            </div>

            <div className={`col-4 col-lg-2 ${allProductsStyle.hide}`}>
              <p>
                <button className={allProductsStyle.preview}>
                  <BiEdit />
                </button>
                <button className={allProductsStyle.preview}>
                  <BiCopy />
                </button>
                <button className={allProductsStyle.del}>
                  <RiDeleteBin2Line />
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AllPorducts;
