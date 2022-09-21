import React, { useState } from "react";
import "./productSEO.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";

const DigtalProductSEO = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">SEO Meta Tags</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Meta Title *</p>
          <div>
            <input
              name="meta_title"
              value={values.meta_title}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />

            {errors.meta_title && touched.meta_title && (
              <small className="text-danger"> {errors.meta_title} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <p>Description *</p>
          <div>
            <textarea
              name="meta_description"
              value={values.meta_description}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="10"
            ></textarea>
            {errors.meta_description && touched.meta_description && (
              <small className="text-danger"> {errors.meta_description} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <div>
            <p>Meta Image *</p>
          </div>
          <div>
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>{values.meta_img ? values.meta_img : "Choose File"}</div>
            </div>

            <UploadFilesModal
              setFieldValue={setFieldValue}
              format="string"
              values={values}
              imageFor="meta_img"
              show={show}
              setShow={setShow}
            />
            {errors.meta_img && touched.meta_img && (
              <small className="text-danger"> {errors.meta_img} </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigtalProductSEO;
