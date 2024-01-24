import "@/components/shop-content/style.scss";
import { useShop } from "@/hooks/use-shop";
import { Product } from "@/model/product";
import { filterBySize, formatNumberWithCommas } from "@/utils/utility-function";
import { Checkbox } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function CategoriesColorIndicator({
  color,
  label,
  quantity,
}: {
  color: string;
  label: string;
  quantity: number;
}): JSX.Element {
  return (
    <div className="color_container">
      <div className="color_indicator" style={{ backgroundColor: color }}></div>
      <div style={{ marginLeft: "10px" }}></div>
      <p style={{ fontWeight: "350", fontSize: "15px" }}>
        {label} {formatNumberWithCommas(quantity)}
      </p>
    </div>
  );
}
interface CategorySizeProps {
  label: string;
  quantity: number;
}

export function CategoriesSize({ label, quantity }: CategorySizeProps) {
  const [checked, setChecked] = useState(false);
  const { shopState, setState, setRouterPath } = useShop();
  useEffect(() => {
    let selectedSizes: string[] = [];
    if (shopState.selectedSizes.length > 0) {
      selectedSizes = shopState.selectedSizes;
    }

    selectedSizes.map((item) => {
      if (item.toLowerCase() == label.toLowerCase()) {
        setChecked(true);
      }
    });
  }, []);
  const handleToggle = () => {
    let selectedSizes: string[] = shopState.selectedSizes;

    if (checked) {
      selectedSizes.splice(selectedSizes.indexOf(label.toLowerCase()), 1);
    } else {
      selectedSizes.push(label.toLowerCase());
      console.log(selectedSizes);
    }

    const filteredProducts = filterBySize(
      shopState.originalProducts,
      selectedSizes
    );
    console.log("filteredProducts " + filteredProducts);
    const updatedState = {
      ...shopState,
      products:
        selectedSizes.length > 0
          ? filteredProducts
          : shopState.originalProducts,
      selectedSizes,
    };
    setRouterPath();
    setChecked(!checked);
    setState(updatedState);
  };

  return (
    <li>
      <Checkbox checked={checked} onChange={handleToggle}>
        {label} {formatNumberWithCommas(quantity)}
      </Checkbox>
    </li>
  );
}
