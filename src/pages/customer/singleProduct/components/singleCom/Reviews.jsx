import { FaStar } from "react-icons/fa";
import reviewStyle from "./relatedProduct.module.css";
const Reviews = () => {
  return (
    <div>
      <div className="text-center my-4 mt-5">
        <h3>Customer Reviews</h3>
      </div>

      <div className={reviewStyle.reviews}>
        <div className={reviewStyle.reviewContainer}>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>4.7 out of 5</span>
          <div className="my-2">950 global reviews</div>
          <div className={reviewStyle.progressBar}>
            <div className="">5 Starts</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>80%</div>
          </div>

          <div className={reviewStyle.progressBar}>
            <div className="">4 Starts</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>20%</div>
          </div>

          <div className={reviewStyle.progressBar}>
            <div className="">3 Starts</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "15%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>15%</div>
          </div>

          <div className={reviewStyle.progressBar}>
            <div className="">2 Starts</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "5%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>5%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
