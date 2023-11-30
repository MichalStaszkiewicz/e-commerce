export default function CheckoutProductListTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Top Up T-Shirt x 1</td>
          <td>$250.00</td>
        </tr>
        <tr>
          <td>Polo Shirt x 1</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold" }}>Cart Subtotal</td>
          <td>$350.00</td>
        </tr>
        <tr
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
