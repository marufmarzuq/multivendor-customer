import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./addSection.css";

const AddSection = ({bannerTwo,loading}) => {
  return (
    <section className="ads my-4">
      <div className="container">
			{
			loading ?
			(
				<SkeletonTheme height={50}>
					<p><Skeleton count={5} /></p>
				</SkeletonTheme>
			) :
			(
				<div className="row ads-wrapper" style={{
					backgroundImage: `url(${bannerTwo?.banner})`,
				}}>
          <div className="col-12 col-md-6 offset-md-1 text-center">
            <h2 className="ad-header">{bannerTwo?.title}</h2>
            <NavLink to={`/${bannerTwo?.link}`} className="button-outline">
							Shop Now
						</NavLink>
          </div>
        </div>
			)
		}
      </div>
    </section>
  );
};

export default AddSection;
