import React, { useState } from "react";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";
const PdfSpecification = ({
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
      <div className="widget-title">PDF Specification</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <div>
            <p>Add PDF</p>
          </div>
          <div>
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>{values.pdf ? values.pdf : "Choose File"}</div>
            </div>

            <UploadFilesModal
              setFieldValue={setFieldValue}
              format="string"
              values={values}
              imageFor="pdf"
              show={show}
              setShow={setShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfSpecification;
