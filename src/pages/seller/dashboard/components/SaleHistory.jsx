import React from "react";
import "./saleHistory.css";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Order: 590,
    sale: 700,
    Refund: 140,
  },
  {
    name: "February",
    Order: 868,
    sale: 325,
    Refund: 90,
  },
  {
    name: "March",
    Order: 1397,
    sale: 445,
    Refund: 150,
  },
  {
    name: "April",
    Order: 1480,
    sale: 741,
    Refund: 110,
  },
  {
    name: "May",
    Order: 1520,
    sale: 989,
    Refund: 45,
  },
  {
    name: "June",
    Order: 1400,
    sale: 420,
    Refund: 80,
  },
  {
    name: "July",
    Order: 1520,
    sale: 174,
    Refund: 210,
  },
  {
    name: "August",
    Order: 1400,
    sale: 800,
    Refund: 80,
  },
  {
    name: "September",
    Order: 1520,
    sale: 257,
    Refund: 100,
  },
  {
    name: "October",
    Order: 1400,
    sale: 450,
    Refund: 150,
  },
  {
    name: "November",
    Order: 1400,
    sale: 500,
    Refund: 70,
  },
  {
    name: "December",
    Order: 50000,
    sale: 150,
    Refund: 20,
  },
];

const SaleHistory = () => {
  return (
    <div className="saleHistory">
      <h6 className="my-3 ms-3 mb-4">Sale History</h6>

      <div className="widget-container" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#ffffff" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sale" barSize={40} fill="#59CE8F" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SaleHistory;
