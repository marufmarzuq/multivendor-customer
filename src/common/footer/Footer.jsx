import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/index";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewsLetter from "./newsletter/NewsLetter";

const Footer = ({ footerData, user }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-top align-items-center">
          <div className="col-md-5">
            <div className="footer-logo">
              <a href="#">
                <img
                  src={footerData.footer_logo ? footerData.footer_logo : ""}
                  alt="MARKUTOS"
                />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <NewsLetter />
          </div>
        </div>
        <div className="row footer-main">
          <div className="col-12 col-sm-5 col-lg-4 my-2 text-center text-sm-start">
            <p>
              {footerData.footer_about_text ? footerData.footer_about_text : ""}
            </p>
            <p>{footerData.address ? footerData.address : ""}</p>
            <ul className="vertical-menu">
              <li>{footerData.phone ? footerData.phone : ""}</li>
              <li>
                <BiUser />
                <span>{footerData.email ? footerData.email : ""}</span>
              </li>
            </ul>
            <ul className="social-buttons">
              <li>
                <a href={footerData.facebook ? footerData.facebook : "#"}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={footerData.twitter ? footerData.twitter : "#"}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={footerData.linkedin ? footerData.linkedin : "#"}>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1 col-lg-2 offset-lg-1  my-2 text-center text-sm-start">
            <h3 className="footer-title text-center text-sm-start">About Us</h3>
            <ul className="vertical-menu">
              <li>
                <a href="#">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Delivery Information</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Terms & Conditions</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Brands</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Site map</span>
                </a>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-5 col-lg-2 offset-lg-1 my-2 text-center text-sm-start">
            <h3 className="footer-title text-center text-sm-start">Products</h3>
            <ul className="vertical-menu">
              {footerData?.products?.length > 0 ? (
                footerData?.products.map((item, key) => {
                  return (
                    <li key={key}>
                      <NavLink to={`/${item.slug}`}>
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  );
                })
              ) : (
                <SkeletonTheme height={50}>
                  <p>
                    <Skeleton count={5} />
                  </p>
                </SkeletonTheme>
              )}
            </ul>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1 col-lg-2 offset-lg-0 my-2 text-center text-sm-start">
            <h3 className="footer-title text-center text-sm-start">
              My Account
            </h3>
            <ul className="vertical-menu">
              <li>
                <NavLink to={user ? `/dashboard` : `/login`}>
                  <span>My Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={user ? `/dashboard/orders` : `login`}>
                  <span>Order History</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/wishlist`}>
                  <span>Wishlist</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row footer-copyright">
          <p>
            {footerData.copyright_text
              ? footerData.copyright_text
              : "Copyright MARKUTOS 2022. All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
