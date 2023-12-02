import { useLayoutEffect, useRef, useState } from "react";
import "../../checkout/payment-option/style.scss";
type PaymentState = {
  expanded: boolean;
};

export default function PaymentOption({
  label,
  description,
  expandable,
}: {
  description: string;
  label: string;
  expandable: boolean;
}) {
  const [state, setState] = useState<PaymentState>({
    expanded: false,
  });

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (descriptionRef.current) {
      if (expandable) {
        descriptionRef.current.style.height = state.expanded
          ? `${descriptionRef.current.scrollHeight}px`
          : "0px";
      } else {
        descriptionRef.current.style.height = "auto";
      }
    }
  }, [state.expanded]);

  function onClick(event: any) {
    if (expandable) {
      setState({
        expanded: !state.expanded,
      });
    }
  }

  return (
    <div className="payment-option-box">
      <p className="payment-option-label" onClick={onClick}>
        {label}
      </p>
      <div>
        <p ref={descriptionRef} className="description">
          {description}
        </p>
      </div>
    </div>
  );
}
