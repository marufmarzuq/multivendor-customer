import { NavLink } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
import { useState } from "react";
const Login = () => {
  const [formLayout, setFormLayout] = useState("customer");
  console.log(formLayout);
  return (
    <div>
      <BreadCumb data={"Login"} />
      <section>
        <div className={authStyle.authContainer}>
          <div className={authStyle.auth}>
            <h4 className="text-center mb-3">Login</h4>
            <hr />

            <div className={authStyle.loginLogo}>
              <div>
                <RiUserLine />
              </div>
            </div>

            <div className={authStyle.radioBtn}>
              <h6 className="pt-2">Login as:</h6>
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
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Seller
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
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Customer
                </label>
              </div>
            </div>

            {/* <div className="d-flex">
              <div>Login as</div>
              <div>
                <input type="radio" name="login_as" />
                Vendor
              </div>
              <div>
                <input type="radio" name="login_as" />
                Customer
              </div>
            </div> */}
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              {/* <div className="">
                <input type="radio" name="remember_me" />
                <span>Remember me?</span>
              </div> */}
              <div className={authStyle.forgotPass}>
                <NavLink to="/reset-password">Forgot Password?</NavLink>
              </div>
            </div>

            <div className={authStyle.agree}>
              {/* <div class="form-group form-check"> */}
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class=" ps-2 mt-1" for="exampleCheck1">
                Remember Me
              </label>
              {/* </div> */}
            </div>
            <div>
              <button className="btn btn-primary" type="button" name="button">
                Login
              </button>
            </div>

            <div className={authStyle.alreadyAccount}>
              <p>
                Dont have an account?
                <NavLink to="/register"> Register Now</NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
