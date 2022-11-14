import { Fragment, useEffect,useState } from "react";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import PdfModal from "../../../common/pdfModal/PdfModal";
import thankStyle from "./thanks.module.css";
import { useCart } from "react-use-cart";
import { useLocation } from 'react-router-dom';
import SimpleLoading from "../../../common/loading/SimpleLoading";
import { priceFormat } from "../../../hooks/helper";
import ProductTable from "./components/ProductTable";
import ShippingInfo from "./components/ShippingInfo";

const ThankYou = () => {
const [show, setShow] = useState(false);
const [orderData, setOrderData] = useState([]);
const [shippingAddress, setShippingAddress] = useState("");
const {emptyCart,clearCartMetadata} = useCart();
const { state } = useLocation();

useEffect(() => {
    emptyCart();
	clearCartMetadata();
    setOrderData(state.packages)
    setShippingAddress(state.shipping_address)
}, [state]);

return (
    <div>
    <div className={thankStyle.BreadCumb}>
        <BreadCumb data="Checkout" />
    </div>
    <div className={`container ${thankStyle.thankContainer} `}>
        <h6>Thank you. Your order has been received.</h6>
        <section>
        {
            Object.keys(orderData).length !== 0  ?
            (
                Object.keys(orderData).map((item,key)=>{
                    return (
                        <Fragment key={key}>
                          <Fragment>
                            <div className={thankStyle.topData}>
                              <div className={thankStyle.topDataItem}>
                                <h6>Shop Name</h6>
                                <h5> {orderData[item].shop_name}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>ORDER NUMBER</h6>
                                <h5> {orderData[item].id} </h5>
                              </div>

                              <div className={thankStyle.topDataItem}>
                                <h6>DATE</h6>
                                <h5> {orderData[item].created_at}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>TOTAL</h6>
                                <h5> {priceFormat(orderData[item].grand_total)}</h5>
                              </div>

                              <div className={thankStyle.topDataItem}>
                                <h6>PAYMENT METHOD</h6>
                                <h5> {orderData[item].payment_type}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>Order Status</h6>
                                <h5> {orderData[item].order_status}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>Payment Status</h6>
                                <h5> {orderData[item].payment_status}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>Deliver Status</h6>
                                <h5> {orderData[item].delivery_status}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>Shipping Type</h6>
                                <h5> {orderData[item].shipping_type}</h5>
                              </div>
                              <div className={thankStyle.topDataItem}>
                                <h6>Shipping Method</h6>
                                <h5> {orderData[item].shipping_method}</h5>
                              </div>
                            </div>
                            { orderData[item].payment_type == "cod" && <h6 className="mt-4">Pay with cash upon delivery.</h6> }
                          </Fragment>
                          <Fragment>
                            {/* Product Table */}
                            <ProductTable products={orderData[item].order_details} order={orderData[item]} thankStyle={thankStyle}/>
                          </Fragment>
                        </Fragment>
                    )
                })
            ) : (<SimpleLoading/>)
        }
        </section>

        <section>
          <div className="mt-4">
            <h1 className="text-center">Order Location</h1>
            <h6 className="text-center">Order Location for admin : test location</h6>
          </div>
        </section>

        {/* Shipping information */}
        <ShippingInfo thankStyle={thankStyle} shippingAddress={shippingAddress}/>

        <section>
          <button
              onClick={() => setShow(!show)}
              className="btn btn-primary mb-5">Print</button>

          <PdfModal com={<ThankYou />} show={show} setShow={setShow} />
        </section>
    </div>
    </div>
);
};

export default ThankYou;
