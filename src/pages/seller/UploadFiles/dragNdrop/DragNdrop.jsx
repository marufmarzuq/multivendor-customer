import React from "react";

import { pdfLogo } from "../../../../assets";
import dragDropStyle from "./dragNdrop.module.css";

const DragNdrop = ({ files, setFiles }) => {

  let onFile = (e) => {
		const chosenFiles = Array.prototype.slice.call(e.target.files)
    if ( chosenFiles.length>0 ) {
			for(var i=0;i<chosenFiles.length;i++){
				let newFile = chosenFiles[i];
				setFiles(files => [newFile,...files] );
			}
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
          <input onChange={onFile} type="file" multiple  />{" "}
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
