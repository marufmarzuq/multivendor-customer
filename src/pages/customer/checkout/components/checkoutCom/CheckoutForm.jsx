import React from "react";

const CheckoutForm = () => {
  return (
		<div className=''>
			{/* Billing details */}
			<div className="">
				<label htmlFor='name'> Name : </label>
				<input type='text' placeholder='Enter your Name' id='name'/>
			</div>
			<div className='d-flex'>
				<label htmlFor='email'> Email : </label>
				<input type='email' placeholder='Enter your Email' id='email'/>
				<label htmlFor='phone'> Phone : </label>
				<input type='email' placeholder='Enter your Email' id='phone'/>
			</div>
			{/* Payment method */}
			<ul>
				<li><input type='radio'/><span>Cache on delivery (COD)</span></li>
				<li><input type='radio'/><span>Stripe</span></li>
				<li><input type='radio'/><span>Paypal</span></li>
			</ul>
			{/* Order Notes */}
			<div className="">
				<label htmlFor='order_notes'> Order Notes : </label>
				<textarea rows='5' cols='5' placeholder='Notes about your order' id='order_notes'></textarea>
			</div>
		</div>
  );
};

export default CheckoutForm;