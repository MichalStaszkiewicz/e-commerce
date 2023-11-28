import { Button, ConfigProvider, Divider } from "antd";
import "../cart/style.scss";
import TableEntry from "./table_entry/table_entry";
import TableHeader from "./table_header/table_header";
import theme from "@/theme/theme_config";

export default function CartContent() {
  return (
    <ConfigProvider theme={theme}>
      <div className="wrapper">
        <div className="table-wrapper">
          <table>
            <TableHeader></TableHeader>
            <tbody>
              <TableEntry></TableEntry>
            </tbody>
          </table>
        </div>
        <div className="cart-options-wrapper">
          <div className="block-1">
            <div className="buttons-segment">
              <Button
                type="primary"
                style={{
                  height: "45px",
                  width: "250px",
                }}
              >
                <center>UPDATE CART</center>
              </Button>
              <Button
                ghost={true}
                type="primary"
                style={{
                  height: "45px",
                  width: "250px",
                }}
              >
                <center>CONTINUE SHOPPING</center>
              </Button>
            </div>
            <div className="coupon-segment">
              <p className="header">Coupon</p>
              <p className="description">
                Enter your coupon code if you have one.
              </p>
              <div className="apply-coupon-wrapper">
                <input placeholder="Coupon Code" type="text" />
                <Button
                  style={{ width: "150px", height: "45px" }}
                  type="primary"
                >
                  APPLY COUPON
                </Button>
              </div>
            </div>
          </div>
          <div className="block-2">
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
                  <p className="label">Total</p>
                  <p className="price">$230.00</p>
                </div>
                <div className="cart-total-entry">
                  <p className="label">Total</p>
                  <p className="price">$230.00</p>
                </div>
                <div className="cart-total-entry">
                  <p className="label">Total</p>
                  <p className="price">$230.00</p>
                </div>
              </div>

              <Button style={{ height: "60px", width: "100%" }} type="primary">
                PROCEED TO CHECKUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
