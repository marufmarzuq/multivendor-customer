import React from "react";
import { invoiceData } from "./data";
import "./invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-container">
      <div className="invoice-top-header">
        <div className="ith-left">
          <div>
            <span>Invoice No:</span> #SM75692
          </div>
          <div>
            <span>Date:</span> 05.01.2022
          </div>
        </div>
        <img
          src="http://thememarch.com/demo/html/ivonne/assets/img/logo.svg"
          className="invoice-img"
          alt=""
        />
      </div>
      <div className="invoice-header">
        <div className="invoice-header-left">
          <h5>Invoice To:</h5>
          <div style={{ color: "#77" }}>
            <div>Jennifer Richards</div>
            <div>365 Bloor Street East, Toronto,</div>
            <div>Ontario, M4W 3L4,</div>
            <div>Canada</div>
          </div>
        </div>
        <div className="invoice-header-right">
          <h5>Pay To:</h5>
          <div style={{ color: "#77" }}>
            <div>Biman Airlines</div>
            <div> 237 Roanoke Road, North York,</div>
            <div>Ontario, Canada</div>
            <div>demo@email.comdemo@email.com</div>
          </div>
        </div>
      </div>
      <table className="invoice-prod-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData[0] &&
            invoiceData.map((singleProd) => (
              <tr>
                <td>{singleProd.name}</td>
                <td>{singleProd.desc}</td>
                <td>{singleProd.qty}</td>
                <td>${singleProd.price}</td>
                <td>${Number(singleProd.qty) * Number(singleProd.price)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="invoice-total-ammount-container">
          <div>
            <div>Sub Total</div>
            <div>$1320</div>
          </div>
          <div>
            <div>Tax</div>
            <div>$31</div>
          </div>
          <div>
            <div>Total Amount</div>
            <div>$1351</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
