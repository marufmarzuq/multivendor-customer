import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API_URL } from "../../../pages/customer/services/Api/api";
import { useState } from "react";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import authStyle from "../../auth.module.css";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../../../utils/user/manageLocalStorage";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required."),
  password: yup.string().min(8).max(15).required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const CustomerRegister = () => {
  const [loading, setLoading] = useState(false);
  const notify = (text) => toast(text);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirm_password", data.confirm_password);
    axios
      .post(`${API_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        saveToLocalStorage(response?.access_token);
        setLoading(false);
        notify(response?.data?.message);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        if (error?.response?.data?.code === 422) {
          if (error?.response?.data?.errors?.error) {
            notify(error?.response?.data?.errors?.error);
          }
        } else {
          notify(error?.response?.data?.message);
        }
      });
  };

  return (
    <>
      <BreadCumb data={"Register"} />
      <div className={authStyle.authContainer}>
        <div className={authStyle.auth}>
          <h4 className="text-center mb-3">Create an Account</h4>
          <hr className="mb-4" />
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                {...register("first_name", { required: true })}
                placeholder="Enter your first name"
              />
              {errors.first_name && (
                <p className="error"> {errors.first_name?.message} </p>
              )}
            </div>
            <div>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="name"
                {...register("last_name", { required: true })}
                placeholder="Enter your last name"
              />
              {errors.last_name && (
                <p className="error"> {errors.last_name?.message} </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="error"> {errors.email?.message} </p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="error"> {errors.password?.message} </p>
              )}
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                {...register("confirm_password", { required: true })}
                placeholder="Password Confirmation"
              />
              {errors.confirm_password && (
                <p className="error"> {errors.confirm_password?.message} </p>
              )}
            </div>
            <div className={authStyle.agree}>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="ps-2 mt-1" for="exampleCheck1">
                I agree to terms & Policy.
              </label>
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                {loading && (
                  <span className="spinner-grow spinner-grow-sm"></span>
                )}
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
    </>
  );
};

export default CustomerRegister;
