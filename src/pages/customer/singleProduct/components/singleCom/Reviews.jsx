import { AiOutlineStar } from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import reviewStyle from "./relatedProduct.module.css";
const Reviews = () => {
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
              <div className="text-center">80%</div>
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
              <div className="text-center">20%</div>
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
              <div className="text-center">15%</div>
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
              <div className="text-center">5%</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={reviewStyle.review}>
          <div className={reviewStyle.image}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
              alt=""
            />
          </div>

          <div>
            <h5> Mr. Trump </h5>
            <h6>October 21, 2021 at 4:50 pm</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              cumque debitis sit amet, expedita doloribus aspernatur commodi
              eveniet tenetur minus? Blanditiis deleniti voluptates at.
              Similique perferendis recusandae laborum corrupti facilis sed,
              placeat ipsam ducimus nihil libero, aut id numquam earum
              blanditiis eos dolores ea dolorem cupiditate unde reiciendis
            </p>
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
      </section>

      <section>
        <div className={reviewStyle.review}>
          <div className={reviewStyle.image}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
              alt=""
            />
          </div>

          <div>
            <h5> Mr. Trump </h5>
            <h6>October 21, 2021 at 4:50 pm</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              cumque debitis sit amet, expedita doloribus aspernatur commodi
              eveniet tenetur minus? Blanditiis deleniti voluptates at.
              Similique perferendis recusandae laborum corrupti facilis sed,
              placeat ipsam ducimus nihil libero, aut id numquam earum
              blanditiis eos dolores ea dolorem cupiditate unde reiciendis
            </p>
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
      </section>

      <section>
        <div className={reviewStyle.addReview}>
          <div>
            <h4>Add Your Review</h4>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className={reviewStyle.stars}>
            <p className="pe-3">Your Rating</p>
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
              <BsStarFill />
            </span>
          </div>

          <div className={reviewStyle.nameEmail}>
            <div>
              <input type="text" placeholder="Name *" />
            </div>
            <div>
              <input type="email" placeholder="Email *" />
            </div>
          </div>

          <div>
            <textarea
              name=""
              id=""
              placeholder="Comment *"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button className="btn btn-primary"> Submit</button>
        </div>
      </section>
    </div>
  );
};
export default Reviews;
