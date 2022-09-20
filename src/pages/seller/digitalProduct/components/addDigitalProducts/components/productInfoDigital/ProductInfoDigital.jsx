import React, { useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ProductInfoDigital = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,

  setFieldValue,
}) => {
  const [tags, setTags] = useState(["example tag"]);
  const [show, setShow] = useState(false);

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">General</div>
      <div className="widget-content-container ">
        <div className="product-informaiton-form">
          <div className="">
            <label htmlFor="product__name">
              <span>Product Name</span>
              <i>*</i>
            </label>
          </div>
          <div>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              type="text"
            />
            {errors.name && touched.name && (
              <small className="text-danger"> {errors.name} </small>
            )}
          </div>

          <div>
            <label htmlFor="product__category">
              <span>Category</span>
              <i>*</i>
            </label>
          </div>
          <div>
            <Select
              onBlur={handleBlur}
              name="category_id"
              onChange={(option) => setFieldValue("category_id", option.value)}
              id="category_id"
              options={options}
              placeholder="All Categories"
            />

            {errors.category_id && touched.category_id && (
              <small className="text-danger"> {errors.category_id} </small>
            )}
          </div>

          <div>
            <label>
              <span>Tags</span>
            </label>
          </div>
          <div>
            <ReactTagInput
              name="tags"
              tags={values.tags}
              onChange={(newTags) => setFieldValue("tags", newTags)}
              removeOnBackspace={true}
            />
          </div>
          <div>
            <label>
              <span> Add Files</span>
            </label>
          </div>
          <div>
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>
                {values.files.length > 0
                  ? values.files.map((item) => (
                      <small key={item} className="me-2">
                        {item},
                      </small>
                    ))
                  : "Choose File"}
              </div>
            </div>

            {errors.files && touched.files && (
              <small className="text-danger"> {errors.files} </small>
            )}
          </div>
          <UploadFilesModal
            setFieldValue={setFieldValue}
            format="array"
            values={values}
            imageFor={"files"}
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDigital;
