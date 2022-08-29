import React from "react";
// import GridOne from "../../../../../common/productView/GridOne";
import GridOne from "../../../../../common/productView/GridOne";

const OrderBump = () => {
  return (
    <div className="order-bump">
      <h2 className="my-4">You can also buy :</h2>
      <div className="row products-wrap">
        <GridOne />
      </div>
    </div>
  );
};

export default OrderBump;
