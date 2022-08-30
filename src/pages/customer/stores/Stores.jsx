import BreadCumb from "../../../common/breadcumb/BreadCumb";
import SortFilter from "./components/storesCom/SortFilter";
import StoreList from "./components/storesCom/StoreList";
import GridOne from "../../../common/productView/GridOne";
import { useState } from "react";
const Checkout = () => {
  const [layout, setLayout] = useState("grid");
  return (
    <div className="wrapper">
      <BreadCumb data={"Stores"} />
      <div className="container">
        <SortFilter setLayout={setLayout} />
        <StoreList layout={layout} />

        {/* <GridOne /> */}
      </div>
    </div>
  );
};

export default Checkout;
