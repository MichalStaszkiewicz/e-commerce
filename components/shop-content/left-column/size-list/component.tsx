import { CategoriesSize } from "../categories-color-indicator/component";

export default function SizeList() {
  return (
    <ul className="size_list">
      <CategoriesSize label=" Small (2,319)" />
      <CategoriesSize label=" Medium (1,282)" />
      <CategoriesSize label=" Large (1,392)" />
    </ul>
  );
}
