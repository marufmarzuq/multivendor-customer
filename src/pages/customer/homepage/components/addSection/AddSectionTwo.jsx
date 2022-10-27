import { Fragment } from "react";
import "./addSection.css";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AddSectionTwo = ({bannerThree,bannerFour,loading}) => {
  return (
    <section className="ads my-4">
      <div className="container">
        <div className="row">
					{
						loading ?
						(
							<SkeletonTheme height={50}>
								<p><Skeleton count={5} /></p>
							</SkeletonTheme>
						) :
						(
							<Fragment>
							<div className="col-12 col-md-6 text-center">
								<div className="ads-wrapper" style={{
									backgroundImage: `url(${bannerThree?.banner})`,
								}}>
									<h2 className="ad-header">{bannerThree?.name}</h2>
									<NavLink to={`/${bannerThree?.link}`} className="button-outline">
										Shop Now
									</NavLink>
								</div>
							</div>
							<div className="col-12 col-md-6 text-center">
								<div className="ads-wrapper" style={{
									backgroundImage: `url(${bannerFour?.banner})`,
								}}>
									<h2 className="ad-header">{bannerFour?.name}</h2>
									<NavLink to={`/${bannerFour?.link}`} className="button-outline">
										Shop Now
									</NavLink>
								</div>
							</div>
							</Fragment>
						)
					}
        </div>
      </div>
    </section>
  );
};

export default AddSectionTwo;
