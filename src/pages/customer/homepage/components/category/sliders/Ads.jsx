
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Ads = ({bannerOne,loading}) => {
  return (
		<div className="col-12 col-xs-3 col-md-3 my-2">
		{
			loading ?
			(
				<SkeletonTheme height={50}>
					<p><Skeleton count={5} /></p>
				</SkeletonTheme>
			) :
			(
				<div className="category-promotion" style={{
					backgroundImage: `url(${bannerOne?.banner})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover'
				}}>
					<h4>{bannerOne?.title}</h4>
					<NavLink to={`/${bannerOne?.link}`} className="button-outline">
						Shop Now
					</NavLink>
				</div>
			)
		}
		</div>
  );
};

export default Ads;
