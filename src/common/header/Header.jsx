import React, { useState } from "react";
import "./header.css";
import { logo } from "../../assets/index";
import MiniCart from "../../pages/customer/miniCart/MiniCart";
import {
  AiFillCar,
  AiOutlineBars,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  FaBaby,
  FaBalanceScale,
  FaBalanceScaleLeft,
  FaBalanceScaleRight,
  FaRegHeart,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import { BsBagDash, BsFlower2, BsTags } from "react-icons/bs";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { BiBasketball } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="header">
      {/* <!-- topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-lg-6 col-xl-6 col-xxl-6 left-menu">
              <ul className="d-flex">
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
              </ul>
            </div>
            <div className="col-8 col-lg-6 col-xl-6 col-xxl-6 right-menu">
              <ul className="d-flex justify-content-end">
                <li>
                  <NavLink to="/seller-request">Be a Seller</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
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
                  <img src={logo} alt="Website Logo" />
                </a>
              </div>
            </div>
            <div className="d-none d-md-block col-md-7 col-lg-6">
              <div className="search-wrap">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control search-text"
                    placeholder="Looking for..."
                  />
                  <select name="" className="form-control search-select">
                    <option value="">Product</option>
                    <option value="">Option 2</option>
                  </select>
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
                      <span>0</span>
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
            <div className="d-none d-md-block col-md-4">
              <div className="categories">
                <div className="dropdown-button px-0">
                  <span className="d-flex align-items-center">
                    <AiOutlineBars className="me-2 mt-0" />{" "}
                    <span className="mt-1">Categories</span>
                  </span>
                  <div className="category-list">
                    <ul>
                      <li className="see-all">
                        <a href="#">See All</a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            {" "}
                            <BsFlower2 />
                          </i>
                          Beauty
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <GiFruitBowl />
                          </i>
                          Groceries
                        </a>

                        <ul>
                          <li>
                            <a href="#">Men</a>
                          </li>
                          <li>
                            <a href="#">Women</a>
                          </li>
                          <li>
                            <a href="#">Kids</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <GiClothes />
                          </i>
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <BsBagDash />
                          </i>
                          Bags & Shoes
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <BiBasketball />
                          </i>
                          Outdoor Fun & Sports
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <AiFillCar />
                          </i>
                          Automobile & Motorcycles
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaBaby />
                          </i>
                          Toys & Kids
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
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
