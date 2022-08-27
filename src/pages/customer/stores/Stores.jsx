import StoreList from "./components/storesCom/StoreList";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
const Checkout = () => {
  return (
    <div className="wrapper">
      <BreadCumb data={"Stores"} />
      <div className="container">
        <StoreList />
      </div>
    </div>
  );
};

export default Checkout;
