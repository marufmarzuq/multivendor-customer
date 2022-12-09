import reviewStyle from "./relatedProduct.module.css";
import ReviewForm from "./ReviewForm";
import ProgressBar from "./ProgressBar";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const Reviews = ({ loading, singleProduct }) => {
  return (
    <div>
      <div className=" mt-5 ">
        <h4>Customer Reviews</h4>
      </div>
      <section>
        <div className={reviewStyle.reviews}>
          <div className={reviewStyle.reviewContainer}>
            <div className={`d-flex ${reviewStyle.stars}`}>
              {loading == false && (
                <Rating
                  style={{ color: "#0b5ed7", fontSize: "12px" }}
                  initialRating={singleProduct?.reviews?.avg_reviews}
                  readonly
                  emptySymbol={<BsStar className="icon" />}
                  fullSymbol={<BsStarFill className="icon" />}
                />
              )}
              <p className="ps-3">
                {singleProduct?.reviews?.avg_reviews} out of 5
              </p>
            </div>

            <div className="my-2">
              <span>
                {singleProduct?.reviews?.total_reviews} global reviews
              </span>
            </div>
            <ProgressBar
              singleProduct={singleProduct}
              reviewStyle={reviewStyle}
            />
          </div>
        </div>
      </section>

      <section>
        {!loading &&
          singleProduct?.reviews?.reviews?.map((review, index) => {
            return (
              <div className={reviewStyle.review} key={index}>
                <div className={reviewStyle.image}>
                  <img src={review.user_image} alt={review.name} />
                </div>

                <div>
                  <h5>{review.name}</h5>
                  <h6>{review.created_at}</h6>
                  <p>{review.comment}</p>
                </div>

                <div className={`text-end ${reviewStyle.stars}`}>
                  <Rating
                    style={{ color: "#0b5ed7", fontSize: "12px" }}
                    initialRating={parseFloat(review.rating)}
                    readonly
                    emptySymbol={<BsStar className="icon" />}
                    fullSymbol={<BsStarFill className="icon" />}
                  />
                </div>
              </div>
            );
          })}
      </section>

      {/* Review Form */}
      <section>
        <ReviewForm reviewStyle={reviewStyle} productId={singleProduct.id} />
      </section>
    </div>
  );
};
export default Reviews;
