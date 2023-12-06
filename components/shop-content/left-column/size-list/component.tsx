import { CategoriesSize } from "../categories-color-indicator/component";

export default function SizeList() {
  return (
    <ul className="size_list">
      <CategoriesSize label="Small" quantity={1412} />
      <CategoriesSize label="Medium" quantity={1375} />
      <CategoriesSize label="Large" quantity={8143} />
    </ul>
  );
}
