import React, { useEffect, useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";
import { markutosSellerApi } from "../../../../../../services/Api/api";
import authHeader from "../../../../../../services/auth-header";

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
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    markutosSellerApi
      .get("/get-digital-categories", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        // console.log(res.data);
        const category = [];

        res.data.map((item) => {
          const singleCategory = {
            id: item.value,
            value: item.label,
            label: item.label,
          };
          category.push(singleCategory);
        });
        setCategoryOptions(category);
      })
      .catch((e) => {});
  }, []);

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
              onChange={(option) => setFieldValue("category_id", option.id)}
              id="category_id"
              options={categoryOptions}
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
                {/* {values.file.length > 0
                  ? values.file.map((item) => (
                      <small key={item} className="me-2">
                        {item},
                      </small>
                    ))
                  : "Choose File"} */}

                {values.file ? (
                  <small className="me-2">{values.file},</small>
                ) : (
                  "Choose File"
                )}
              </div>
            </div>

            {errors.file && touched.file && (
              <small className="text-danger"> {errors.file} </small>
            )}
          </div>
          <UploadFilesModal
            setFieldValue={setFieldValue}
            format="file"
            values={values}
            imageFor={"file"}
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDigital;
