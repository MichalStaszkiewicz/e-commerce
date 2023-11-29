"use client";
import { Button, ConfigProvider } from "antd";
import "../checkout/style.scss";
import theme from "@/theme/theme_config";
import PaymentOption from "./payment-option/payment-option";
export default function CheckoutContent() {
  return (
    <div className="checkout-content-wrapper">
      <ConfigProvider theme={theme}>
        <div className="customer-return-wrapper">
          <div className="customer-return-login-box">
            <p className="label">
              Returning customer?
              <span className="login-link"> Click here </span>
              to login
            </p>
          </div>
        </div>

        <div className="billing-details-wrapper">
          <div className="billing-details-box">
            <p className="label">Billing Details</p>
            <div className="billing-form-box">
              <div className="form-group">
                <label>
                  Country <span style={{ color: "red" }}>*</span>
                </label>
                <select className="select-country">
                  <option value="1">Select Country</option>
                  <option value="2">Bangladesh</option>
                  <option value="3">Algeria</option>
                  <option value="4">Afghanistan</option>
                  <option value="5">Ghana</option>
                  <option value="6">Albania</option>
                </select>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label>
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="first-name-input"></input>
                </div>

                <div className="form-group">
                  <label>
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="last-name-input"></input>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="company-name-input"></input>
              </div>
              <div className="form-group">
                <label>
                  Address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Street address"
                  className="address-street-input"
                ></input>
                <div style={{ height: "20px" }}></div>
                <input
                  type="text"
                  placeholder="Apartament,suite,unit etc. (optional)"
                  className="address-apartament-input"
                ></input>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label>
                    State / Country <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="state-country-input"></input>
                </div>

                <div className="form-group">
                  <label>
                    Posta / Zip <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="posta-zip-input"></input>
                </div>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label>
                    Email Address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" className="email-address-input"></input>
                </div>

                <div className="form-group">
                  <label>
                    Phone <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="phone-number-input"
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label>Order Notes</label>
                <textarea
                  placeholder="Write your notes here..."
                  className="order-notes-input"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="order-details-box">
            <p className="label">Coupon Code</p>
            <div className="coupon-code-box">
              <div className="coupon-input-box">
                <p className="entry-coupon-code-label">
                  Enter your coupon code if you have one
                </p>
                <div className="coupon-input-row">
                  <input type="text" placeholder="Coupon Code" />
                  <Button
                    type="primary"
                    style={{
                      width: "100px",
                      height: "50px",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
            <p className="label">Your Order</p>
            <div className="your-order-box">
              <div className="product-list-box">
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
                      <th style={{ textAlign: "start", padding: "5px" }}>
                        Product
                      </th>
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
                      <td style={{ fontWeight: "bold", padding: "5px" }}>
                        Cart Subtotal
                      </td>
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
              </div>
              <div className="payment-option-list">
                <PaymentOption label={"Direct Bank Transfer"} />
                <PaymentOption label={"Cheque Payment"} />
                <PaymentOption label={"Paypal"} />
              </div>
              <Button type="primary" className="place-order-button">
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
