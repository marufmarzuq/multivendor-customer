import React from "react";
import "./Attribute.css";
import AddAttribute from "./components/AddAttribute";
import AttributeTable from "./components/AttributeTable";

const Attribute = () => {
  return (
    <div className="prod-grid-container">
      <AttributeTable />
      <AddAttribute />
    </div>
  );
};

export default Attribute;
