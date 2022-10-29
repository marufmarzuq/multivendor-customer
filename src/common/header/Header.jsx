import React, { useState } from "react";
import "./header.css";
import { logo } from "../../assets/index";
import MiniCart from "../../pages/customer/miniCart/MiniCart";
import { useNavigate } from "react-router-dom";
import AuthService from "../../pages/customer/services/auth.service";
import {
  AiOutlineBars,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  FaTimes,
} from "react-icons/fa";

import { BsBagDash, BsFlower2, BsTags } from "react-icons/bs";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { BiBasketball } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import { loadFromLocalStorage as loadSellerData } from "../../utils/seller/manageLocalStorage";

import Select from "react-select";
import { useCart } from "react-use-cart";
import Categories from "./component/Categories";

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

const Header = ({ categories , headerLogo , languageSwitcher, currencySwitcher , user }) => {
  const [mobileNav, setMobileNav] = useState(false);

  // Logout
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    AuthService.logout();
  };

  const seller = loadSellerData();

  const { totalItems } = useCart();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <header className="header">
      {/* <!-- topbar --> */}
      <div className="topbar ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-lg-6 col-xl-6 col-xxl-6 left-menu">
              <ul className="d-flex">
							{
							languageSwitcher == true && (
								<li className="dropdown">
									<a
										className="dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
									>
										En
									</a>

									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="#">
												Bn
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Ar
											</a>
										</li>
									</ul>
								</li>
								)
							}
							{
								currencySwitcher == true &&
								(
									<li className="dropdown">
									<a
										className="dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
									>
										Euro
									</a>

										<ul className="dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													USD
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													BDT
												</a>
											</li>
										</ul>
									</li>
								)
							}
              </ul>
            </div>
            <div className="col-8 col-lg-6 col-xl-6 col-xxl-6 right-menu">
              <ul className="d-flex justify-content-end">
                <li>
                  <NavLink to={seller ? "/seller" : "/seller-request"}>
                    {seller ? "Seller Dashboard" : "Be a Seller"}
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <NavLink to="/dashboard">
                      {user?.user?.first_name}
                      {user?.user?.last_name}
                    </NavLink>
                  ) : (
                    <NavLink to="/register">Register</NavLink>
                  )}
                </li>
                <li>
                  {user ? (
                    <NavLink to="/login" onClick={logout}>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink to="/login">Login</NavLink>
                  )}
                </li>
                <li
                  style={{
                    marginRight: "6px",
                  }}
                >
                  <NavLink to="/support">Help and Support</NavLink>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="far fa-bell active-dot"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ./topbar --> */}

      {/* <!-- main-header --> */}
      <div className=" main-header">
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
                <div className="input-group">
                  <input
                    type="text"
                    className=" search-text "
                    placeholder="Looking for..."
                  />

                  <Select
                    styles={customStyles}
                    options={options}
                  />

                  <button type="button" className="btn search-button">
                    Search <AiOutlineSearch />
                  </button>
                </div>
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
                      <span>0</span>
                    </NavLink>
                  </li>
                  {/* WishList */}
                  <li>
                    <NavLink to="/wishlist">
                      <AiOutlineHeart />
                      <span>0</span>
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
      {/* <!-- ./main-header --> */}

      {/* <!-- header-menu --> */}
      <div className="header-menu">
        <div className="container">
          <div className="row align-items-center">
						<Categories categories={categories}/>
            <div className="col-8  d-flex align-items-center">
              <div className="shop-menu">
                <ul
                  className={`${
                    mobileNav
                      ? `d-flex flex-column flex-md-row side-navigation mobile-menu-open`
                      : `d-flex flex-column flex-md-row side-navigation`
                  }`}
                >
                  <button
                    // href="javascript:void(0)"

                    className="closebtn btn d-block d-md-none"
                    onClick={() => setMobileNav(!mobileNav)}
                  >
                    <FaTimes />
                  </button>

                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/stores">Stores</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                  </li>
                </ul>
                <span
                  className="mobile-nav-open d-block d-md-none"
                  onClick={() => setMobileNav(!mobileNav)}
                >
                  <AiOutlineBars />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ./header-menu --> */}
    </header>
  );
};

export default Header;
