import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	AiOutlineBars,
  } from "react-icons/ai";
  import {
	FaTimes,
  } from "react-icons/fa";
import Categories from "../component/Categories";
 
const HeaderMenu = ({categories}) => {
	const [mobileNav, setMobileNav] = useState(false);

  return (
	<div className="header-menu">
	<div className="container">
		<div className="row align-items-center">
					<Categories categories={categories}/>
		<div className="col-8  d-flex align-items-center">
			<div className="shop-menu">
			<ul
				className={`${
				mobileNav
					? `d-flex flex-column flex-md-row side-navigation mobile-menu-open`
					: `d-flex flex-column flex-md-row side-navigation`
				}`}
			>
				<button
				// href="javascript:void(0)"

				className="closebtn btn d-block d-md-none"
				onClick={() => setMobileNav(!mobileNav)}
				>
				<FaTimes />
				</button>

				<li>
				<NavLink to="/">Home</NavLink>
				</li>
				<li>
				<NavLink to="/stores">Stores</NavLink>
				</li>
				<li>
				<NavLink to="/shop">Shop</NavLink>
				</li>
				<li>
				<NavLink to="/cart">Cart</NavLink>
				</li>
				<li>
				<NavLink to="/blog">Blog</NavLink>
				</li>
				<li>
				<NavLink to="/checkout">Checkout</NavLink>
				</li>
			</ul>
			<span
				className="mobile-nav-open d-block d-md-none"
				onClick={() => setMobileNav(!mobileNav)}
			>
				<AiOutlineBars />
			</span>
			</div>
		</div>
		</div>
	</div>
	</div>
  );
};

export default HeaderMenu;
