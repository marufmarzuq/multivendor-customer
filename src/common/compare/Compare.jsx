import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./compare.css";
import { BsChevronDown, BsStar, BsStarFill } from "react-icons/bs";
import { setQuickView } from "../../redux/slices/quickView";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { setCompare } from "../../redux/slices/compare";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Compare = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const close = (e) => {
    e.stopPropagation();
    dispatch(setCompare({ open: false, products }));
  };

  const handleDelete = (id) => {
    let newProducts = products.filter((prod) => prod.id !== id);
    dispatch(setCompare({ open: true, products: newProducts }));
  };
  const handleDeleteAll = () => {
    dispatch(setCompare({ open: true, products: [] }));
    setTimeout(() => {
      dispatch(setCompare({ open: false, products: [] }));
    }, 1000);
  };

  return (
    <div className="compare-modal">
      <div className="compare-outer-container" onClick={close}>
        <div className="compare-container" onClick={(e) => e.stopPropagation()}>
          <div className="compare-inner-container">
            <div className="compare-grid">
              <div className="cpg-title">
                <span>Compare products</span>
                <span>({products?.length} Products)</span>
              </div>
              <div className="cgp-products">
                {products[0] &&
                  products.map((prod, i) => (
                    <div key={i} className="single-cgp-prod">
                      <span onClick={() => handleDelete(prod.id)}>
                        <IoCloseOutline />
                      </span>
                      <img src={productPlaceholder} alt="" />
                      <div>{prod.name}</div>
                    </div>
                  ))}
              </div>
              <div className="cgp-actions">
                <div className="cgp-clear" onClick={handleDeleteAll}>
                  Clear All
                </div>
                <button
                  disabled={products?.length < 1}
                  className="cgp-compare-btn"
                  onClick={() => {
                    navigate("../compare");
                    dispatch(setCompare({ open: false, products }));
                  }}
                >
                  LET'S COMPARE!
                </button>
              </div>
              <div className="compare-close" onClick={close}>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
