import React from "react";
import "./header.css";
import { logo } from "../../assets/index";
const Header = () => {
  return (
    <header class="header">
      {/* <!-- topbar --> */}
      <div class="topbar">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4 col-lg-6 col-xl-6 col-xxl-6 left-menu">
              <ul class="d-flex">
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Euro
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        USD
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        BDT
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    En
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Bn
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Ar
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-8 col-lg-6 col-xl-6 col-xxl-6 right-menu">
              <ul class="d-flex justify-content-end">
                <li>
                  <a href="#">Be a Seller</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Help and Support</a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-bell active-dot"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ./topbar --> */}

      {/* <!-- main-header --> */}
      <div class="main-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-md-3">
              <div class="logo">
                <a href="#">
                  <img src={logo} alt="Website Logo" />
                </a>
              </div>
            </div>
            <div class="d-none d-md-block col-md-7 col-lg-6">
              <div class="search-wrap">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control search-text"
                    placeholder="Looking for..."
                  />
                  <select name="" class="form-control search-select">
                    <option value="">Product</option>
                    <option value="">Option 2</option>
                  </select>
                  <button type="button" class="btn search-button">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-2 col-lg-3">
              <div class="menu-icons">
                <ul class="d-flex justify-content-end">
                  <li>
                    <a href="#">
                      <i class="icon-balance count-circle">
                        <span>0</span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-heart count-circle">
                        <span>0</span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-bascet count-circle">
                        <span>10</span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-user"></i>
                      <span class="d-none d-md-inline-block">Login</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ./main-header --> */}

      {/* <!-- header-menu --> */}
      <div class="header-menu">
        <div class="container">
          <div class="row align-items-center">
            <div class="d-none d-md-block col-md-4">
              <div class="categories">
                <div class="dropdown-button">
                  <i class="icon-bar"></i> Categories
                  <div class="category-list">
                    <ul>
                      <li class="see-all">
                        <a href="#">See All</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-beauty"></i>
                          Beauty
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-grocery"></i>
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
                          <i class="icon-clothing"></i>
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-bags"></i>
                          Bags & Shoes
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-outdoor"></i>
                          Outdoor Fun & Sports
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-automobile"></i>
                          Automobile & Motorcycles
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-toys"></i>
                          Toys & Kids
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="shop-menu">
                <ul
                  class="d-flex flex-column flex-md-row side-navigation"
                  id="mobile-menu"
                >
                  <a
                    href="javascript:void(0)"
                    class="closebtn d-block d-md-none"
                    onclick="closeNav()"
                  >
                    &times;
                  </a>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Store List</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                </ul>
                <span
                  class="mobile-nav-open d-block d-md-none"
                  onclick="openNav()"
                >
                  <i class="icon-bar"></i>
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
