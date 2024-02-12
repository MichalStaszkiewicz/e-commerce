import "./style.scss";
export default function CartTableHeader() {
  return (
    <thead>
      <tr className="cart-table-tr">
        <th>Image</th>
        <th>Product</th>

        <th>Price</th>

        <th>Quantity</th>

        <th>Total</th>

        <th>Remove</th>
      </tr>
    </thead>
  );
}
