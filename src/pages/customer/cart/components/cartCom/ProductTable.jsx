import React from "react";
import { Table } from "react-bootstrap";
import cartStyle from "./cart.module.css";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { priceFormat } from "../../../../../hooks/helper";
const ProductTable = ({totalUniqueItems,items,updateItemQuantity,removeItem}) => {

  return (
    <div className={cartStyle.productTable}>
			<p>Total ({totalUniqueItems}) item(s)</p>
      <Table borderless responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, key) => {
          return (
          <tr key={key}>
            <td className="py-3"> {item.name} </td>
            <td className="py-3">{priceFormat(item.price)}</td>
            <td className="py-3">
              <div className={cartStyle.quantity}>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                  <AiOutlineMinus />
                </button>
                <span> {item.quantity} </span>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  {" "}
                  <AiOutlinePlus />{" "}
                </button>
              </div>
            </td>
            <td className="py-3">{priceFormat(item.itemTotal)}</td>
            <td className="py-3">
              <button className={cartStyle.deleteBtn} onClick={() => removeItem(item.id) }>
                {" "}
                <AiOutlineDelete />{" "}
              </button>
            </td>
          </tr>
          );
				})}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
