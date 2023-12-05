import "@/components/shop-content/style.scss";
import { Checkbox } from "antd";
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
        {label} {quantity}
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
  return (
    <li>
      <div>
        <Checkbox>
          {label} {quantity}
        </Checkbox>
      </div>
    </li>
  );
}
