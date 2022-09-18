import "./ProductDescription.css";
import { useState } from "react";
import CustomTextEditor from "../../../../../../../common/editor/CustomTextEditor";

const ProductDescription = ({
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
          <CustomTextEditor
            setFieldValue={setFieldValue}
            textFor="description"
            setContent={setEditorState}
            content={editorState}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
