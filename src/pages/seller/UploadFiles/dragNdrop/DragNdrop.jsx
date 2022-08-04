import React from "react";
import { useRef } from "react";
import { useState } from "react";
import dragDropStyle from "./dragNdrop.module.css";

const DragNdrop = () => {
  let [files, setFiles] = useState([]);
  let imageview = useRef(null);
  let onFile = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState == 2) {
    //     let newFile = e.target.files[0];
    //     let newFiles = [...files, newFile];
    //     imageview.src = e.target.files[0];
    //     setFiles(newFiles);
    //   }
    // };
    // reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className={dragDropStyle.dragContainer}>
        <h2>Drop files here or click to browse</h2>
        <input onChange={onFile} type="file" />{" "}
      </div>
      <img ref={imageview} src={files[0]} alt="" />
    </>
  );
};

export default DragNdrop;
