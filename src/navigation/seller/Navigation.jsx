import React, { Fragment, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import navigationStyle from "./navigation.module.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../../pages/seller/services/auth.service";

import {
  AiOutlineHome,
  AiFillFileAdd,
  AiOutlineUser,
  AiOutlineArrowUp,
} from "react-icons/ai";

import { IoMdCheckmarkCircleOutline, IoIosStarHalf } from "react-icons/io";
import { HiOutlineTicket } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { RiVipDiamondLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsArrowCounterclockwise, BsCurrencyDollar } from "react-icons/bs";
import { FaTimes, FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { VscCircuitBoard } from "react-icons/vsc";
import { AiOutlineSend, AiOutlineRotateLeft } from "react-icons/ai";
import { useState } from "react";
import { loadFromLocalStorage } from "../../utils/seller/manageLocalStorage";

const Navigation = ({ toggleF, toggle }) => {
  const navigate = useNavigate();
  const logOut = () => {
    toggleF(!toggle);
  };

  const sellerLogout = () => {
    navigate("/login");
    AuthService.logout();
  };

  const user = loadFromLocalStorage();

  const pathName = useLocation();
  const [prodCollap, setProdColl] = useState(false);
  const [refundCollap, setRefundProdColl] = useState(false);

  const collapse = (name) => {
    if (name === "products") {
      setProdColl(!prodCollap);
      setRefundProdColl(false);
    }
    if (name === "refund") {
      setRefundProdColl(!refundCollap);
      setProdColl(false);
    }
  };

  const closeNav = () => {
    toggleF(!toggle);
  };

  const { pathname } = useLocation();
  const firstPath = pathname.split("/")[2];
  const [activeMenu, setActiveMenu] = useState(firstPath || "");

  const handleDropdown = (type) => {
    setActiveMenu(type);
  };

  // useEffect(() => {
  //   if (pathName.pathname.split("/")[2] == "products") {
  //     setProdColl(true);
  //     setActiveMenu(pathName.pathname.split("/")[3]);
  //   }

  //   const firstPath = pathname.split("/")[2];
  //   if (
  //     firstPath == "approved-refund-request" ||
  //     firstPath == "received-refund-request"
  //   ) {
  //     setRefundProdColl(true);
  //     setActiveMenu(firstPath);
  //   }
  // }, [pathName]);

  return (
    <Fragment>
      <div className={navigationStyle.nav_links}>
        <div className={navigationStyle.seller_info}>
          <h1 className="">
            <button onClick={() => logOut()}>
              <BiLogOutCircle />
            </button>
            <span>
              <AiOutlineUser />
            </span>
            <button onClick={() => toggleF(!toggle)}>
              <FaTimes />
            </button>
          </h1>

          <h5>
            {user?.user?.shop_name}
            <IoMdCheckmarkCircleOutline
              className={navigationStyle.icon_green}
            />
          </h5>
        </div>

        <ul className="ps-0">
          <li
            onClick={() => handleDropdown("dashboard")}
            className={` ${
              activeMenu == "dashboard" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller">
              <AiOutlineHome className={` ${navigationStyle.icon_green}`} />
              <span className="ps-1"> Dashboard</span>
            </NavLink>
          </li>
          <li>
            <div onClick={() => collapse("products")}>
              <RiVipDiamondLine className={navigationStyle.icon_green} />
              <span className="ps-2 ">Products</span>
              <span className={navigationStyle.right}>
                <AiOutlineDown
                  onClick={() => collapse("products")}
                  className={`${navigationStyle.icon_green}`}
                />
              </span>
            </div>
            <div
              className={
                prodCollap ? navigationStyle.openProduct : navigationStyle.close
              }
            >
              <ul className={navigationStyle.insideNavUl}>
                <li
                  onClick={() => handleDropdown("products")}
                  className={` mt-2 ${
                    activeMenu == "all" ? navigationStyle.active : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/all"
                  >
                    <RiVipDiamondLine className={navigationStyle.icon_green} />
                    <span className="ps-2">All Products</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => handleDropdown("digital-products")}
                  className={`  ${
                    activeMenu == "digital" ? navigationStyle.active : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/digital/all"
                  >
                    <VscCircuitBoard className={navigationStyle.icon_green} />
                    <span className="ps-2">Digital Products</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => handleDropdown("bulk-upload")}
                  className={`  ${
                    activeMenu == "bulk-upload" ? navigationStyle.active : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/bulk-upload"
                  >
                    <AiOutlineArrowUp className={navigationStyle.icon_green} />
                    <span className="ps-2">Product Bulk Upload</span>
                  </NavLink>
                </li>
                {/* <li
                  onClick={() => handleDropdown("categories")}
                  className={`  ${activeMenu == "categories" ? navigationStyle.active : ""} `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/categories"
                  >
                    <IoIosStarHalf className={navigationStyle.icon_green} />
                    <span className="ps-2">Category</span>
                  </NavLink>
                </li>
								<li
                  onClick={() => handleDropdown("attributes")}
                  className={`  ${activeMenu == "attributes" ? navigationStyle.active : ""} `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/attributes"
                  >
                    <IoIosStarHalf className={navigationStyle.icon_green} />
                    <span className="ps-2">Attributes</span>
                  </NavLink>
                </li> */}
                <li
                  onClick={() => handleDropdown("wishlist")}
                  className={`  ${
                    activeMenu == "wishlist" ? navigationStyle.active : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/wishlist"
                  >
                    <MdOutlineFavoriteBorder
                      className={navigationStyle.icon_green}
                    />
                    <span className="ps-2">Wishlist</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => handleDropdown("reviews")}
                  className={`  ${
                    activeMenu == "reviews" ? navigationStyle.active : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/products/reviews"
                  >
                    <IoIosStarHalf className={navigationStyle.icon_green} />
                    <span className="ps-2">Product Reviews</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* </NavLink> */}
          </li>
          <li
            onClick={() => handleDropdown("orders")}
            className={`  ${
              activeMenu == "orders" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/orders">
              <HiOutlineTicket className={navigationStyle.icon_green} />
              <span className="ps-2">Orders</span>
            </NavLink>
          </li>
          {/* refund dropdown start */}
          <li>
            <div onClick={() => collapse("refund")}>
              <BsArrowCounterclockwise className={navigationStyle.icon_green} />
              <span className="ps-2 ">Refunds</span>
              <span
                onClick={() => collapse("refund")}
                className={navigationStyle.right}
              >
                <AiOutlineDown className={`${navigationStyle.icon_green}`} />
              </span>
            </div>
            <div
              className={
                refundCollap
                  ? navigationStyle.openRefund
                  : navigationStyle.close
              }
            >
              <ul className={navigationStyle.insideNavUl}>
                <li
                  onClick={() => handleDropdown("approved-refund-request")}
                  className={` mt-2 ${
                    activeMenu == "approved-refund-request"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/approved-refund-request"
                  >
                    <AiOutlineSend className={navigationStyle.icon_green} />
                    <span className="ps-2">Approved Refund</span>
                  </NavLink>
                </li>

                <li
                  onClick={() => handleDropdown("received-refund-request")}
                  className={`  ${
                    activeMenu == "received-refund-request"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <NavLink
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/seller/received-refund-request"
                  >
                    <AiOutlineRotateLeft
                      className={navigationStyle.icon_green}
                    />
                    <span className="ps-2">Received Refund Request</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          {/* refund dropdown end */}
          {/* <li
            onClick={() => handleDropdown("customers")}
            className={`  ${
              activeMenu == "customers" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/customers">
              <AiOutlineUser className={navigationStyle.icon_green} />
              <span className="ps-2">Customers</span>
            </NavLink>
          </li> */}
          <li
            onClick={() => handleDropdown("withdraw")}
            className={`  ${
              activeMenu == "withdraw" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/withdraw">
              <FaMoneyBillWave className={navigationStyle.icon_green} />
              <span className="ps-2">Money Withdraw</span>
            </NavLink>
          </li>
          <li
            onClick={() => handleDropdown("commission-history")}
            className={`  ${
              activeMenu == "commission-history" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/commission-history">
              <AiFillFileAdd className={navigationStyle.icon_green} />
              <span className="ps-2">Commission History</span>
            </NavLink>
          </li>
          <li
            onClick={() => handleDropdown("my-wallet")}
            className={`  ${
              activeMenu == "my-wallet" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/my-wallet">
              <BsCurrencyDollar className={navigationStyle.icon_green} />
              <span className="ps-2">My Wallet</span>
            </NavLink>
          </li>
          <li
            onClick={() => handleDropdown("payment-history")}
            className={`  ${
              activeMenu == "payment-history" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/payment-history">
              <GiBackwardTime className={navigationStyle.icon_green} />
              <span className="ps-2">Payment History</span>
            </NavLink>
          </li>
          <li
            onClick={() => handleDropdown("setting")}
            className={`  ${
              activeMenu == "setting" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/setting">
              <FiSettings className={navigationStyle.icon_green} />
              <span className="ps-2">Shop setting</span>
            </NavLink>
          </li>{" "}
          <li
            onClick={() => handleDropdown("manage-profile")}
            className={`  ${
              activeMenu == "manage-profile" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/manage-profile">
              <AiOutlineUser className={navigationStyle.icon_green} />
              <span className="ps-2">Manage profile</span>
            </NavLink>
          </li>
          <li
            onClick={() => handleDropdown("shop-reviews")}
            className={`  ${
              activeMenu == "shop-reviews" ? navigationStyle.active : ""
            } `}
          >
            <NavLink onClick={() => closeNav()} to="/seller/shop-reviews">
              <IoIosStarHalf className={navigationStyle.icon_green} />
              <span className="ps-2">Shop Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={sellerLogout}>
              <BiLogOutCircle className={navigationStyle.icon_green} />
              <span className="ps-2">Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navigation;
