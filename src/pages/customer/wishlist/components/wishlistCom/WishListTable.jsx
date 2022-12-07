import { useState } from "react";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import wisthlistStyle from "./wishlist.module.css";
import { priceFormat } from "../../../../../hooks/helper";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import { useCart } from "react-use-cart";
import Variation from "../../../../../common/product/variation/Variation";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerWishlist } from "../../../../../redux/slices/wishlist";

const WishListTable = () => {
  const { products: wishListedProds } = useSelector(
    (state) => state?.customerWishlist
  );

  const { addItem, onItemAdd } = useCart();
  const dispatch = useDispatch();

  const addToCart = (product) => {
    addItem(product);
  };

  const removeFromWishlist = (prod) => {
    const preProds = wishListedProds;
    const newWishlistedProds = preProds?.filter((pp) => pp.id !== prod.id);
    dispatch(
      setCustomerWishlist({
        count: newWishlistedProds.length,
        products: newWishlistedProds,
      })
    );
    localStorage.setItem("my-wishlist", JSON.stringify(newWishlistedProds));
    console.log(JSON.parse(localStorage.getItem("my-wishlist")));
  };

  return (
    <div>
      <BreadCumb data={"Wishlist"} />
      <div className="container">
        <h1 className="text-center my-4 mb-5">Wishlist</h1>
        <div style={{ overflowX: "auto" }} className={wisthlistStyle.wishTable}>
          <table className="responsive">
            <thead>
              <tr>
                <th></th>
                <th> Product</th>
                <th> Unit Price</th>
                <th> Stocks Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishListedProds?.length == 0 ? (
                <SimpleLoading />
              ) : (
                wishListedProds?.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td className={wisthlistStyle.image}>
                        <img src={product.thumbnail_img} alt={product.name} />
                      </td>
                      <td>
                        <h6>{product.name}</h6>
                        <small>Shop Name : {product.shop_name} </small>
                        {/* Variation */}
                        {/* {product.product_type == "variation" && (
                          <Variation
                            choseOptions={product.choice_options}
                            product={product}
                            colors={product.colors}
                          />
                        )} */}
                      </td>
                      <td>
                        {product.product_type == "variation"
                          ? priceFormat(
                              product.discount_price_range,
                              "variable"
                            )
                          : priceFormat(product.price)}
                      </td>
                      <td>
                        <span
                          style={{ fontWeight: "600" }}
                          className="text-success "
                        >
                          {product.stock_status}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => addToCart(product)}
                        >
                          {" "}
                          <AiOutlineShoppingCart /> Add to Cart
                        </button>{" "}
                      </td>
                      <td>
                        {" "}
                        <button
                          className={`btn ${wisthlistStyle.deletebtn}`}
                          onClick={() => removeFromWishlist(product)}
                        >
                          <AiOutlineDelete />
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishListTable;
