import { CategoriesColorIndicator } from "../categories-color-indicator/component";

export default function ColorList() {
  return (
    <div className="color_list">
      <CategoriesColorIndicator color={"red"} label={"Red"} />
      <CategoriesColorIndicator color={"green"} label={"Green"} />
      <CategoriesColorIndicator color={"aqua"} label={"Blue"} />
      <CategoriesColorIndicator color={"purple"} label={"Purple"} />
    </div>
  );
}
