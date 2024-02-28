import CartContent from "@/components/cart/content";
import NavigationHistory from "@/components/navigation-history/component";
import { CartProvider } from "@/context/cart/cart";

export default function Cart() {
  return (
    <div>
      <NavigationHistory />
      <CartProvider>
        <CartContent />
      </CartProvider>
    </div>
  );
}
