import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "./components/cartCom/PageHeader";
import ProductTable from "./components/cartCom/ProductTable";
import ActionButton from "./components/cartCom/ActionButton";
import Coupon from "./components/cartCom/Coupon";
import CartTotal from "./components/cartCom/CartTotal";
import OrderBump from "./components/cartCom/OrderBump";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import cartStyle from "./cartStyle.module.css";
import { useCart } from "react-use-cart";
import { Fragment } from "react";

const Cart = () => {
  const { t } = useTranslation();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    metadata,
  } = useCart();
  console.log(items);

  return (
    <div>
      <BreadCumb data={"Shopping Cart"} />
      <div className="container">
        <PageHeader />
        {isEmpty ? (
          <p>Your cart is empty</p>
        ) : (
          <Fragment>
            <ProductTable
              totalUniqueItems={totalUniqueItems}
              items={items}
              updateItemQuantity={updateItemQuantity}
              removeItem={removeItem}
            />
            <ActionButton />
            <hr />
            <div className={`mt-4 ${cartStyle.cuponContainer}`}>
              <Coupon />
              <CartTotal proceedKey="cart" cartTotal={cartTotal} />
            </div>
          </Fragment>
        )}
        <OrderBump />
      </div>
    </div>
  );
};

export default Cart;
