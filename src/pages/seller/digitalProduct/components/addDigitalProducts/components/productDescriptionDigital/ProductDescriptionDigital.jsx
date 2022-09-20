import React, { useState } from "react";
import "./productDescription.css";
import CustomTextEditor from "../../../../../../../common/editor/CustomTextEditor";

const ProductDescriptionDigital = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const [editorState, setEditorState] = useState("");
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Description</div>
      <div className="widget-content-container">
        <div className="ap-single-content-des">
          <div className="tiny-desc-container">
            <CustomTextEditor
              setFieldValue={setFieldValue}
              textFor="description"
              setContent={setEditorState}
              content={editorState}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionDigital;
