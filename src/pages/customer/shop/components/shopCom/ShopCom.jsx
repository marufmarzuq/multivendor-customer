import { useEffect,useState } from "react";
import "./shopCom.css";
import LeftComp from "../leftComp/LeftComp";
import RightComp from "../rightComp/RightComp";
import { markutosFrontendApi } from "../../../../services/Api/api";

const ShopCom = () => {

  const [loading, setLoading] = useState(false);
  const [shopProduct, setShopProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/shop?per_page=16&search_value=&category=&brand=&rating=&color=&sort_by=&choice_name=&choice_value=`)
      .then((response) => {
        setLoading(false);
				setShopProduct(response?.data.data);
		});
	}, []);
// console.log(shopProduct);
  return (
      <section className="shop-wrap my-4">
        <div className="container">
          <div className="shopContainer">
						<LeftComp/>
						<RightComp/>
          </div>
        </div>
      </section>
  );
};

export default ShopCom;
