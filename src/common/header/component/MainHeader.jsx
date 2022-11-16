import React, { useState, useContext } from "react";
import { logo } from "../../../assets/index";
import MiniCart from "../../../pages/customer/miniCart/MiniCart";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import Select from "react-select";
import { markutosFrontendApi } from "../../../pages/services/Api/api";
import { searchData } from "./data";
import { priceFormat } from "../../../hooks/helper";

const MainHeader = ({ filterCategories, headerLogo }) => {
  const { totalItems } = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [catId, setCatId] = useState("");
  const customStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999, background: "red" }),
    valueContainer: (provided) => ({
      ...provided,
      width: 200,
      height: "auto",
    }),
    control: (base) => ({
      ...base,
      width: 200,
      height: 40,
      borderRadius: "0px",
      boxShadow: "none",
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      marginTop: -12,
    }),
    singleValue: (styles) => ({ ...styles, marginTop: -12 }),
    dropdownIndicator: (styles) => ({
      marginTop: -12,
      paddingRight: 15,
      color: "gray",
    }),
  };

  const getResultData = () => {
    markutosFrontendApi
      .get(`search?search_value=${searchValue}&category_id=${catId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {});
  };

  return (
    <div className="main-header">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-6 col-md-3">
            <div className="logo">
              <a href="#">
                <img src={headerLogo ? headerLogo : logo} alt="MARKUTOS" />
              </a>
            </div>
          </div>
          <div className="d-none d-md-block col-md-7 col-lg-6">
            <div className="search-wrap">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <input
                    type="text"
                    className="search-text"
                    placeholder="Looking for..."
                    value={searchValue}
                    name={"search_value"}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      getResultData();
                    }}
                  />

                  <Select
                    styles={customStyles}
                    options={filterCategories}
                    onChange={(e) => {
                      setCatId(e.value);
                      getResultData();
                    }}
                  />

                  <button type="button" className="btn search-button">
                    Search <AiOutlineSearch />
                  </button>
                  <div className="search-template">
                    {searchData[0] &&
                      searchData.map((prod) => (
                        <div className="single_search_prod">
                          <div className="ssp-img">
                            <img src={prod.img} alt="" />
                          </div>
                          <div>
                            <p className="ssp-title">{prod.title}</p>
                            <p className="ssp-price">
                              {priceFormat(prod.price)}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-3 ">
            <div className="menu-icons">
              <ul className="d-flex justify-content-end">
                {/* Compare List */}
                <li>
                  <NavLink to="/compare">
                    {/* <FaBalanceScaleRight /> */}
                    <IoIosGitCompare />
                    <span>{0}</span>
                  </NavLink>
                </li>
                {/* WishList */}
                <li>
                  <NavLink to="/wishlist">
                    <AiOutlineHeart />
                    <span>{0}</span>
                  </NavLink>
                </li>
                <li className="headerMiniCartIcon">
                  <NavLink to="/cart">
                    <AiOutlineShoppingCart />
                    <span> {totalItems} </span>
                  </NavLink>
                  <span className="headerMiniCart">
                    <MiniCart />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
