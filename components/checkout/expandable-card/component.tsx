import { useLayoutEffect, useRef, useState } from "react";
import "./style.scss";
type PaymentState = {
  expanded: boolean;
};

export default function ExpandableCard({
  label,
  description,
  expandable,
  padding,
}: {
  description: string;
  label: string;
  expandable: boolean;
  padding: string;
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
    <div className="expandable-card-box" style={{ padding: padding }}>
      <p
        style={{ marginBottom: expandable ? "0px" : "5px" }}
        className="expandable-card-label"
        onClick={onClick}
      >
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
