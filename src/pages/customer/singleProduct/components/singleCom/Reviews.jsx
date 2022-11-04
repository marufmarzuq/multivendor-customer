import { AiOutlineStar } from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import reviewStyle from "./relatedProduct.module.css";
import ReviewForm from "./ReviewForm";
const Reviews = ({loading,singleProduct}) => {
	console.log(singleProduct);
  return (
    <div>
      <div className=" mt-5 ">
        <h4>Customer Reviews</h4>
      </div>
      <section>
        <div className={reviewStyle.reviews}>
          <div className={reviewStyle.reviewContainer}>
            <div className={reviewStyle.stars}>
              <span>
                <BsStarFill />
              </span>
              <span>
                <BsStarFill />
              </span>
              <span>
                <BsStarFill />
              </span>
              <span>
                <BsStarFill />
              </span>
              <span>
                <BsStarHalf />
              </span>

              <p className="ps-3">4.7 out of 5</p>
            </div>

            <div className="my-2">
              <span>950 global reviews</span>
            </div>
            <div className={reviewStyle.progressBar}>
              <div className="">5 Starts</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-center">80%</div>
            </div>

            <div className={reviewStyle.progressBar}>
              <div className="">4 Starts</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-center">20%</div>
            </div>

            <div className={reviewStyle.progressBar}>
              <div className="">3 Starts</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "15%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-center">15%</div>
            </div>

            <div className={reviewStyle.progressBar}>
              <div className="">2 Starts</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "5%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-center">5%</div>
            </div>
          </div>
        </div>
      </section>

      <section>
		{!loading &&
			singleProduct?.reviews?.reviews?.map((review, index) => {
				return (
					<div className={reviewStyle.review} key={index}>
					<div className={reviewStyle.image}>
					  <img
						src={review.user_image}
						alt={review.name}
					  />
					</div>
		  
					<div>
					  <h5>{review.name}</h5>
					  <h6>{review.created_at}</h6>
					  <p>{review.comment}</p>
					</div>
		  
					<div className={`text-end ${reviewStyle.stars}`}>
					  <span>
						<BsStarFill />
					  </span>
					  <span>
						<BsStarFill />
					  </span>
					  <span>
						<BsStarFill />
					  </span>
					  <span>
						<BsStarFill />
					  </span>
					  <span>
						<BsStarHalf />
					  </span>
					</div>
				  </div>
				);
			})}
      </section>

	  {/* Review Form */}
      <section>
        <ReviewForm reviewStyle={reviewStyle}/>
      </section>
    </div>
  );
};
export default Reviews;
