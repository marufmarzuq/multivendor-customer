import React from "react";

import { pdfLogo } from "../../../../assets";
import dragDropStyle from "./dragNdrop.module.css";

const DragNdrop = ({ files, setFiles }) => {
  let onFile = (e) => {
    if (e.target.files[0]) {
      let newFile = e.target.files[0];
      let newFiles = [...files, newFile];
      setFiles(newFiles);
    }
  };

  let removeImg = (id) => {
    let newFiles = files.filter((file, i) => {
      return i != id;
    });

    setFiles(newFiles);
  };

  return (
    <>
      <div className={dragDropStyle.dragContainer}>
        <div className={dragDropStyle.imageInput}>
          <h2>Drop files here or click to browse</h2>
          <input onChange={onFile} type="file" />{" "}
        </div>
        <div className={dragDropStyle.imageContainer}>
          {files?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => removeImg(index)}
                className={dragDropStyle.singleImgContainer}
              >
                {/* <img src={URL.createObjectURL(item)} alt="" /> */}

                {item.type == "application/pdf" ? (
                  <img src={pdfLogo} alt="" />
                ) : (
                  <img src={URL.createObjectURL(item)} alt="" />
                )}
                <small> click to cancel</small>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DragNdrop;
