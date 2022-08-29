import React from "react";

const SellerRequestForm = () => {
  return (
		<div className="text-center">
			<h2>Be a Seller</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name"  placeholder="Enter your name"/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" placeholder="Enter your email"/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" placeholder="Enter your password"/>
			</div>
			<div>
				<label htmlFor="confirm-password">Confirm Password</label>
				<input type="password" name="confirm-password" id="confirm-password" placeholder="Password Confirmation"/>
			</div>
			<div>
				<label htmlFor="shop-name">Shop Name</label>
				<input type="text" name="shop-name" id="shop-name" placeholder="Enter your shop name"/>
			</div>
			<div>
				<label htmlFor="shop-url">Shop URL</label>
				<input type="url" name="shop-url" id="shop-url" placeholder="Enter your shop URL"/>
			</div>
			<div>
				<button type="button" name="button">Register</button>
			</div>
		</div>
  );
};

export default SellerRequestForm;