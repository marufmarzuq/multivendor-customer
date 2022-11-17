import React, { useState } from "react";
import UploadFilesModal from "../../../UploadFiles/UploadFilesModal";

const GeneralSettings = ({
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
  console.log(values);

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
                value={values?.name}
                onChange={handleChange}
                type="text"
                id="name"
              />
              {errors?.name && touched?.name ? (
                <small className="text-danger">{errors?.name} </small>
              ) : (
                ""
              )}
            </div>
            <label>
              <span> Shop Logo </span>
            </label>
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>{values?.logo ? values?.logo : "Choose File"}</div>
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
                value={values?.address}
                id="address"
                type="text"
              />
              {errors?.address && touched?.address ? (
                <small className="text-danger"> {errors?.address} </small>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="widget-title"> Banner Settings</div>
        <div className="widget-content-container">
          <div className="product-images-container">
            <div className="ap-single-content">
              <div>
                <p> Banners </p>
                <span className="helper-text">(1500x450)</span>
              </div>
              <div>
                <div onClick={() => setShow(!show)} className="custom-browse">
                  <div>Browse</div>
                  <div>{values?.sliders ? values?.sliders : "Choose File"}</div>
                </div>
                <span className="helper-text">
                  We had to limit height to maintian consistancy. In some device
                  both side of the banner might be cropped for height
                  limitation.
                </span>
              </div>
            </div>

            <UploadFilesModal
              setFieldValue={setFieldValue}
              values={values}
              imageFor="sliders"
              show={show}
              setShow={setShow}
            />
          </div>
        </div>
        <div className="widget-title">
          Social Media Link (
          <small>
            <i>Insert link with https</i>
          </small>
          )
        </div>
        <div className="widget-content-container">
          <div className="ap-single-content">
            <p> Facebook </p>
            <div>
              <input
                name="facebook"
                onChange={handleChange}
                value={values?.facebook}
                type="text"
                placeholder="www.facebook.com"
              />
            </div>
          </div>
          <div className="ap-single-content">
            <p> Twitter </p>
            <div>
              <input
                name="twitter"
                onChange={handleChange}
                value={values?.twitter}
                type="text"
                placeholder="www.twitter.com"
              />
            </div>
          </div>
          <div className="ap-single-content">
            <p> Google </p>
            <div>
              <input
                name="google"
                onChange={handleChange}
                value={values?.google}
                type="text"
                placeholder="www.google.com"
              />
            </div>
          </div>
          <div className="ap-single-content">
            <p> Youtube </p>
            <div>
              <input
                name="youtube"
                onChange={handleChange}
                value={values?.youtube}
                type="text"
                placeholder="www.youtube.com"
              />
            </div>
          </div>
          <div className="ap-single-content">
            <p> Instagram </p>
            <div>
              <input
                name="instagram"
                onChange={handleChange}
                value={values?.instagram}
                type="text"
                placeholder="www.instagram.com"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GeneralSettings;
