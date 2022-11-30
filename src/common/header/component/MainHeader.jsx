import React, { useState, useContext, useEffect } from "react";
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
import SearchTemplate from "./SearchTemplate";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerWishlist } from "../../../redux/slices/wishlist";
import { setCompare } from "../../../redux/slices/compare";

const MainHeader = ({ filterCategories, headerLogo }) => {
  const { totalItems } = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [catId, setCatId] = useState("");
  const wishlistedProds = JSON.parse(localStorage.getItem("my-wishlist")) || [];
  const comparedProds =
    JSON.parse(localStorage.getItem("compared-prods")) || [];
  const [showSearchTemp, setShowSearchTemp] = useState(false);
  const dispatch = useDispatch();

  const { count: wishlishtCount } = useSelector(
    (state) => state?.customerWishlist
  );
  const { products: comparedProdsOnState } = useSelector(
    (state) => state?.compare
  );

  useEffect(() => {
    dispatch(
      setCustomerWishlist({
        count: wishlistedProds.length,
        products: wishlistedProds,
      })
    );
    dispatch(
      setCompare({
        products: comparedProds,
      })
    );
  }, []);

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
        setSearchResult(response.data);
      })
      .catch((e) => {});
  };
  // console.log(searchResult);
  document.onclick = function (h) {
    if (h.target.className !== "search-text") {
      setShowSearchTemp(false);
    }
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
                    onFocus={() => setShowSearchTemp(true)}
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
                  {showSearchTemp && (
                    <SearchTemplate searchResult={searchResult} />
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-3 ">
            <div className="menu-icons">
              <ul className="d-flex justify-content-end">
                {/* Compare List */}
                <li>
                  <div
                    className="header-sml-btn"
                    onClick={() =>
                      dispatch(
                        setCompare({ open: true, products: comparedProds })
                      )
                    }
                  >
                    <IoIosGitCompare />
                    <span>
                      {comparedProdsOnState && comparedProdsOnState.length}
                    </span>
                  </div>
                </li>
                <li>
                  <NavLink to="/wishlist">
                    <AiOutlineHeart />
                    <span>{wishlishtCount}</span>
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
