import { useState } from "react";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import compareStyle from "./compare.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { priceFormat } from "../../../../../hooks/helper";
import Variation from "../../../../../common/product/variation/Variation";
import { useDispatch, useSelector } from "react-redux";
import { productPlaceholder } from "../../../../../assets";
import { setCompare } from "../../../../../redux/slices/compare";

const CompareTable = () => {
  const { products: comparedProds } = useSelector((state) => state?.compare);
  const dispatch = useDispatch();
  console.log(comparedProds);
  const { addItem, onItemAdd } = useCart();

  const handleDelete = (id) => {
    let newProducts = comparedProds.filter((prod) => prod.id !== id);
    dispatch(setCompare({ open: false, products: newProducts }));
    localStorage.setItem("compared-prods", JSON.stringify(newProducts));
  };

  const addToCart = (product) => {
    addItem(product);
  };

  console.log(comparedProds);

  return comparedProds ? (
    <table className="compare-table">
      <tbody>
        <tr>
          <td>Image</td>
          {comparedProds?.map((p, key) => (
            <td style={{ width: `${100 / comparedProds?.length}%` }} key={key}>
              <img className="compare-table-img" src={p.thumbnail_img} alt="" />
            </td>
          ))}
        </tr>
        <tr>
          <td>Name</td>
          {comparedProds?.map((p, i) => (
            <td key={i}>{p.name}</td>
          ))}
        </tr>
        <tr>
          <td>Price</td>
          {comparedProds?.map((p, i) => (
            <td key={i}>
              <bdi>{priceFormat(p.discount_price)}</bdi>
              <del className={p?.discount_price ? " del ms-1" : "ms-1"}>
                {priceFormat(p.unit_price)}
              </del>
            </td>
          ))}
        </tr>
        <tr>
          <td>Add to cart</td>
          {comparedProds?.map((p, k) => (
            <td key={k}>
              <div className="qt-add-to-cart-btn">ADD TO CART</div>
            </td>
          ))}
        </tr>
        <tr>
          <td>Description</td>
          {comparedProds?.map((p) => (
            <td>{p.description}</td>
          ))}
        </tr>
        <tr>
          <td>Availability</td>
          {comparedProds?.map((p) => (
            <td style={{ color: "green" }}>In Stock</td>
          ))}
        </tr>
        <tr>
          <td>Sku</td>
          {comparedProds?.map((p, i) => (
            <td>FSH_ILVX4{i + 1}</td>
          ))}
        </tr>
        <tr>
          <td>Band</td>
          {comparedProds?.map((p) => (
            <td>-</td>
          ))}
        </tr>
        <tr>
          <td></td>
          {comparedProds?.length ? (
            comparedProds?.map((p) => (
              <td>
                <button
                  className="ct-remove-btn"
                  onClick={() => handleDelete(p.id)}
                >
                  Remove
                </button>
              </td>
            ))
          ) : (
            <id></id>
          )}
        </tr>
      </tbody>
    </table>
  ) : (
    <div className="ct-null-container">
      <div>There is no product to compare</div>
    </div>
  );
};

export default CompareTable;
