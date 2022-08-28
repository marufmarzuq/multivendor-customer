import BreadCumb from "../../../common/breadcumb/BreadCumb";
import SortFilter from "./components/storesCom/SortFilter";
import StoreList from "./components/storesCom/StoreList";

const Checkout = () => {
  return (
    <div className="wrapper">
      <BreadCumb data={"Stores"} />
      <div className="container">
        <SortFilter />
        <StoreList />
      </div>
    </div>
  );
};

export default Checkout;
