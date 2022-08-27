// translation
import { useTranslation } from "react-i18next";
import PageHeader from "./components/cartCom/PageHeader";
import ProductTable from "./components/cartCom/ProductTable";
import ActionButton from "./components/cartCom/ActionButton";
import Coupon from "./components/cartCom/Coupon";
import CartTotal from "./components/cartCom/CartTotal";
import OrderBump from "./components/cartCom/OrderBump";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import cartStyle from "./cartStyle.module.css";
const Cart = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <BreadCumb data={"Shopping Cart"} />
      <div className="container">
        <PageHeader />
        <ProductTable />
        <ActionButton />
        <hr />
        <div className={`mt-4 ${cartStyle.cuponContainer}`}>
          <div className="">
            <Coupon />
          </div>
          <div className="">
            <CartTotal />
          </div>
        </div>

        <OrderBump />
      </div>
    </div>
  );
};

export default Cart;
