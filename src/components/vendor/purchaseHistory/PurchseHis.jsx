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

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div className="col-4 col-lg-2"> Code </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}> Date </div>
            <div className="col-4 col-lg-2"> Amount </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}>
              Delivery Status
            </div>
            <div className={`col-4 col-lg-2 ${purchaseStyle.hide}`}>
              Payment Status
            </div>
            <div className="col-4 col-lg-2"> Options </div>
          </div>
          <hr />
        </section>

        <section>
          <div className="row px-0 mx-0 ps-3 mt-4 pt-2">
            <div
              className="col-4 col-lg-2"
              onClick={() =>
                alert("Details will appear in modal... Coming soon")
              }
            >
              20210518
            </div>
            <div className="col-4 col-lg-2"> 18-05-2021 </div>
            <div className="col-4 col-lg-2"> ৳1,000.000 </div>
            <div className="col-4 col-lg-2"> Pending </div>
            <div className="col-4 col-lg-2"> Unpaid </div>
            <div className="col-4 col-lg-2">
              <button>del</button> <button>view</button> <button>down</button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default PurchseHis;
