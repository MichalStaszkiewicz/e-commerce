"use client";
import { Button, ConfigProvider, Divider } from "antd";
import "../cart/style.scss";

import customTheme from "@/theme/theme_config";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CartTableEntry from "./table_entry/component";
import CartTableHeader from "./cart-table-header/component";
import { useSearchParams } from "react-router-dom";

export default function CartContent() {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    setReady(true);
  });

  return ready ? (
    <ConfigProvider theme={customTheme} direction="ltr">
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="table-wrapper">
            <table>
              <CartTableHeader></CartTableHeader>
              <tbody>
                <CartTableEntry></CartTableEntry>
              </tbody>
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
                    <Button className="apply-coupon-button"
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
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>{" "}
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
                  <div className="cart-total-entry">
                    <p className="label">Subtotal</p>
                    <p className="price">$230.00</p>
                  </div>
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
                  PROCEED TO CHECKUT
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
