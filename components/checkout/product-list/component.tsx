import { useCart } from "@/hooks/use-cart";
import "./styles.scss";
import { formatPrice } from "@/utils/utility-function";

export default function CheckoutProductListTable() {
  const cart = useCart();
  function calculateOrderTotal() {
    let total = 0;

    cart.cartState.cartProducts.forEach((product) => {
      total += product.totalPrice;
    });
    return formatPrice({ price: total });
  }

  function getProducts() {
    return cart.cartState.cartProducts.map((entry, index) => {
      return (
        <tr className="t-body-tr">
          <td>
            {entry.product.name} x {entry.quantity}
          </td>
          <td>
            $
            {formatPrice({
              price: entry.totalPrice,
            })}
          </td>
        </tr>
      );
    });
  }
  return (
    <table className="product-table">
      <thead className="t-head">
        <tr className="head-tr">
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {getProducts()}
        <tr className="t-body-tr">
          <td style={{ fontWeight: "bold" }}>Cart Subtotal</td>
          <td>${calculateOrderTotal()}</td>
        </tr>
        <tr
          className="t-body-tr"
          style={{
            fontWeight: "bold",
          }}
        >
          <td>Order Total</td>
          <td>${calculateOrderTotal()}</td>
        </tr>
      </tbody>
    </table>
  );
}
