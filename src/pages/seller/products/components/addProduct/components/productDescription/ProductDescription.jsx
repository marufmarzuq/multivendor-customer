import React from "react";
import "./ProductDescription.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";

const ProductDescription = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(editorState);
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Description</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Description</p>
          <div className="prod-desc-container">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(value) => setEditorState(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
