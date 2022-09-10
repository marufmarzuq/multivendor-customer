import { NavLink } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthService from "./services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/manageLocalStorage";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const Login = () => {
  const [formLayout, setFormLayout] = useState("customer");
  const [loading, setLoading] = useState(false);
  const notify = (text) => toast(text);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    setLoading(true);
    const { email, password } = data;
    AuthService.login(email, password, checked ? 1 : 0).then(
      (response) => {
        saveToLocalStorage(response?.access_token);
        navigate("/seller");
        notify("Welcome to Markutos Saler");
      },
      (error) => {
        notify(error.response.data.error[0]);
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <BreadCumb data={"Login"} />
      <section>
        <form onSubmit={handleSubmit(submitForm)}>
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
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
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
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Customer
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <div className={authStyle.forgotPass}>
                  <NavLink to="/reset-password">Forgot Password?</NavLink>
                </div>
              </div>

              <div className={authStyle.agree}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label class=" ps-2 mt-1" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <div>
                <button className="btn btn-primary" type="submit">
                  {loading && (
                    <span className="spinner-grow spinner-grow-sm"></span>
                  )}
                  <AiOutlineLogin /> Login
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
        </form>
      </section>
    </div>
  );
};

export default Login;
