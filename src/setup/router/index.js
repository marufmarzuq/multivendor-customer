import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import BulkUpload from "../../pages/seller/bulkUpload/BulkUpload";
import CommissionHistory from "../../pages/seller/commissionHistory/CommissionHistory";
import Dashboard from "../../pages/seller/dashboard/Dashboard";
import AddDigitalProducts from "../../pages/seller/digitalProduct/components/addDigitalProducts/AddDigitalProducts";
import UpdateDigitalProduct from "../../pages/seller/digitalProduct/components/updateDigitalProduct/UpdateDigitalProduct";
import DigitalProduct from "../../pages/seller/digitalProduct/DigitalProduct";
import ManageProfile from "../../pages/seller/manageProfile/ManageProfile";
import MyWallet from "../../pages/seller/myWallet/MyWallet";
import Orders from "../../pages/seller/orders/Orders";
import PaymentHistory from "../../pages/seller/paymentHistory/PaymentHistory";
import ProductReviews from "../../pages/seller/productReviews/ProductReviews";
import AddProducts from "../../pages/seller/products/components/addProduct/AddProducts";
import UpdateProduct from "../../pages/seller/products/components/updateProducts/UpdateProduct";
import Products from "../../pages/seller/products/Products";
import ReceivedRefundReq from "../../pages/seller/refunds/receivedRefund/ReceivedRefundReq";
import SentRefundReq from "../../pages/seller/refunds/sentRefund/SentRefundReq";
import Wishlist from "../../pages/seller/wishlist/Wishlist";
import Layout from "./layouts/seller/Layout";
import MoneyWithDraw from "../../pages/seller/moneyWithdraw/MoneyWithDraw";
import ShopSetting from "../../pages/seller/shopSetting/ShopSetting";
import Home from "../../pages/customer/homepage/Home";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import Shop from "../../pages/customer/shop/Shop";
import Stores from "../../pages/customer/stores/Stores";
import SingleProduct from "../../pages/customer/singleProduct/SingleProduct";
import Cart from "../../pages/customer/cart/Cart";
import ProductCompare from "../../pages/customer/productCompare/ProductCompare";
import CustomerWishlist from "../../pages/customer/wishlist/CustomerWishlist";
import Checkout from "../../pages/customer/checkout/Checkout";
import Support from "../../pages/customer/support/Support";
import SellerRequest from "../../pages/customer/sellerRequest/SellerRequest";
import SellerShop from "../../pages/customer/sellerShop/SellerShop";
import Login from "../../pages/Login";
import CustomerRegister from "../../pages/customer/customerRegister/CustomerRegister";
import ResetPassword from "../../pages/ResetPassword";
import CustomerHome from "../../pages/customer/customerHome/CustomerHome";
import Blog from "../../pages/customer/blog/Blog";

import DashboardLayout from "../../pages/customerDashboard/DashboardLayout";
import Profile from "../../pages/customerDashboard/components/profile/Profile";
import UserOrder from "../../pages/customerDashboard/components/orders/UserOrder";
import UserOrderReturns from "../../pages/customerDashboard/components/orderReturns/UserOrderReturns";
import ChangePass from "../../pages/customerDashboard/components/changePass/ChangePass";
import PrivateRoutes from "./routeModels/PrivateRoute";
import BlogDetails from "../../pages/customer/blog/components/blogDetails/BlogDetails";
import ThankYou from "../../pages/customer/thankYou/ThankYou";
import CustomerPrivateRoutes from "./routeModels/CustomerPrivateRoutes";
import BeVendor from "../../pages/customerDashboard/components/becomeVendor/BeVendor";
import Supports from "../../pages/customerDashboard/components/supports/Supports";
import OrderReturnList from "../../pages/customerDashboard/components/orderReturns/OrderReturnList";
import SupportTicket from "../../pages/customer/support/SupportTicket";
import SingleTicket from "../../pages/customerDashboard/components/supports/components/SingleTicket";
import ShopReviews from "../../pages/seller/shopReviews/ShopReviews";
import Invoice from "../../common/invoice/Invoice";
import { useSelector } from "react-redux";
import Compare from "../../common/compare/Compare";
import MiniCart from "../../common/miniCart/MiniCart";

const Router = () => {
  const { open: openCompare, products } = useSelector((state) => state.compare);
  const { open: openMiniCart } = useSelector((state) => state.miniCart);
  return (
    <>
      {openCompare && <Compare products={products} />}
      {openMiniCart && <MiniCart />}
      <Routes>
        <Route path="invoice" element={<Invoice />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        {/* Vendor Dashboard */}
        <Route element={<PrivateRoutes />}>
          <Route path="/seller" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="approved-refund-request" element={<SentRefundReq />} />
            <Route
              path="received-refund-request"
              element={<ReceivedRefundReq />}
            />
            <Route path="payment-history" element={<PaymentHistory />} />
            <Route path="commission-history" element={<CommissionHistory />} />
            <Route path="my-wallet" element={<MyWallet />} />
            <Route path="withdraw" element={<MoneyWithDraw />} />
            <Route path="manage-profile" element={<ManageProfile />} />
            <Route path="setting" element={<ShopSetting />} />
            <Route path="shop-reviews" element={<ShopReviews />} />
          </Route>
          <Route path="seller/products/" element={<Layout />}>
            <Route path="all" element={<Products />} />
            <Route path="reviews" element={<ProductReviews />} />
            <Route path="add" element={<AddProducts />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="bulk-upload" element={<BulkUpload />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="digital/all" element={<DigitalProduct />} />
            <Route path="digital/add" element={<AddDigitalProducts />} />
            <Route
              path="digital/update/:id"
              element={<UpdateDigitalProduct />}
            />
          </Route>
        </Route>

        {/* Customer homepage */}
        <Route path="/" element={<CustomerLayout />}>
          <Route path="" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:catId" element={<Shop />} />
          <Route path="shop/:catId/?search=:search" element={<Shop />} />
          <Route path="stores" element={<Stores />} />
          <Route path="cart" element={<Cart />} />
          <Route path="compare" element={<ProductCompare />} />
          <Route path="wishlist" element={<CustomerWishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products/:slug" element={<SingleProduct />} />
          <Route path="support" element={<Support />} />
          <Route path="seller-request" element={<SellerRequest />} />
          <Route path="seller-shop/:slug" element={<SellerShop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="support/conversation" element={<SingleTicket />} />

          {/* Login */}

          <Route path="register" element={<CustomerRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />

          <Route element={<CustomerPrivateRoutes />}>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="" element={<Profile />} />
              <Route path="orders" element={<UserOrder />} />
              <Route path="order-return-list" element={<OrderReturnList />} />
              <Route path="order-returns" element={<UserOrderReturns />} />
              <Route path="password-change" element={<ChangePass />} />
              <Route path="become-vendor" element={<BeVendor />} />
              <Route path="supports" element={<Supports />} />
              <Route
                path="support-ticket/:ticket"
                element={<SupportTicket />}
              />
              <Route path="support/conversation" element={<SingleTicket />} />
            </Route>
          </Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
