export default function CheckoutProductListTable() {
  return (
    <table style={{ height: "auto", width: "100%" }}>
      <thead>
        <tr
          style={{
            height: "50px",
            width: "100%",
            borderBottom: "1px solid #eff1f3",
            fontWeight: "bold",
          }}
        >
          <th style={{ textAlign: "start", padding: "5px" }}>Product</th>
          <th
            style={{
              textAlign: "start",
            }}
          >
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            height: "50px",
            width: "100%",
            borderBottom: "1px solid #eff1f3",
          }}
        >
          <td style={{ padding: "5px" }}>Top Up T-Shirt x 1</td>
          <td>$250.00</td>
        </tr>
        <tr
          style={{
            height: "50px",
            width: "100%",
            borderBottom: "1px solid #eff1f3",
          }}
        >
          <td style={{ padding: "5px" }}>Polo Shirt x 1</td>
          <td>$100.00</td>
        </tr>
        <tr
          style={{
            height: "50px",
            width: "100%",
            borderBottom: "1px solid #eff1f3",
          }}
        >
          <td style={{ fontWeight: "bold", padding: "5px" }}>Cart Subtotal</td>
          <td>$350.00</td>
        </tr>
        <tr
          style={{
            fontWeight: "bold",
            height: "50px",
            width: "100%",
          }}
        >
          <td style={{ padding: "5px" }}>Order Total</td>
          <td>$350.00</td>
        </tr>
      </tbody>
    </table>
  );
}
