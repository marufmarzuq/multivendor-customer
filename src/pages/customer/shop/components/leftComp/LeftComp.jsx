import { BiSearch } from "react-icons/bi";

const LeftComp = () => {
  return (
	<div className="shop-sidebar">
		<div className="sidebar-row search-wrap">
			<form action="" className="search-form">
				<input
					type="text"
					className="sidebar-input"
					placeholder="Search Products"
				/>
				<button type="submit" className="search-button">
					<BiSearch />
				</button>
			</form>
		</div>
		<div className="sidebar-row categories-wrap">
			<h4 className="sidebar-label">Categories</h4>
			<input
				type="text"
				className="sidebar-input"
				placeholder="T-Shirt"
			/>
		</div>
		<div className="sidebar-row reviews-wrap">
			<h4 className="sidebar-label">Customer Reviews</h4>
			<div className="progress-wrap">
				<h4 className="progress-label">5 Star</h4>
				<div className="progress">
					<div
						className="progress-bar"
						role="progressbar"
						style={{ width: "25%" }}
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					></div>
				</div>
				<h4 className="progress-label">25%</h4>
			</div>
		</div>
		<div className="sidebar-row brands-wrap">
			<h4 className="sidebar-label">Brands</h4>
			<input
				type="text"
				className="sidebar-input"
				placeholder="Polo"
			/>
		</div>
		<div className="sidebar-row radio-wrap">
			<h4 className="sidebar-label">Size</h4>
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
		<div className="sidebar-row radio-wrap color-wrap">
			<h4 className="sidebar-label">Color</h4>
			<div className="radio-item">
				<input type="radio" name="" value="L" id="red" />
				<label
					htmlFor="red"
					style={{ backgroundColor: "red" }}
				></label>
			</div>
			<div className="radio-item">
				<input type="radio" name="" value="L" id="green" />
				<label
					htmlFor="green"
					style={{ backgroundColor: "green" }}
				></label>
			</div>
			<div className="radio-item">
				<input type="radio" name="" value="L" id="blue" />
				<label
					htmlFor="blue"
					style={{ backgroundColor: "blue" }}
				></label>
			</div>
		</div>
	</div>
  );
};

export default LeftComp;
