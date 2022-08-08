import React from "react";
import "./productDescription.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ProductDescriptionDigital = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Description</div>
      <div className="widget-content-container">
        <div className="ap-single-content-des">
          {/* <p className="product-des-title">Description</p> */}
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

export default ProductDescriptionDigital;
