import React from "react";
import { Table } from "react-bootstrap";

const ProductTable = () => {
  return (
  <div className="table-responsive">
		<Table  borderless responsive>
			<thead className="thead-light">
				<tr>
					<th scope="col">Product</th>
					<th scope="col">Price</th>
					<th scope="col">Quantity</th>
					<th scope="col">Total</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>delete icon</td>
				</tr>
			</tbody>
		</Table>
  </div>

  );
};

export default ProductTable;