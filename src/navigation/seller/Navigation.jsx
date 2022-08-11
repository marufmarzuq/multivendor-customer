import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import navigationStyle from "./navigation.module.css";

import {
  AiOutlineHome,
  AiFillFileAdd,
  AiOutlineUser,
  AiOutlineArrowUp,
} from "react-icons/ai";

import { IoMdCheckmarkCircleOutline, IoIosStarHalf } from "react-icons/io";
import { HiOutlineTicket } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GiNotebook, GiBackwardTime } from "react-icons/gi";
import { RiVipDiamondLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsArrowCounterclockwise, BsCurrencyDollar } from "react-icons/bs";
import { FaTimes, FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from "react";

const Navigation = ({ toggleF, toggle }) => {
  const logOut = () => {
    toggleF(!toggle);
    console.log("signout ");
  };

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
  const firstPath = pathname.split("/")[1];
  const [activeMenu, setActiveMenu] = useState(firstPath || "");
  console.log(activeMenu);
  const handleDropdown = (type) => {
    // if (activeMenu === type) {
    //   setActiveMenu("");
    // } else {
    setActiveMenu(type);
    // }
  };

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
            Mr. Seller
            <IoMdCheckmarkCircleOutline
              className={navigationStyle.icon_green}
            />
          </h5>
        </div>

        <ul className="ps-0">

          <li>
            <Link onClick={() => closeNav()} to="/">
         <li
            onClick={() => handleDropdown("dashboard")}
            className={` ${
              activeMenu == "dashboard" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">

              <AiOutlineHome className={` ${navigationStyle.icon_green}`} />
              <span className="ps-1"> Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link onClick={() => closeNav()} to="purchase-history">
              <AiFillFileAdd className={navigationStyle.icon_green} />
              <span className="ps-2">Purchase History</span>
            </Link>
          </li> */}
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
                  onClick={() => handleDropdown("sent-refund-request")}
                  className={` mt-2 ${
                    activeMenu == "sent-refund-request"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="sent-refund-request"
                  >
                    <BsArrowCounterclockwise
                      className={navigationStyle.icon_green}
                    />
                    <span className="ps-2">Sent Refund Request</span>
                  </Link>
                </li>

                <li
                  onClick={() => handleDropdown("received-refund-request")}
                  className={` mt-2 ${
                    activeMenu == "received-refund-request"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to=""
                  >
                    <BsArrowCounterclockwise
                      className={navigationStyle.icon_green}
                    />
                    <span className="ps-2">Received Refund Request</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* refund dropdown end */}
          <li>
            {/* <Link onClick={() => closeNav()} to=""> */}
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
                {/* <li className={` mt-2`}>
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="purchase-history"
                  >
                    <AiFillFileAdd className={navigationStyle.icon_green} />
                    <span className="ps-2">Purchase History</span>
                  </Link>
                </li> */}
                <li
                  onClick={() => handleDropdown("products")}
                  className={` mt-2 ${
                    activeMenu == "products" ? navigationStyle.active : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/products"
                  >
                    <RiVipDiamondLine className={navigationStyle.icon_green} />
                    <span className="ps-2">All Products</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleDropdown("digital-products")}
                  className={`  ${
                    activeMenu == "digital-products"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/digital-products"
                  >
                    <RiVipDiamondLine className={navigationStyle.icon_green} />
                    <span className="ps-2">Digital Products</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleDropdown("bulk-upload")}
                  className={`  ${
                    activeMenu == "bulk-upload" ? navigationStyle.active : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="/bulk-upload"
                  >
                    <AiOutlineArrowUp className={navigationStyle.icon_green} />
                    <span className="ps-2">Product Bulk Upload</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleDropdown("wishlist")}
                  className={`  ${
                    activeMenu == "wishlist" ? navigationStyle.active : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="wishlist"
                  >
                    <MdOutlineFavoriteBorder
                      className={navigationStyle.icon_green}
                    />
                    <span className="ps-2">Wishlist</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleDropdown("product-reviews")}
                  className={`  ${
                    activeMenu == "product-reviews"
                      ? navigationStyle.active
                      : ""
                  } `}
                >
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to=""
                  >
                    <IoIosStarHalf className={navigationStyle.icon_green} />
                    <span className="ps-2">Product Reviews</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* </Link> */}
          </li>
          {/* <li>
            <Link onClick={() => closeNav()} to="">
              <GiNotebook className={navigationStyle.icon_green} />
              <span className="ps-2">POS Manager</span>
            </Link>
          </li> */}
          <li
            onClick={() => handleDropdown("orders")}
            className={`  ${
              activeMenu == "orders" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="orders">
              <HiOutlineTicket className={navigationStyle.icon_green} />
              <span className="ps-2">Orders</span>
            </Link>
          </li>
          <li
            onClick={() => handleDropdown("setting")}
            className={`  ${
              activeMenu == "setting" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <FiSettings className={navigationStyle.icon_green} />
              <span className="ps-2">Shop setting</span>
            </Link>
          </li>
          <li
            onClick={() => handleDropdown("payment-history")}
            className={`  ${
              activeMenu == "payment-history" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <GiBackwardTime className={navigationStyle.icon_green} />
              <span className="ps-2">Payment History</span>
            </Link>
          </li>{" "}
          <li
            onClick={() => handleDropdown("money-withdraw")}
            className={`  ${
              activeMenu == "money-withdraw" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <FaMoneyBillWave className={navigationStyle.icon_green} />
              <span className="ps-2">Money Withdraw</span>
            </Link>
          </li>{" "}
          <li
            onClick={() => handleDropdown("commision-history")}
            className={`  ${
              activeMenu == "commision-history" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <AiFillFileAdd className={navigationStyle.icon_green} />
              <span className="ps-2">Commission History</span>
            </Link>
          </li>{" "}
          <li
            onClick={() => handleDropdown("wallet")}
            className={`  ${
              activeMenu == "wallet" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <BsCurrencyDollar className={navigationStyle.icon_green} />
              <span className="ps-2">My Wallet</span>
            </Link>
          </li>{" "}
     
          <li
            onClick={() => handleDropdown("profile")}
            className={`  ${
              activeMenu == "profile" ? navigationStyle.active : ""
            } `}
          >
            <Link onClick={() => closeNav()} to="">
              <AiOutlineUser className={navigationStyle.icon_green} />
              <span className="ps-2">Manage profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navigation;
