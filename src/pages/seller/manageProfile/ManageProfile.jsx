import React, { Fragment } from "react";

import profileStyle from "./profile.module.css";
const ManageProfile = () => {
  return (
    <Fragment>
      <div className={`${profileStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Manage Profile </h5>
          <hr />
        </section>

        <section>
          <div className="mx-md-5 mx-0 ">
            <div className={profileStyle.infoContainer}>
              <p
                style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                className="color-main"
              >
                Basic Information
              </p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="phone">Phone</label>
              <input type="tell" id="phone" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <p
                style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                className="color-main"
              >
                Address
              </p>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
              <label htmlFor="area">Area</label>
              <input type="text" id="area" />
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id="pincode" />
              <p
                style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                className="color-main"
              >
                Bank Details
              </p>
              <label htmlFor="acc_no">Account Number</label>
              <input type="text" id="acc_no" />
              <label htmlFor="bank_name">Bank Name</label>
              <input type="text" id="bank_name" />
              <label htmlFor="branch_name">Branch Name</label>
              <input type="text" id="branch_name" />
              <label htmlFor="routing_no">Routing Number</label>
              <input type="text" id="routing_no" />
              <label htmlFor="swift">Swift</label>
              <input type="text" id="swift" />
              <label htmlFor="acc_holder">Account Holder</label>
              <input type="text" id="acc_holder" />
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>
            <div>
              <button className="btn mt-4 btn-outline-success">
                Update Infromation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ManageProfile;
