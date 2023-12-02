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
          <PaymentOption
            label={"Direct Bank Transfer"}
            expandable={true}
            description={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
            }
          />
          <PaymentOption
            label={"Cheque Payment"}
            expandable={true}
            description={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
            }
          />
          <PaymentOption
            label={"Paypal"}
            expandable={true}
            description={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
            }
          />
        </div>
        <Button type="primary" className="place-order-button">
          PLACE ORDER
        </Button>
      </div>
    </>
  );
}
