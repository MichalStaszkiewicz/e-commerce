import { Button } from "antd";

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
    </>
  );
}
