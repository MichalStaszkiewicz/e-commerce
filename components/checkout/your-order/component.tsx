import { Button } from "antd";
import ExpandableCard from "../expandable-card/component";
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
          <ExpandableCard
            label={"Direct Bank Transfer"}
            expandable={true}
            description={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
            }
          />
          <ExpandableCard
            label={"Cheque Payment"}
            expandable={true}
            description={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
            }
          />
          <ExpandableCard
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
