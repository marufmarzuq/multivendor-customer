
import GridOne from "../../../../../common/productView/GridOne";
import { BiSearch, BiSquare } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaBalanceScale, FaStar } from "react-icons/fa";
import { product2 } from "../../../../../assets/index";
import { Fragment } from "react";

const RightComp = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
		<div>
			<div className="sort-bar">
				<div className="sort-bar-left">
					<div>
						<button className="">
							<BsGrid3X3Gap />
						</button>
					</div>

					<div>
						<button>
							<AiOutlineBars />
						</button>
					</div>
				</div>
				<div className="sort-bar-right">
					<div className="form-group">
						<label htmlFor="">Sort By:</label>
						<select className="form-control" name="sort" id="sort">
							<option>Default</option>
							<option>Sale</option>
							<option>Price</option>
						</select>

						{/* <div>
							<Select
								styles={customStyles}
								options={options}
						
							/>
						</div> */}
					</div>
				</div>
			</div>
			<div className="row products-wrap shop">
				<section>
					<div className="col-sm-6 col-md-3 mb-3">
						<div className="single-product single-product-min style-1">
							<div className="image-wrap">
								<a href="#">
									<img src={product2} alt="Locket New" />
								</a>
								<div className="buttons-wrap">
									<button>
										<FaBalanceScale />
									</button>
								</div>
								<div className="badges">
									<div className="badge sale-badge">
										<span>10%</span>
									</div>

									<div className="badge tag-badge">
										<span>Sale</span>
									</div>
								</div>
							</div>
							<div className="content-wrap">
								<h3 className="product-title">
									<a href="#">Locket New</a>
								</h3>
								<div className="price">
									<span className="sale">$ 200</span>
									<span className="del">$ 180</span>
								</div>
								<div className="ratings">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
  );
};

export default RightComp;
