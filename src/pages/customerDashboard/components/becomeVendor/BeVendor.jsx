import React from "react";
import { FaRegEdit } from "react-icons/fa";
import sellerRequestStyle from "./beVenodor.module.css";
import { FocusError } from "focus-formik-error";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from "react";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";

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

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      shop_address: "",
      shop_name: "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {

	setLoading(true);
	markutosFrontendApi
	.post(`/dashboard/become-a-vendor/post`, values , 
		{
			headers: {
				Authorization: customerAuthHeader(),
			},
		}
	)
	.then((res) => {
		setLoading(false);
		toast.success(res.data.message);
		action.resetForm();
	})
	.catch((e) => {
		toast.error(e.message);
		setLoading(false);
	});
    },
  });

  const {
    values,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
  } = formik;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
		<FocusError formik={formik} />
		<div className={sellerRequestStyle.authContainer}>
		<div className={sellerRequestStyle.auth}>
			<h4 className="text-center mb-3">Be a Seller</h4>
			<hr className="mb-4" />
			<div>
			<label htmlFor="first_name">First Name</label>
			<input
				type="text"
				id="first_name"
				name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Enter your first name"
			/>
			{errors.first_name && touched.first_name && (
				<p className="error"> {errors.first_name} </p>
			)}
			</div>
			<div>
			<label htmlFor="last_name">Last Name</label>
			<input
				type="text"
				id="last_name"
				name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Enter your last name"
			/>
			{errors.last_name && touched.last_name && (
				<p className="error"> {errors.last_name} </p>
			)}
			</div>
			<div>
			<label htmlFor="vendor_email">Email</label>
			<input
				type="email"
				name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Enter your email"
			/>
			{errors.email &&  touched.email && <p className="error"> {errors.email} </p>}
			</div>
			<div>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Enter your password"
			/>
			{errors.password && touched.password &&  (
				<p className="error"> {errors.password} </p>
			)}
			</div>
			<div>
			<label htmlFor="confirm-password">Confirm Password</label>
			<input
				type="password"
				id="confirm-password"
				name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Password Confirmation"
			/>
			{errors.confirm_password && touched.confirm_password && (
				<p className="error"> {errors.confirm_password} </p>
			)}
			</div>
			<div>
			<label htmlFor="shop-name">Shop Name</label>
			<input
				type="text"
				id="shop-name"
				name="shop_name"
                value={values.shop_name}
                onChange={handleChange}
                onBlur={handleBlur}
				placeholder="Enter your shop name"
			/>
			{errors.shop_name && touched.shop_name && (
				<p className="error"> {errors.shop_name} </p>
			)}
			</div>
			<div>
			<label htmlFor="shop-url">Shop Address</label>
			<textarea 
			id="shop-url"
			onBlur={handleBlur}
			onChange={handleChange}
			value={values.shop_address}
			placeholder="Enter your shop address"
			name="shop_address" rows={5} cols={5}></textarea>
			{errors.shop_address && touched.shop_address &&  (
				<p className="error"> {errors.shop_address} </p>
			)}
			</div>
			<div>
			<button
			    onClick={handleSubmit}
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
