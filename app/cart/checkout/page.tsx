import CheckoutContent from "@/components/checkout/content";
import NavigationHistory from "@/components/navigation-history/component";
import { CartProvider } from "@/context/cart/cart";

export default function Checkout() {
  return (
    <div>
      <NavigationHistory />
      <CartProvider>
        <CheckoutContent />
      </CartProvider>
    </div>
  );
}
