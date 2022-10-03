import { FocusError } from "focus-formik-error";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import { manageProfileSchema } from "../../../schema";
import { markutosSellerApi } from "../../services/Api/api";
import authHeader from "../../services/auth-header";

import profileStyle from "./profile.module.css";
const ManageProfile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [submiting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const formik = useFormik({
    validationSchema: manageProfileSchema,
    initialValues: {
      first_name: profileInfo.first_name || "",
      last_name: profileInfo.last_name || "",
      phone: profileInfo.phone || "",
      avatar: profileInfo.avatar || "",
      email: profileInfo.email || "",
      country: profileInfo.country || "",
      city: profileInfo.city || "",
      area: profileInfo.area || "",
      pin_code: profileInfo.pin_code || "",
      account_number: profileInfo.account_number || "",
      bank_name: profileInfo.bank_name || "",
      branch_name: profileInfo.branch_name || "",
      routing_number: profileInfo.routing_number || "",
      swift: profileInfo.swift || "",
      account_holder: profileInfo.account_holder || "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      setSubmitting(true);
      markutosSellerApi
        .post(`/profile/update`, values, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          getData();
          setSubmitting(false);
        })
        .catch((err) => {
          toast.error(err.message);
          setSubmitting(false);
        });

      action.resetForm();
    },
  });

  const getData = () => {
    setLoading(true);
    markutosSellerApi
      .get("/profile", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        setProfileInfo(res.data);
        setLoading(false);
        setError("");
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    formik;

  return (
    <Fragment>
      <div className={`${profileStyle.background}`}>
        <section>
          <h5 className="px-md-4 px-3 py-2 pt-3">Manage Profile </h5>
          <hr />
        </section>

        {loading ? (
          <SimpleLoading />
        ) : (
          <section>
            <form onSubmit={handleSubmit}>
              <FocusError formik={formik} />
              <div className="mx-md-5 mx-0 ">
                <div className={profileStyle.infoContainer}>
                  <p
                    style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                    className="color-main"
                  >
                    Basic Information
                  </p>

                  <label htmlFor="first_name"> First Name *</label>
                  <div className={profileStyle.infoContainerField}>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.first_name && touched.first_name ? (
                      <small className="text-danger">
                        {" "}
                        {errors.first_name}{" "}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="last_name"> Last Name *</label>
                  <div>
                    <input
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="last_name"
                    />
                    {errors.last_name && touched.last_name ? (
                      <small className="text-danger">
                        {" "}
                        {errors.last_name}{" "}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="phone">Phone *</label>
                  <div>
                    <input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="phone"
                    />
                    {errors.phone && touched.phone ? (
                      <small className="text-danger"> {errors.phone} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="email">Email *</label>
                  <div>
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      id="email"
                    />

                    {errors.email && touched.email ? (
                      <small className="text-danger"> {errors.email} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <p
                    style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                    className="color-main"
                  >
                    Address
                  </p>
                  <label htmlFor="country">Country</label>
                  <div>
                    <input
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="country"
                    />
                    {errors.country && touched.country ? (
                      <small className="text-danger"> {errors.country} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="city">City</label>
                  <div>
                    <input
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="city"
                    />

                    {errors.city && touched.city ? (
                      <small className="text-danger"> {errors.city} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="area">Area</label>
                  <div>
                    <input
                      name="area"
                      value={values.area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="area"
                    />

                    {errors.area && touched.area ? (
                      <small className="text-danger"> {errors.area} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="pin_code">Pincode</label>
                  <div>
                    <input
                      name="pin_code"
                      value={values.pin_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="pin_code"
                    />
                    {errors.pin_code && touched.pin_code ? (
                      <small className="text-danger"> {errors.pin_code} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <p
                    style={{ gridColumn: "1 / 2 span", fontWeight: "600" }}
                    className="color-main"
                  >
                    Bank Details
                  </p>
                  <label htmlFor="acc_no">Account Number *</label>
                  <div>
                    <input
                      name="account_number"
                      value={values.account_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="account_number"
                    />
                    {errors.account_number && touched.account_number ? (
                      <small className="text-danger">
                        {errors.account_number}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="bank_name">Bank Name *</label>
                  <div>
                    <input
                      name="bank_name"
                      value={values.bank_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="bank_name"
                    />
                    {errors.bank_name && touched.bank_name ? (
                      <small className="text-danger">
                        {" "}
                        {errors.bank_name}{" "}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="branch_name">Branch Name *</label>
                  <div>
                    <input
                      name="branch_name"
                      value={values.branch_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="branch_name"
                    />
                    {errors.branch_name && touched.branch_name ? (
                      <small className="text-danger">
                        {errors.branch_name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="routing_number">Routing Number *</label>
                  <div>
                    <input
                      name="routing_number"
                      value={values.routing_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="routing_number"
                    />
                    {errors.routing_number && touched.routing_number ? (
                      <small className="text-danger">
                        {errors.routing_number}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="swift">Swift *</label>
                  <div>
                    <input
                      name="swift"
                      value={values.swift}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="swift"
                    />

                    {errors.swift && touched.swift ? (
                      <small className="text-danger"> {errors.swift} </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="account_holder">Account Holder *</label>
                  <div>
                    <input
                      name="account_holder"
                      value={values.account_holder}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="account_holder"
                    />
                    {errors.account_holder && touched.account_holder ? (
                      <small className="text-danger">
                        {errors.account_holder}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="password">Password *</label>
                  <div>
                    <input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="password"
                    />

                    {errors.password && touched.password ? (
                      <small className="text-danger"> {errors.password} </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
                  <button
                    disabled={submiting}
                    onSubmit={handleSubmit}
                    type="submit"
                    className="btn mt-4 btn-outline-success"
                  >
                    {submiting ? (
                      <div>
                        <div
                          className="spinner-border spinner-border-sm me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Update Infromation
                      </div>
                    ) : (
                      "Update Infromation"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default ManageProfile;
