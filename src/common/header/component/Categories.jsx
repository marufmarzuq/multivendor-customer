import { NavLink } from "react-router-dom";
import {AiOutlineBars} from "react-icons/ai";

const Categories = ({categories}) => {
  return (
	<div className="d-none d-md-block col-md-4">
		<div className="categories">
			<div className="dropdown-button px-0">
				<span className="d-flex align-items-center">
					<AiOutlineBars className="me-2 mt-0" />{" "}
					<span className="mt-1">Categories</span>
				</span>
				<div className="category-list">
					<ul>
						<li className="see-all">
							<NavLink to={`/`}>See All</NavLink>
						</li>
						{categories.length > 0 &&
						categories.map((item,key)=>{
						return(
							<li key={key}>
							<NavLink to={`/${item.slug}`}>
								<img className="icon_size" src={item.icon}/>{item.name}
							</NavLink>
							{item?.sub_category.map((sub,i)=>{
								return(
									<ul key={i}>
										<li>
											<NavLink to={`/${sub.slug}`}>{sub.name}</NavLink>
										</li>
									</ul>
								)
								})}
						</li>
						)
						}) }
					</ul>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Categories;
