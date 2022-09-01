import React from "react";
import { Table } from "react-bootstrap";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import wisthlistStyle from "./wishlist.module.css";
const WishListTable = () => {
  return (
    <div>
      <BreadCumb data={"Wishlist"} />
      <div className="container">
        <h1 className="text-center my-4 mb-5">Wishlist</h1>

        <div style={{ overflowX: "auto" }} className={wisthlistStyle.wishTable}>
          <table responsive>
            <thead>
              <tr>
                <th></th>
                <th> Product</th>
                <th> Unit Price</th>
                <th> Stocks Status</th>
                {/* <th> Add to Cart</th> */}
                {/* <th> Action</th> */}

                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={wisthlistStyle.image}>
                  <img src="https://farmart.botble.com/storage/products/6-150x150.jpg" />
                </td>
                <td>
                  <h6>Nikon HD camera</h6>
                  <small>Vendor: xxx </small>
                </td>
                <td>$100</td>
                <td>
                  <span style={{ fontWeight: "600" }} className="text-success ">
                    In stock
                  </span>
                </td>
                <td>
                  {" "}
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineShoppingCart /> Add to Cart
                  </button>{" "}
                </td>
                <td>
                  {" "}
                  <button className={`btn ${wisthlistStyle.deletebtn}`}>
                    <AiOutlineDelete />
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishListTable;
