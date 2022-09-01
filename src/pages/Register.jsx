import { NavLink } from "react-router-dom";
import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
import { FaRegEdit } from "react-icons/fa";
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
              <div className={authStyle.agree}>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class=" ps-2 mt-1" for="exampleCheck1">
                  I agree to terms & Policy.
                </label>
              </div>
              <div>
                <button className="btn btn-primary" type="button" name="button">
                  <FaRegEdit /> Register
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
