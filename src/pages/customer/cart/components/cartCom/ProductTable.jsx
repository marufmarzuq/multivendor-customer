import React from "react";
import { Table } from "react-bootstrap";
import cartStyle from "./cart.module.css";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const ProductTable = () => {
  const [quantity, setQuantity] = useState(2);
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className={cartStyle.productTable}>
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
          <tr>
            <td className="py-3"> Smart Watch External </td>
            <td className="py-3">$ 20.00</td>
            <td className="py-3">
              <div className={cartStyle.quantity}>
                <button onClick={decreaseQuantity}>
                  <AiOutlineMinus />
                </button>
                <span> {quantity} </span>
                <button onClick={increaseQuantity}>
                  {" "}
                  <AiOutlinePlus />{" "}
                </button>
              </div>
            </td>
            <td className="py-3">$ 20.00</td>
            <td className="py-3">
              <button className={cartStyle.deleteBtn}>
                {" "}
                <AiOutlineDelete />{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
