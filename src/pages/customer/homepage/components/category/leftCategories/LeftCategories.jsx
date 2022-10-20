
import { NavLink } from "react-router-dom";
import SimpleLoading from "../../../../../../common/loading/SimpleLoading";
import { BsBagDash, BsFlower2 } from "react-icons/bs";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { BiBasketball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";

const LeftCategories = ({pinnedCategories}) => {
  return (
		<div className="col-12 col-xs-4 col-md-3 col-lg-4 ">
			<div className="category-list pt-3 pb-2">
				<ul
					style={{
						marginBottom: "10px",
					}}>
					<li>
						<a href="#">
							<i>
								{" "}
								<BsFlower2 />
							</i>
							Beauty
						</a>
					</li>
					<li>
						<a href="#">
							<i>
								<GiFruitBowl />
							</i>
							Groceries
						</a>

						<ul>
							<li>
								<a href="#">Men</a>
							</li>
							<li>
								<a href="#">Women</a>
							</li>
							<li>
								<a href="#">Kids</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">
							<i>
								<GiClothes />
							</i>
							Clothing
						</a>
					</li>
					<li>
						<a href="#">
							<i>
								<BsBagDash />
							</i>
							Bags & Shoes
						</a>
					</li>
					<li>
						<a href="#">
							<i>
								<BiBasketball />
							</i>
							Outdoor Fun & Sports
						</a>
					</li>
					<li>
						<a href="#">
							<i>
								<AiFillCar />
							</i>
							Automobile & Motorcycles
						</a>
					</li>
					<li>
						<a href="#">
							<i>
								<FaBaby />
							</i>
							Toys & Kids
						</a>
					</li>
				</ul>
			</div>
		</div>
  );
};

export default LeftCategories;
