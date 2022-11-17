import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { API_URL } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";

const ShopPageSettings = ({
  handleChange,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/get-categories`, {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((response) => {
        const formattedData = response.data.map((singleData) => {
          return { value: singleData.id, label: singleData.name };
        });
        formattedData[0] ? setCategories(formattedData) : setCategories([]);
        setSelectedCategories(
          formattedData.filter(
            (fd) => values?.categories?.includes(fd.value) && fd
          )
        );
      });
  }, [values?.categories?.length]);

  const handleCategories = (item) => {
    setSelectedCategories(item);
    setFieldValue(
      "categories",
      item.map((i) => i.value)
    );
  };

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Basic Info</div>
      <div className="widget-content-container">
        <div className="product-informaiton-form">
          <label htmlFor="name">
            <span>Categories</span>
            <i>*</i>
          </label>
          <div>
            <Select
              isMulti
              value={selectedCategories}
              onChange={(item) => handleCategories(item)}
              options={categories}
            />
          </div>
          <label htmlFor="about_shop">
            <span>About Shop</span>
          </label>
          <div>
            <textarea
              name="about"
              value={values?.about}
              onChange={handleChange}
              type="text"
              id="about"
              rows={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageSettings;
