import React, { useState } from "react";
import "./ProductVariation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import { date, object } from "yup";

const ProductVariation = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const [tags, setTags] = useState(["Black", "Red", "Blue", "Green"]);
  const [size, setSize] = useState([]);
  const [variationState, setVariationState] = useState(false);
  const [attribute, setAttribute] = useState("");
  const [variations, setVariations] = useState([
    {
      name: "colors",
      values: [],
    },
    {
      name: "size",
      values: [],
    },
    {
      name: "allVariations",
      values: [],
      prices: {},
      quantity: {},
    },
  ]);
  const colorsOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];
  const attributesOptions = [
    { value: "size", label: "Size" },
    { value: "fabric", label: "Fabric" },
    { value: "bag", label: "Bag" },
  ];

  const setValus = (name, newTags) => {
    const newVarition = variations?.map((item) => {
      if (item.name == name) {
        item.values = newTags;
        setFieldValue(item.name, newTags.sort());
        return item;
      } else {
        return item;
      }
    });

    const allValues = [];
    if (variations[0].values.length > 0 && variations[1].values.length > 0) {
      for (let i = 0; i < variations[0].values.length; i++) {
        for (let j = 0; j < variations[1].values.length; j++) {
          allValues.push(
            `${variations[0].values[i]}_${variations[1].values[j]}`
          );
        }
      }
    } else if (variations[0].values.length > 0) {
      for (let i = 0; i < variations[0].values.length; i++) {
        allValues.push(`${variations[0].values[i]}`);
      }
    } else if (variations[1].values.length > 0) {
      for (let i = 0; i < variations[1].values.length; i++) {
        allValues.push(`${variations[1].values[i]}`);
      }
    }

    newVarition[2].values = allValues;

    const priceKeys = Object.keys(variations[2].prices).sort();
    const filteredPriceKey = variations[2].values.filter((keys) => {
      if (priceKeys.includes(keys)) {
        return keys;
      } else {
        variations[2].prices[keys] = 0;
      }
    });

    const serialPrice = filteredPriceKey.map((key) => {
      return variations[2].prices[key];
    });

    const quantityKeys = Object.keys(variations[2].quantity).sort();
    const filteredQuantityKey = variations[2].values.filter((keys) => {
      if (quantityKeys.includes(keys)) {
        return keys;
      } else {
        variations[2].quantity[keys] = 0;
      }
    });
    const serialQuantity = filteredQuantityKey.map((key) => {
      return variations[2].quantity[key];
    });

    setFieldValue("variant_price", serialPrice);
    setFieldValue("variant_quantity", serialQuantity);

    setFieldValue("variants", allValues.sort());
    setVariations(newVarition);
  };

  const priceUpdate = (e, variant, quantity) => {
    const newVariation = variations.map((variation) => {
      if (variation.name == "allVariations") {
        variation.prices[variant] = e.target.value;
        if (quantity) {
          variation.quantity[variant] = e.target.value;
        }
        return variation;
      } else {
        return variation;
      }
    });
    const priceKeys = Object.keys(newVariation[2].prices).sort();
    const filteredPriceKey = variations[2].values.filter((keys) => {
      if (priceKeys.includes(keys)) {
        return keys;
      }
    });
    const serialPrice = filteredPriceKey.map((key) => {
      return newVariation[2].prices[key];
    });

    const quantityKeys = Object.keys(newVariation[2].quantity).sort();
    const filteredQuantityKey = variations[2].values.filter((keys) => {
      if (quantityKeys.includes(keys)) {
        return keys;
      }
    });
    const serialQuantity = filteredQuantityKey.map((key) => {
      return newVariation[2].quantity[key];
    });

    setFieldValue("variant_price", serialPrice);
    setFieldValue("variant_quantity", serialQuantity);
    setVariations(newVariation);
  };

  console.log(values);

  return (
    <>
      <section>
        <div className="add-product-single-widget">
          <div className="widget-title"> Variation</div>
          <div className="widget-content-container">
            <div className="ap-single-content">
              <p>Status</p>
              <label className="confi-switch">
                <input
                  onChange={(e) => setVariationState(e.target.checked)}
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
      {variationState && (
        <section>
          <div className="add-product-single-widget">
            <div className="widget-title">Product Variation</div>
            <div className="widget-content-container">
              {/* <div className="ap-single-content">
                <p>Colors</p>
                <label className="confi-switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div> */}

              {/* <div className="ap-single-content"> */}
              {/* <p>Select colors</p>
        <Select options={colorsOptions} /> */}

              {/* <p>Color </p>

                <ReactTagInput
                  tags={tags}
                  removeOnBackspace={true}
                  onChange={(newTags) => setTags(newTags)}
                />
              </div> */}

              <section className="mb-3">
                {variations.map((item, i) => {
                  if (item.name != "allVariations")
                    return (
                      // <div>
                      <div key={i} className="ap-single-content mb-3">
                        <p> {item.name} </p>
                        <ReactTagInput
                          tags={item.values}
                          removeOnBackspace={true}
                          onChange={(newTags) => setValus(item.name, newTags)}
                        />
                      </div>

                      //   {item.values.map((value, i) => {
                      //     return (
                      //       <div key={value} className="ap-single-content mb-3">
                      //         <p> Price-{value} </p>
                      //         <input style={{ height: "38px" }} type="number" />
                      //       </div>
                      //     );
                      //   })}
                      // </div>
                    );
                })}
              </section>

              <section>
                {variations.map((item) => {
                  return (
                    item.name == "allVariations" &&
                    item.values?.map((price) => (
                      // <div>
                      <div>
                        <div
                          key={new date()}
                          className="ap-single-content mb-3"
                        >
                          <p> {price.toUpperCase() + "  " + "Price"} </p>
                          <input
                            onChange={(e) => priceUpdate(e, price)}
                            type="number"
                            min={1}
                          />
                        </div>

                        <div key={price} className="ap-single-content mb-3">
                          <p> {price.toUpperCase() + "  " + "Quantity"} </p>
                          <input
                            defaultValue={""}
                            onChange={(e) => priceUpdate(e, price, "quantity")}
                            type="number"
                            min={1}
                          />
                        </div>
                      </div>
                    ))
                  );
                })}
              </section>

              {/* 
              <div className="ap-single-content">
                <p>Attributes</p>
                <div>
                  <div>
                    <Select
                      onChange={(e) => setAttribute(e.value)}
                      options={attributesOptions}
                      placeholder="Attributes"
                    />
                  </div>
                  <span className="helper-text">
                    Choose the attributes of this product and then input values
                    of each attribute
                  </span>
                </div>
              </div> */}
              {attribute == "size" && (
                <div className="ap-single-content">
                  <p>Size</p>
                  <ReactTagInput
                    tags={size}
                    removeOnBackspace={true}
                    onChange={(newTags) => setSize(newTags)}
                  />
                </div>
              )}
              {attribute == "fabric" && (
                <div className="ap-single-content">
                  <p>Fabric</p>
                  <input type="text" placeholder="Enter choice values" />
                </div>
              )}
              {attribute == "bag" && (
                <div className="ap-single-content">
                  <p>Bag</p>
                  <input type="text" placeholder="Enter choice values" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductVariation;
