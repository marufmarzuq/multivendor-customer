import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaStar, FaTwitter } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosGitCompare } from "react-icons/io";
import { useParams } from "react-router-dom";
import "./singleCom.css";

const ProductDetails = () => {
  return (
    <div className="col-12 mb-md-2">
      <div className="product-details-container">
        <h2 className="product-title">Laptop Backpack</h2>
        <div className="ratings">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="ms-2">(2 reviews)</span>
        </div>
        <div
          style={{
            marginTop: "-10px",
          }}
          className="price"
        >
          <span className="sale">$ 200</span>
          <span className="del ms-2">$ 180</span>
        </div>
        <p className="excerpt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <div className="product-meta d-block">
          <span className="label me-1">Availability :</span>
          <span className="content">In Stock</span>
        </div>
        <div className="product-meta d-flex align-items-center">
          <div className="d-block">
            <span className="label me-1">Sold By : </span>
            <span className="content me-2 me-md-0">One Mart</span>
          </div>
          <div>
            <button className="btn ms-0 ms-md-5 btn-primary search-button">
              <AiOutlineMessage className="me-1" /> Message Seller
            </button>
          </div>
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
            <label htmlFor="red" style={{ backgroundColor: "red" }}></label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="green" />
            <label htmlFor="green" style={{ backgroundColor: "green" }}></label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="blue" />
            <label htmlFor="blue" style={{ backgroundColor: "blue" }}></label>
          </div>
        </div>
        <div className="product-meta radio-wrap d-inline-flex align-items-center">
          <span className="label">Size : </span>
          <div className="radio-item">
            <input type="radio" name="" value="L" id="L" />
            <label htmlFor="L">L</label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="XL" id="XL" />
            <label htmlFor="XL">XL</label>
          </div>
          <div className="radio-item">
            <input type="radio" name="" value="M" id="M" />
            <label htmlFor="M">M</label>
          </div>
        </div>
        <div className="cart-buttons-wrap">
          <button className="btn btn-primary ">
            <AiOutlineShoppingCart className="me-1" />{" "}
            <small>Add to Cart</small>
          </button>
          <button className="btn btn-primary">
            <BiShoppingBag className="me-1" /> <small>Buy Now</small>
          </button>
        </div>
        <div className="wishlist-compare-wrap">
          <button className="btn me-3 ">
            <IoIosGitCompare />
            Compare
          </button>
          <button className="btn ps-2">
            <AiOutlineHeart /> Wishlist
          </button>
        </div>
        <div className="social-share-wrap">
          <p>Share: </p>
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
