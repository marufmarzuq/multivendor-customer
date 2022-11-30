import { useState } from "react";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import compareStyle from "./compare.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { priceFormat } from "../../../../../hooks/helper";
import Variation from "../../../../../common/product/variation/Variation";
import { useSelector } from "react-redux";
import { productPlaceholder } from "../../../../../assets";

const CompareTable = () => {
  const { products: comparedProds } = useSelector((state) => state?.compare);
  console.log(comparedProds);
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
    addItem(product);
  };

  let layout = [];
  for (let i = 1; i <= comparedProds.length + 1; i++) {
    layout.push("1fr ");
  }

  return (
    <table className="compare-table">
      <tbody>
        <tr>
          <td>Image</td>
          {comparedProds?.map((p) => (
            <td>
              <img
                className="compare-table-img"
                src={productPlaceholder}
                alt=""
              />
            </td>
          ))}
        </tr>
        <tr>
          <td>Name</td>
          {comparedProds?.map((p) => (
            <td>{p.name}</td>
          ))}
        </tr>
        <tr>
          <td>Name</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Add to cart</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Description</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Availability</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Sku</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Band</td>
          {comparedProds?.map((p) => (
            <td>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td></td>
          {comparedProds?.length ? (
            comparedProds?.map((p) => (
              <td>
                <button>Remove</button>
              </td>
            ))
          ) : (
            <id></id>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default CompareTable;
