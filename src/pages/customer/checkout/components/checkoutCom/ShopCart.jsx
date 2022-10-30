import { Fragment } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { priceFormat } from "../../../../../hooks/helper";
import CartTotal from "../../../cart/components/cartCom/CartTotal";
import Variations from "../../../miniCart/components/cartCom/Variations";
import cartDeailsStyle from "./checkout.module.css";

const ShopCart = ({items}) => {
console.log(items);

  return (
    <div>
      <div className={cartDeailsStyle.cartDetails}>
        <section>
          <div className="mb-4">
            <div className={cartDeailsStyle.shopName}>
              <h4>
                <span>
                  <AiOutlineShop />
                </span>
                {items.shopName}
              </h4>
            </div>
						{
						items.products.length > 0 &&
						(
						<Fragment>
								<Fragment>
								{ items.products.map((item,key)=>{
									return(
										<div className={cartDeailsStyle.productInfo} key={key}>
											<div className={cartDeailsStyle.productInfoImg}>
												<img
													src={item.thumbnail_img}
													alt={ item.name }
												/>
												<div className={cartDeailsStyle.imageTop}> { item.quantity }</div>
											</div>
											<div>
												<h6> { item.name } </h6>
												<Variations item={item}/>
											</div>
											<div className={cartDeailsStyle.productInfoPrice}>
												<h5>{ priceFormat(item.itemTotal) }</h5>
											</div>
										</div>
									)
								})
								}
								</Fragment>
								<Fragment>
									<div className="mb-4">
										<CartTotal proceedKey="checkout" cartTotalTitle="checkout" cartTotal={items.subtotal} />
									</div>
								</Fragment>
						</Fragment>

						)
						}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopCart;
