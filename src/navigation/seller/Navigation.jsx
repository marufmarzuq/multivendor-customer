import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
    if (name === "products") setProdColl(!prodCollap);
    if (name === "refund") setRefundProdColl(!refundCollap);
  };

  const closeNav = () => {
    toggleF(!toggle);
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
            <Link onClick={() => closeNav()} to="">
              <AiOutlineHome className={` ${navigationStyle.icon_green}`} />
              <span className="ps-1"> Dashboard</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to="purchase-history">
              <AiFillFileAdd className={navigationStyle.icon_green} />
              <span className="ps-2">Purchase History</span>
            </Link>
          </li>
          {/* refund dropdown start */}
          <li onClick={() => collapse("refund")}>
            <BsArrowCounterclockwise className={navigationStyle.icon_green} />
            <span className="ps-2 ">Refunds</span>
            <span className={navigationStyle.right}>
              <AiOutlineDown className={`${navigationStyle.icon_green}`} />
            </span>
            <div
              className={
                refundCollap
                  ? navigationStyle.openRefund
                  : navigationStyle.close
              }
            >
              <ul className={navigationStyle.insideNavUl}>
                <li className="mt-2">
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

                <li>
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
            <Link onClick={() => closeNav()} to="wishlist">
              <MdOutlineFavoriteBorder className={navigationStyle.icon_green} />
              <span className="ps-2">Wishlist</span>
            </Link>
          </li>
          <li onClick={() => collapse("products")}>
            {/* <Link onClick={() => closeNav()} to=""> */}
            <RiVipDiamondLine className={navigationStyle.icon_green} />
            <span className="ps-2 ">Products</span>
            <span className={navigationStyle.right}>
              <AiOutlineDown className={`${navigationStyle.icon_green}`} />
            </span>
            <div
              className={
                prodCollap ? navigationStyle.open : navigationStyle.close
              }
            >
              <ul className={navigationStyle.insideNavUl}>
                <li className={` mt-2`}>
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="purchase-history"
                  >
                    <AiFillFileAdd className={navigationStyle.icon_green} />
                    <span className="ps-2">Purchase History</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="products"
                  >
                    <RiVipDiamondLine className={navigationStyle.icon_green} />
                    <span className="ps-2">Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="products/digital-products"
                  >
                    <RiVipDiamondLine className={navigationStyle.icon_green} />
                    <span className="ps-2">Digital Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={navigationStyle.inside_nav}
                    onClick={() => closeNav()}
                    to="products/bulk-upload"
                  >
                    <AiOutlineArrowUp className={navigationStyle.icon_green} />
                    <span className="ps-2">Product Bulk Upload</span>
                  </Link>
                </li>

                <li>
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
          <li>
            <Link onClick={() => closeNav()} to="">
              <HiOutlineTicket className={navigationStyle.icon_green} />
              <span className="ps-2">Orders</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to="">
              <FiSettings className={navigationStyle.icon_green} />
              <span className="ps-2">Shop setting</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => closeNav()} to="">
              <GiBackwardTime className={navigationStyle.icon_green} />
              <span className="ps-2">Payment History</span>
            </Link>
          </li>{" "}
          <li>
            <Link onClick={() => closeNav()} to="">
              <FaMoneyBillWave className={navigationStyle.icon_green} />
              <span className="ps-2">Money Withdraw</span>
            </Link>
          </li>{" "}
          <li>
            <Link onClick={() => closeNav()} to="">
              <AiFillFileAdd className={navigationStyle.icon_green} />
              <span className="ps-2">Commission History</span>
            </Link>
          </li>{" "}
          <li>
            <Link onClick={() => closeNav()} to="">
              <BsCurrencyDollar className={navigationStyle.icon_green} />
              <span className="ps-2">My Wallet</span>
            </Link>
          </li>{" "}
          {/* <li>
            <Link onClick={() => closeNav()} to="">
              <TiSupport className={navigationStyle.icon_green} />
              <span className="ps-2">Support Ticket</span>
            </Link>
          </li>{" "} */}
          <li>
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
