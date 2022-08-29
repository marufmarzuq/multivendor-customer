import { FaBalanceScale, FaStar } from "react-icons/fa";
import { product2 } from "../../assets";

const GridOne = () => {
  return (
    <div className="col-sm-6 col-md-3 mb-3">
      <div className="single-product style-1">
        <div className="image-wrap">
          <a href="#">
            <img src={product2} alt="Locket New" />
          </a>
          <div className="buttons-wrap">
            <button>
              <FaBalanceScale />
            </button>
          </div>
          <div className="badges">
            <div className="badge sale-badge">
              <span>10%</span>
            </div>

            <div className="badge tag-badge">
              <span>Sale</span>
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <h3 className="product-title">
            <a href="#">Locket New</a>
          </h3>
          <div className="price">
            <span className="sale">$ 200</span>
            <span className="del">$ 180</span>
          </div>
          <div className="ratings">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridOne;
