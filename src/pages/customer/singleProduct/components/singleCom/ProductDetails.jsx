import React from "react";
import { FaStar } from "react-icons/fa";
import "./singleCom.css";

const ProductDetails = () => {
  return (
    <div className="col-12 mb-md-2">
      <div className="product-details-container">
        <h2 className="product-title">Travel Laptop Backpack</h2>
        <div className="ratings">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>(2 reviews)</span>
        </div>
        <div className="price">
          <span className="sale">$ 200</span>
          <span className="del">$ 180</span>
        </div>
        <p className="excerpt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <div className="product-meta d-block">
          <span className="label">Availability :</span>
          <span className="content">In Stock</span>
        </div>
        <div className="product-meta d-block">
          <span className="label">Sold By : </span>
          <span className="content">One Mart</span>
          <button className="btn ms-2 btn-primary search-button">
            Message Seller
          </button>
        </div>
        <div className="product-meta d-flex align-items-center clear-both">
          <span className="label">Color : </span>
          <div className="radio-item">
            <span className="color" style={{ backgroundColor: "blue" }}></span>
            <span className="size">XL</span>
          </div>
        </div>
        <div className="product-meta radio-wrap color-wrap d-inline-flex align-items-center">
          <span className="label">Color : </span>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="red" />
            <label for="red" style={{ backgroundColor: "red" }}></label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="green" />
            <label for="green" style={{ backgroundColor: "green" }}></label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="blue" />
            <label for="blue" style={{ backgroundColor: "blue" }}></label>
          </div>
        </div>
        <div className="product-meta radio-wrap d-inline-flex align-items-center">
          <span className="label">Size : </span>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="L" />
            <label for="L">L</label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="XL" id="XL" />
            <label for="XL">XL</label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="M" id="M" />
            <label for="M">M</label>
          </div>
        </div>
        <div className="cart-buttons-wrap">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <div className="wishlist-compare-wrap">
          <button className="btn btn-link">Add to Cart</button>
          <button className="btn btn-link">Buy Now</button>
        </div>
        <div className="social-share-wrap">
          <p>Share: </p>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
