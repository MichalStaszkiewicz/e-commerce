"use client";
import { Button, ConfigProvider, Divider } from "antd";
import "../cart/style.scss";

import customTheme from "@/theme/theme_config";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CartTableEntry from "./table_entry/component";
import CartTableHeader from "./cart-table-header/component";
import { useSearchParams } from "react-router-dom";
import { Product } from "@/model/product";
import { CartProvider } from "@/context/cart/cart";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/utility-function";
export type CartProduct = {
  product: Product;
  quantity: number;
  id: number;
  totalPrice: number;
};
export default function CartContent() {
  const [ready, setReady] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);
  const router = useRouter();
  const cart = useCart();
  useEffect(() => {
    setProducts(cart.cartState.cartProducts);
  }, [cart.cartState.cartProducts]);
  useLayoutEffect(() => {
    setReady(true);
  });

  function RenderTableProductEntries(products: CartProduct[]) {
    return products.map((entry, index) => {
      return <CartTableEntry entry={entry}></CartTableEntry>;
    });
  }

  return ready ? (
    <ConfigProvider theme={customTheme} direction="ltr">
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="table-wrapper">
            <table>
              <CartTableHeader></CartTableHeader>
              <tbody>{RenderTableProductEntries(products)}</tbody>
            </table>
          </div>

          <div className="cart-options-wrapper">
            <div className="coupon-segment-cart-total-wrapper">
              <div className="coupon-segment">
                <div className="buttons-segment">
                  <Button className="cart-update-button" type="primary">
                    <center>UPDATE CART</center>
                  </Button>
                  <Button
                    className="cart-update-button"
                    ghost={true}
                    type="primary"
                  >
                    CONTINUE SHOPPING
                  </Button>
                </div>
                <div className="coupon-content-wrapper">
                  <p className="header">Coupon</p>
                  <p className="description">
                    Enter your coupon code if you have one.
                  </p>
                  <div className="apply-coupon-wrapper">
                    <input placeholder="Coupon Code" type="text" />
                    <Button
                      className="apply-coupon-button"
                      style={{
                        borderRadius: "3px",
                        paddingLeft: "25px",
                        paddingRight: "25px",
                      }}
                      type="primary"
                    >
                      APPLY COUPON
                    </Button>
                  </div>
                </div>
              </div>

              <div className="cart-total-wrapper">
                <div className="header-wrapper">
                  <p className="header">CART TOTALS</p>
                  <div className="divider"></div>
                </div>

                <div className="entry-list">
                  {products.map((product, index) => {
                    return (
                      <div className="cart-total-entry">
                        <p className="label">Subtotal</p>
                        <p className="price">
                          $
                          {formatPrice({
                            price: product.totalPrice,
                          })}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <Button
                  onClick={() => {
                    router.push("/cart/checkout");
                  }}
                  style={{
                    marginTop: "30px",
                    height: "55px",
                  }}
                  type="primary"
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  ) : (
    <div></div>
  );
}
