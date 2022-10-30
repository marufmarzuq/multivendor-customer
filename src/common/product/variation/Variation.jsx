import { Fragment, useState, useEffect } from "react";

const Variation = ({ colors, choseOptions, product }) => {
  const [selectVariant, setSelectVariant] = useState([]);
  const [variantPrice, setVariantPrice] = useState("");

  useEffect(() => {
    product.selectedVariant = selectVariant;
    var getVariant = "";
    // sort by index
    selectVariant.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));

    // combination of variation
    if (selectVariant?.length > 0) {
      selectVariant.map((variant, key) => {
        var dash = `${selectVariant.length !== key + 1 ? "-" : ""}`;
        getVariant += `${variant.variation}` + `${dash}`;
      });
      // get price
      if (getVariant !== "") {
        const found = product.variations.find(
          (element) => element.variant == getVariant
        );
        if (found) {
          product.price = found.price;
          setVariantPrice(found.price);
        }
      }
    }
  }, [selectVariant]);

  const getVariation = (attribute, newVariant, index) => {
    if (
      selectVariant.find((item) => item.attribute === attribute) !== undefined
    ) {
      // item exist
      let filteredVariant = selectVariant.filter(
        (item) => item.attribute !== attribute
      );
      setSelectVariant([
        ...filteredVariant,
        { attribute: attribute, variation: newVariant, index },
      ]);
    } else {
      setSelectVariant([
        ...selectVariant,
        { attribute: attribute, variation: newVariant, index },
      ]);
    }
  };

  return (
    <Fragment>
      <div className="d-flex flex-column">
        <div className="product-meta radio-wrap">
          {colors.length > 0 && (
            <Fragment>
              <span onClick={() => console.log(product)} className="label">
                Colors :{" "}
              </span>
              {colors.map((item, key) => {
                return (
                  <div className="radio-item" key={key}>
                    {/* <input
                      type="radio"
                      name="color"
                      value={item.name}
                      id={item.name}
                      onChange={(e) =>
                        getVariation("Colors", e.target.value, 0)
                      }
                    />
                    <label
                      className="radio-bg-padding"
                      htmlFor={item.name}
                      style={{ backgroundColor: item.code }}
                    ></label> */}
                    <span onClick={(e) =>
                        getVariation("Colors", item.name , 0)
                      } > </span>
                  </div>
                );
              })}
            </Fragment>
          )}
        </div>
        <div className="product-meta radio-wrap">
          {Object.keys(choseOptions).length > 0 && (
            <Fragment>
              {Object.keys(choseOptions)?.map((item, key) => {
                return (
                  <div key={key} className="me-1 ms-2">
                    <span className="label">{item} : </span>
                    {choseOptions[item]?.map((variant, i) => {
                      return (
                        <div className="radio-item" key={i}>
                          {/* <input
                            type="radio"
                            name={item}
                            value={variant}
                            id={variant}
                            onChange={(e) =>
                              getVariation(item, e.target.value, key + 1)
                            }
                          />
                          <label htmlFor={variant}>{variant}</label> */}
                          <span onClick={(e) =>
													getVariation(item, variant , key + 1)
													}>{variant}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Fragment>
          )}
          {variantPrice !== "" && (
            <div className="variation-price d-flex justify-content-end">
              {" "}
              {variantPrice}{" "}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Variation;
