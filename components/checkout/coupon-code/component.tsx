import { Button } from "antd";
import "../../checkout/style.scss";
export default function CheckoutCouponCode() {
  return (
    <>
      <p className="label">Coupon Code</p>
      <div className="coupon-code-box">
        <div className="coupon-input-box">
          <p className="entry-coupon-code-label">
            Enter your coupon code if you have one
          </p>
          <div className="coupon-input-row">
            <input type="text" placeholder="Coupon Code" />
            <Button
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderTopRightRadius: "3px",
                borderBottomRightRadius: "3px",
              }}
              type="primary"
              className="coupon-code-apply-button"
            >
              APPLY
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
