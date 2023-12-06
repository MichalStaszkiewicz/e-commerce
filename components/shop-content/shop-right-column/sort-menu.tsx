import React, { createRef, useEffect } from "react";
import "@/components/shop-content/style.scss";
interface SortMenuProps {
  labels: string[];
  onRefReady: (ref: React.RefObject<HTMLDivElement>) => void;
}

export function SortMenu(props: SortMenuProps) {
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    console.log("REFERENCE " + ref);
    props.onRefReady(ref);
  }, []);
  return (
    <div ref={ref} className="sort_menu" style={{}}>
      <ul>
        {props.labels.map((item, index) => (
          <li>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
