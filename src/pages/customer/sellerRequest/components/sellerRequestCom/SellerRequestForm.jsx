import React from "react";
import { FaRegEdit } from "react-icons/fa";
import sellerRequestStyle from "./sellerRequest.module.css";

const SellerRequestForm = () => {
  return (
    <section>
      <div className={sellerRequestStyle.authContainer}>
        <div className={sellerRequestStyle.auth}>
          <h4 className="text-center mb-3">Be a Seller</h4>
          <hr className="mb-4" />
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Password Confirmation"
            />
          </div>
          <div>
            <label htmlFor="shop-name">Shop Name</label>
            <input
              type="text"
              name="shop-name"
              id="shop-name"
              placeholder="Enter your shop name"
            />
          </div>
          <div>
            <label htmlFor="shop-url">Shop URL</label>
            <input
              type="url"
              name="shop-url"
              id="shop-url"
              placeholder="Enter your shop URL"
            />
          </div>
          <div>
            <button className="btn btn-primary" type="button" name="button">
              <FaRegEdit /> Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerRequestForm;
