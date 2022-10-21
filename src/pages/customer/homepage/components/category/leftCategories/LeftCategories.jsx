
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsBagDash, BsFlower2 } from "react-icons/bs";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { BiBasketball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const LeftCategories = ({categories}) => {
  return (
		<div className="col-12 col-xs-4 col-md-3 col-lg-4 ">
			<div className="category-list pt-3 pb-2">
			{
				categories.length == 0 ? (
						<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
					</SkeletonTheme>
					) :
					(
						<ul
						style={{
							marginBottom: "10px",
						}}>
						{
							categories.map((item,key)=>{
								return(
								<Fragment key={key}>
									<li>
										<NavLink to={`/${item.slug}`}>
											<span><img src={item.icon} alt={item.name} className={'icon_size'} /></span>
											{item.name}
										</NavLink>
										<ul>
										{
										item.sub_category.length > 0 &&
										item.sub_category.map((sub_item,index)=>{
											return (
												<li key={index}>
													<NavLink to={sub_item.slug}>{sub_item.name}</NavLink>
												</li>
											)
										})
										}
										</ul>
									</li>
									</Fragment>
								)
							})
						}
					</ul>
					)
			}
			</div>
		</div>
  );
};

export default LeftCategories;
