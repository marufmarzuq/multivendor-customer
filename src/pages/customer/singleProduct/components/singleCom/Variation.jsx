import React, { Fragment } from "react";

const Variation = ({colors,choseOptions}) => {
  return (
		<Fragment>
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
		</Fragment>
  );
};

export default Variation;
