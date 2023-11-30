import { useLayoutEffect, useRef, useState } from "react";
type PaymentState = {
    expanded: boolean;
  };
  
  export default function PaymentOption({ label }: { label: string }) {
    const [state, setState] = useState<PaymentState>({
      expanded: false,
    });
  
    const descriptionRef = useRef<HTMLParagraphElement>(null);
  
    useLayoutEffect(() => {
      if (descriptionRef.current) {
        descriptionRef.current.style.height = state.expanded
          ? `${descriptionRef.current.scrollHeight}px`
          : "0px";
      }
    }, [state.expanded]);
  
    return (
      <div className="payment-option-box">
        <p
          className="payment-option-label"
          onClick={() => {
            setState({
              expanded: !state.expanded,
            });
          }}
        >
          {label}
        </p>
        <div>
          <p
            ref={descriptionRef}
            className="description"
            style={{
              transition: "height 350ms ease-in-out",
              overflow: "hidden",
            }}
          >
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won’t be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
    );
  }