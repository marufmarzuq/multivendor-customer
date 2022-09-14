import React from "react";
import { FaRegEdit } from "react-icons/fa";
import sellerRequestStyle from "./beVenodor.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../../../../utils/seller/manageLocalStorage";
import { API_URL } from "../../../services/Api/api";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  shop_name: yup.string().required("Shop Name is required"),
  shop_address: yup.string().required("Shop Address is required"),
  email: yup.string().email().required("Email is required."),
  password: yup.string().min(8).max(15).required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const BeVendor = () => {
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
    formData.append("shop_name", data.shop_name);
    formData.append("shop_address", data.shop_address);

    axios
      .post(`${API_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        saveToLocalStorage(response?.data);
        setLoading(false);
        notify(response?.data?.message);
        navigate("/seller");
      })
      .catch((error) => {
        setLoading(false);
        console.log("Data", error?.response?.data?.email[0]);
        notify(error?.response?.data?.email[0]);
      });
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className={sellerRequestStyle.authContainer}>
        <div className={sellerRequestStyle.auth}>
          <h4 className="text-center mb-3">Be a Seller</h4>
          <hr className="mb-4" />
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", { required: true })}
              placeholder="Enter your name"
            />
            {errors.first_name && (
              <p className="error"> {errors.first_name?.message} </p>
            )}
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", { required: true })}
              placeholder="Enter your name"
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
            {errors.email && <p className="error"> {errors.email?.message} </p>}
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
          <div>
            <label htmlFor="shop-name">Shop Name</label>
            <input
              type="text"
              id="shop-name"
              {...register("shop_name", { required: true })}
              placeholder="Enter your shop name"
            />
            {errors.shop_name && (
              <p className="error"> {errors.shop_name?.message} </p>
            )}
          </div>
          <div>
            <label htmlFor="shop-url">Shop Addres</label>
            <input
              type="text"
              id="shop-url"
              {...register("shop_address", { required: true })}
              placeholder="Enter your shop address"
            />
            {errors.shop_address && (
              <p className="error"> {errors.shop_address?.message} </p>
            )}
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-grow spinner-grow-sm"></span>
              )}
              <FaRegEdit /> Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BeVendor;
