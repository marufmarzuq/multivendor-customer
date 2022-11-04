import { BsStarFill } from "react-icons/bs";
const ReviewForm = ({reviewStyle}) => {
  return (
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
  );
};
export default ReviewForm;
