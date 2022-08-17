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

const SettingInfo = () => {
  const [tags, setTags] = useState(["example tag"]);
  const [show, setShow] = useState(false);

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Basic Info</div>
      <div className="widget-content-container">
        <div className="product-informaiton-form">
          <label htmlFor="product__name">
            <span>Shop Name</span>
            <i>*</i>
          </label>
          <input id="product__name" type="text" />

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
            <div>Choose File</div>
          </div>
          <UploadFilesModal show={show} setShow={setShow} />

          <label htmlFor="product__name">
            <span> Shop Address </span>
            <i>*</i>
          </label>
          <input id="product__name" type="text" />
        </div>

        <div className="d-flex justify-content-end mt-4 ">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingInfo;
