import { Button } from "antd";
import PaymentOption from "../payment-option/component";
import CheckoutProductListTable from "../product-list/component";

export default function CheckoutYourOrder() {
  return (
    <>
      <p className="label">Your Order</p>
      <div className="your-order-box">
        <div className="product-list-box">
          <CheckoutProductListTable />
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
    </>
  );
}
