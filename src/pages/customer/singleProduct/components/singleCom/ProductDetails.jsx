import React from "react";
import "./singleCom.css";

const ProductDetails = () => {
  return (
		<div class="col-12 col-md-6 mb-md-2">
			<div class="product-details-container">
					<h2 class="product-title">Travel Laptop Backpack</h2>
					<div class="ratings">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<span>(2 reviews)</span>
					</div>
					<div class="price">
							<span class="sale">$ 200</span>
							<span class="del">$ 180</span>
					</div>
					<p class="excerpt">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
					</p>
					<div class="product-meta d-block">
							<span class="label">Availability :</span>
							<span class="content">In Stock</span>
					</div>
					<div class="product-meta d-block">
							<span class="label">Sold By : </span>
							<span class="content">One Mart</span>
							<button class="btn btn-primary search-button">Message Seller</button>
					</div>
					<div class="product-meta d-flex align-items-center clear-both">
							<span class="label">Color : </span>
							<div class="radio-item">
									<span class="color" style="background-color: blue;"></span>
									<span class="size">XL</span>
							</div>
					</div>
					<div class="product-meta radio-wrap color-wrap d-inline-flex align-items-center">
							<span class="label">Color : </span>
							<div class="radio-item">
									<input type="radio" name="" value="L" id="red">
									<label for="red" style="background-color: red"></label>
							</div>
							<div class="radio-item">
									<input type="radio" name="" value="L" id="green">
									<label for="green" style="background-color: green"></label>
							</div>
							<div class="radio-item">
									<input type="radio" name="" value="L" id="blue">
									<label for="blue" style="background-color: blue"></label>
							</div>
					</div>
					<div class="product-meta radio-wrap d-inline-flex align-items-center">
							<span class="label">Size : </span>
							<div class="radio-item">
									<input type="radio" name="" value="L" id="L">
									<label for="L">L</label>
							</div>
							<div class="radio-item">
									<input type="radio" name="" value="XL" id="XL">
									<label for="XL">XL</label>
							</div>
							<div class="radio-item">
									<input type="radio" name="" value="M" id="M">
									<label for="M">M</label>
							</div>
					</div>
					<div class="cart-buttons-wrap">
							<button class="btn btn-primary">Add to Cart</button>
							<button class="btn btn-primary">Buy Now</button>
					</div>
					<div class="wishlist-compare-wrap">
							<button class="btn btn-link">Add to Cart</button>
							<button class="btn btn-link">Buy Now</button>
					</div>
					<div class="social-share-wrap">
							<p>Share: </p>
							<a href="#" target="_blank">
									<i class="fab fa-twitter"></i>
							</a>
							<a href="#" target="_blank">
									<i class="fab fa-linkedin"></i>
							</a>
							<a href="#" target="_blank">
									<i class="fab fa-instagram"></i>
							</a>
					</div>
			</div>
		</div>
  );
};

export default ProductDetails;
