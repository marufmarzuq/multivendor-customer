
const ProductTable = ({thankStyle}) => {
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
  );
};

export default ProductTable;