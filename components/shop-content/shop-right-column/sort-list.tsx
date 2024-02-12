import React, { createRef, useEffect } from "react";
import "@/components/shop-content/style.scss";
import { useShop } from "@/hooks/use-shop";

import { sortProducts } from "@/utils/utility-function";
import { ActionType, FilterBy, SortBy } from "./const";
interface SortMenuProps {
  labels: ActionType[];
  onRefReady: (ref: React.RefObject<HTMLDivElement>) => void;
}

export function SortList(props: SortMenuProps) {
  const ref = createRef<HTMLDivElement>();
  const shop = useShop();

  function onClick(sortBy: SortBy, filterBy: FilterBy, label: string): void {
    let products;
    if (
      filterBy === FilterBy.children ||
      filterBy === FilterBy.women ||
      filterBy === FilterBy.men
    ) {
      let selectedCategories = shop.shopState.selectedCategories;
      selectedCategories.push(label.toLowerCase());
      shop.setState({
        ...shop.shopState,
        selectedCategories: selectedCategories,
      });
      return;
    } else {
      products = sortProducts(sortBy, shop.shopState.products);
    }

    shop.setState({
      ...shop.shopState,

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
                onClick(item.sortBy, item.filterBy, item.label);
              }}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
