import { useState } from "react";
import { NavLink } from "react-router-dom";
import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
const Register = () => {
  return (
    <div>
      <BreadCumb data={"Register"} />
      <section>
        <div className={authStyle.authContainer}>
          <div className={authStyle.auth}>
            <h4 className="text-center mb-3">Create an Account</h4>
            <hr className="mb-4" />
            <form action="">
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
              {/* <div className={authStyle.sellerPart}>
                <div>
                  <label htmlFor="email">Shop Name *</label>
                  <input
                    type="text"
                    name="shop"
                    id="shop"
                    placeholder="Shop Name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Shop URL *</label>
                  <input
                    type="text"
                    name="shop"
                    id="shop"
                    placeholder="Shop URL"
                  />
                </div>

                <div>
                  <label htmlFor="email">Phone Number *</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
              </div> */}

              {/* <div className={authStyle.radioBtn}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={formLayout == "customer"}
                    value={"customer"}
                    onChange={(e) => setFormLayout(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    I am a Customer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={formLayout == "seller"}
                    onChange={(e) => setFormLayout(e.target.value)}
                    value={"seller"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    I am a Seller
                  </label>
                </div>
              </div> */}
              <div className={authStyle.agree}>
                {/* <div class="form-group form-check"> */}
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class=" ps-2 mt-1" for="exampleCheck1">
                  I agree to terms & Policy.
                </label>
                {/* </div> */}
              </div>
              <div>
                <button className="btn btn-primary" type="button" name="button">
                  Register
                </button>
              </div>

              <div className={authStyle.alreadyAccount}>
                <p>
                  Already have an account?
                  <NavLink to="/login">Log in</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
