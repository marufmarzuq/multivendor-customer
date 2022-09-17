import React from "react";
import "./ProductVideos.css";
import Select from "react-select";

const ProductVideos = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const options = [
    { value: "youtube", label: "Youtube" },
    { value: "dailymottion", label: "Dailymottion" },
    { value: "vimeo", label: "Vimeo" },
  ];
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Videos</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Video Provider</p>
          <Select
            name="video_provider"
            onBlur={handleBlur}
            onChange={(e) => setFieldValue("video_provider", e.value)}
            options={options}
            defaultValue={{ value: "select", label: "Select Provider" }}
          />

          {errors.video_provider && touched.video_provider && (
            <small className="text-danger"> {errors.video_provider} </small>
          )}
        </div>
        <div className="ap-single-content">
          <p>Video Link</p>
          <div>
            <div>
              <input
                name="video_link"
                onBlur={handleBlur}
                value={values.video_link}
                onChange={handleChange}
                id="video_link"
                placeholder="video link"
                type="text"
              />

              {errors.video_link && touched.video_link && (
                <small className="text-danger"> {errors.video_link} </small>
              )}
            </div>
            <span className="helper-text">
              Use proper link without extra parameter. Don't use short share
              link/embeded iframe code.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
