import { CategoriesColorIndicator } from "../categories-color-indicator/component";

export default function ColorList() {
  return (
    <div className="color_list">
      <CategoriesColorIndicator color={"red"} label={"Red"} quantity={1523} />
      <CategoriesColorIndicator color={"green"} label={"Green"} quantity={4123} />
      <CategoriesColorIndicator color={"aqua"} label={"Blue"} quantity={7534} />
      <CategoriesColorIndicator color={"purple"} label={"Purple"} quantity={1734} />
    </div>
  );
}
