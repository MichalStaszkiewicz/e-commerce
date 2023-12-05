import "@/components/shop-content/style.scss";
import { useShop } from "@/hooks/use-shop";
import { formatNumberWithCommas } from "@/utils/utility-function";
import { Checkbox } from "antd";
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
  const { shopState, setState } = useShop();
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
export function CategoriesSize({
  label,
  quantity,
}: {
  label: string;
  quantity: number;
}) {
  const [checked, setChecked] = useState(false);

  const { shopState, setState } = useShop();
  function onClick() {
    {
      let selectedSizes = shopState.selectedSizes;
      if (checked) {
        let index = selectedSizes.findIndex(
          (item) => item.toLowerCase() == label.toLowerCase()
        );

        selectedSizes.splice(index, 1);
      } else {
        selectedSizes.push(label.toLowerCase());
      }
      setState({
        ...shopState,
        selectedSizes: selectedSizes,
      });
      console.log(shopState.selectedSizes);
      setChecked(!checked);
    }
  }
  return (
    <li>
      <div>
        <Checkbox checked={checked} onClick={onClick}>
          {label} {formatNumberWithCommas(quantity)}
        </Checkbox>
      </div>
    </li>
  );
}
