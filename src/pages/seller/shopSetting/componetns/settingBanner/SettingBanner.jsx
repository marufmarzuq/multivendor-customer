import React from "react";
import { useState } from "react";
import "./ProductImages.css";
import UploadFilesModal from "../../../UploadFiles/UploadFilesModal";
const SettingBanner = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="add-product-single-widget">
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
                <div>Choose File</div>
              </div>
              <span className="helper-text">
                We had to limit height to maintian consistancy. In some device
                both side of the banner might be cropped for height limitation.
              </span>
            </div>
          </div>

          <UploadFilesModal show={show} setShow={setShow} />

          <div className="d-flex justify-content-end">
            <div className="btn btn-success"> Save </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBanner;
