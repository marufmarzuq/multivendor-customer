import React, { useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import UploadFilesModal from "../../../UploadFiles/UploadFilesModal";

const options = [
  { value: "dhanmondi", label: "Dhanmondi" },
  { value: "farmgate", label: "Farmgate" },
  { value: "uttara", label: "Uttara" },
];

const SettingInfo = ({
  submiting,
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [tags, setTags] = useState(["example tag"]);
  const [show, setShow] = useState(false);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="add-product-single-widget">
        <div className="widget-title">Basic Info</div>
        <div className="widget-content-container">
          <div className="product-informaiton-form">
            <label htmlFor="name">
              <span>Shop Name</span>
              <i>*</i>
            </label>
            <div>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
              />

              {/* <small className="text-danger"> {errors.shopName} </small> */}
              {errors.name && touched.name ? (
                <small className="text-danger"> {errors.name} </small>
              ) : (
                ""
              )}
            </div>

            {/* <label htmlFor="product__category">
            <span>Pickup Points</span>
            <i>*</i>
          </label>
          <Select options={options} placeholder="Pickup Points" /> */}

            <label>
              <span> Shop Logo </span>
            </label>
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>{values.logo ? values.logo : "Choose File"}</div>
            </div>
            <UploadFilesModal
              format="string"
              setFieldValue={setFieldValue}
              imageFor="logo"
              values={values}
              show={show}
              setShow={setShow}
            />

            <label htmlFor="address">
              <span> Shop Address </span>
              <i>*</i>
            </label>
            <div>
              <input
                name="address"
                onChange={handleChange}
                value={values.address}
                id="address"
                type="text"
              />
              {/* <small className="text-danger"> {errors.shopAddress} </small> */}

              {errors.address && touched.address ? (
                <small className="text-danger"> {errors.address} </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4 ">
            <button
              disabled={submiting}
              onClick={() => handleSubmit()}
              type="submit"
              className="btn btn-success"
            >
              {submiting ? (
                <div>
                  <div
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Save
                </div>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingInfo;
