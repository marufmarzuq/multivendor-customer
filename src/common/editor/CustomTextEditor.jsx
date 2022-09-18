import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "./customTextEditor.css";
const CustomTextEditor = ({ content, setContent, setFieldValue, textFor }) => {
  const editor = useRef(null);

  //   const config = useMemo(
  //     {
  //       readonly: false, // all options from https://xdsoft.net/jodit/doc/,
  //       placeholder: "Start typings...",
  //     },
  //     []
  //   );

  const handleChange = (newContent) => {
    setContent(newContent);
    setFieldValue(textFor, newContent);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      //   config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => handleChange(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => handleChange(newContent)}
    />
  );
};

export default CustomTextEditor;
