import React, { Fragment } from "react";
import purchaseStyle from "./purchaseHis.module.css";
const PurchseHis = () => {
  return (
    <Fragment>
      <div className={`${purchaseStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2">Purchase History</h5>
          <hr />
        </section>
      </div>
    </Fragment>
  );
};

export default PurchseHis;
