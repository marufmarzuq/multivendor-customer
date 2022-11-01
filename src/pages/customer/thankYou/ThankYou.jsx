import { Fragment, useEffect,useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import PdfModal from "../../../common/pdfModal/PdfModal";
import thankStyle from "./thanks.module.css";
import { useCart } from "react-use-cart";
import { useLocation } from 'react-router-dom';
import SimpleLoading from "../../../common/loading/SimpleLoading";
import { priceFormat } from "../../../hooks/helper";

const ThankYou = () => {
  const [show, setShow] = useState(false);
  const [orderData, setOrderData] = useState([]);
	const {emptyCart} = useCart();
	const { state } = useLocation();

  useEffect(() => {
		emptyCart();
		setOrderData(state)
	}, []);
	console.log(orderData)
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
										<div className={thankStyle.topData}>
											<div className={thankStyle.topDataItem}>
												<h6>Shop Name</h6>
												<h5> {orderData[item].order.shop_name}</h5>
											</div>
											<div className={thankStyle.topDataItem}>
												<h6>ORDER NUMBER</h6>
												<h5> {orderData[item].order.id} </h5>
											</div>

											<div className={thankStyle.topDataItem}>
												<h6>DATE</h6>
												<h5> {orderData[item].order.created_at}</h5>
											</div>
											<div className={thankStyle.topDataItem}>
												<h6>TOTAL</h6>
												<h5> {priceFormat(orderData[item].order.grand_total)}</h5>
											</div>

											<div className={thankStyle.topDataItem}>
												<h6>PAYMENT METHOD</h6>
												<h5> {orderData[item].order.payment_type}</h5>
											</div>
										</div>
										{ orderData[item].order.payment_type == "cod" && <h6 className="mt-4">Pay with cash upon delivery.</h6> }
									</Fragment>
								)
							})
						) : (<SimpleLoading/>)
          }



        </section>

        <section>
          <div className="mt-4">
            <h1 className="text-center">Order Location</h1>
            <h6 className="text-center">
              Order Location for admin : test location
            </h6>
          </div>
        </section>

        <section>
          <div className={thankStyle.orderDetails}>
            <h1>Order Details</h1>

            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="text-danger"> Mango </span>{" "}
                    <span> x 1</span>
                    <h6>
                      Vendor: <span className="text-danger"> mr. vendor </span>
                    </h6>
                  </td>

                  <td>$20.0</td>
                </tr>

                <tr>
                  <td>
                    <span className="text-danger"> Mango </span>{" "}
                    <span> x 1</span>
                    <h6>
                      Vendor: <span className="text-danger"> mr. vendor </span>
                    </h6>
                  </td>

                  <td>$20.0</td>
                </tr>

                <tr>
                  <td>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Subtotal:
                    </h6>
                  </td>

                  <td>$40.0</td>
                </tr>

                <tr>
                  <td>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Payment Method:
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Cash on delivery
                    </h6>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Total
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      $40.0
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="mt-5">
            <h1>Billing Address</h1>
            <div className={thankStyle.billingBox}>
              <h6>100/G</h6>
              <h6> Central Road </h6>
              <h6> Dhanmondi </h6>
              <h6> Dhaka </h6>
              <h6> 1204 </h6>
              <h6>
                <AiOutlinePhone /> 0100000000{" "}
              </h6>
              <h6>
                <AiOutlineMail /> user@email.com
              </h6>
            </div>
          </div>
        </section>

        <section>
          <button
            onClick={() => setShow(!show)}
            className="btn btn-primary mb-5"
          >
            Print
          </button>

          <PdfModal com={<ThankYou />} show={show} setShow={setShow} />
        </section>
      </div>
    </div>
  );
};

export default ThankYou;
