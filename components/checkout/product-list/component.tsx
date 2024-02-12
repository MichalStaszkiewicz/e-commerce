import "./styles.scss";

export default function CheckoutProductListTable() {
  return (
    <table className="product-table">
      <thead className="t-head">
        <tr className="head-tr">
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="t-body">
        <tr className="t-body-tr">
          <td>Top Up T-Shirt x 1</td>
          <td>$250.00</td>
        </tr>
        <tr className="t-body-tr">
          <td>Polo Shirt x 1</td>
          <td>$100.00</td>
        </tr>
        <tr className="t-body-tr">
          <td style={{ fontWeight: "bold" }}>Cart Subtotal</td>
          <td>$350.00</td>
        </tr>
        <tr
          className="t-body-tr"
          style={{
            fontWeight: "bold",
          }}
        >
          <td>Order Total</td>
          <td>$350.00</td>
        </tr>
      </tbody>
    </table>
  );
}
