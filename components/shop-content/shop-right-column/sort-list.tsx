import React, { createRef, useEffect } from "react";
import "@/components/shop-content/style.scss";
import { useShop } from "@/hooks/use-shop";

import { sortProducts } from "@/utils/utility-function";
import { SortMethod, SortBy } from "./const";
interface SortMenuProps {
  labels: SortMethod[];
  onRefReady: (ref: React.RefObject<HTMLDivElement>) => void;
}

export function SortList(props: SortMenuProps) {
  const ref = createRef<HTMLDivElement>();
  const shop = useShop();

  function onClick(sortBy: SortBy): void {
    const products = sortProducts(sortBy, shop.shopState.products);
    const originalProducts = sortProducts(
      sortBy,
      shop.shopState.originalProducts
    );
    shop.setState({
      ...shop.shopState,
      originalProducts: originalProducts,
      products: products,
    });
  }
  useEffect(() => {
    props.onRefReady(ref);
  }, []);
  return (
    <div ref={ref} className="sort_menu">
      <ul>
        {props.labels.map((item, index) => (
          <li key={index}>
            <p
              onClick={() => {
                onClick(item.sortBy);
              }}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
