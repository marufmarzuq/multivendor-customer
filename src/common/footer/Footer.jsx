import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import "./footer.css";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row footer-top align-items-center">
          <div class="col-md-5">
            <div class="footer-logo">
              <a href="#">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-md-7">
            <div class="newsletter">
              <h3>Newsletter</h3>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control search-text"
                  placeholder="Email Address"
                />
                <button type="button" class="btn btn-primary search-button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer-main">
          <div class="col-12 col-sm-5 col-lg-4 my-2 text-center text-sm-start">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>House -28, Road-7A, Dhanmondi, Dhaka.</p>
            <ul class="vertical-menu">
              <li>
                <span>01234567890, 25678945</span>
              </li>
              <li>
                <BiUser />
                <span>info@sakira.com</span>
              </li>
              <li>
                <BiUser />
                <span>infosakira.com</span>
              </li>
            </ul>
            <ul class="social-buttons">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 offset-sm-1 col-lg-2 offset-lg-1  my-2 text-center text-sm-start">
            <h3 class="footer-title text-center text-sm-start">About Us</h3>
            <ul class="vertical-menu">
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
                <a href="#">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-5 col-lg-2 offset-lg-1 my-2 text-center text-sm-start">
            <h3 class="footer-title text-center text-sm-start">Products</h3>
            <ul class="vertical-menu">
              <li>
                <a href="#">
                  <span>Womens Wear</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Mens Wear</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Kids Wear</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Electronics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Gadgets</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Furniture</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Lightings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Computer</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 offset-sm-1 col-lg-2 offset-lg-0 my-2 text-center text-sm-start">
            <h3 class="footer-title text-center text-sm-start">My Account</h3>
            <ul class="vertical-menu">
              <li>
                <a href="#">
                  <span>My Account</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Order History</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Newsletter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid footer-bottom">
        <div class="row footer-copyright">
          <p>Copyright Sakira 2021. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
