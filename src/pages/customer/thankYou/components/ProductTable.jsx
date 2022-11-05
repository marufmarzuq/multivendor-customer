import { priceFormat } from "../../../../hooks/helper";

const ProductTable = ({products,thankStyle,order}) => {
  return (
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
      {
        products.length >0 &&
        products.map((product,key)=>{
          return(
            <tr key={key}>
              <td>
                <span className="text-danger"> {product.product_name} </span>{" "}
                <span> x {product.quantity} </span>
                {/* Variation */}
				{ product.variation !=="" && <div>{product.variation}</div> }
              </td>
              <td>{priceFormat(product.price)}</td>
          </tr>
          )
        })
      }

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

        <td>{priceFormat(order.subtotal)}</td>
			</tr>
			<tr>
        <td>
            <h6
            style={{
              fontWeight: "600",
            }}
            >
            Tax
            </h6>
        </td>

        <td>
          <h6
          style={{
            fontWeight: "600",
          }}
          >
          {priceFormat(order.tax)}
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
            Coupon Discount 
            </h6>
        </td>

        <td>
          <h6
          style={{
            fontWeight: "600",
          }}
          >
          {priceFormat(order.coupon_discount)}
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
          {priceFormat(order.grand_total)}
          </h6>
        </td>
			</tr>
		</tbody>
		</table>
	</div>
  );
};

export default ProductTable;