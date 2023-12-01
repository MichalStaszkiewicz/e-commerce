import CategoriesListElement from "../list-element/component";

export default function CategoriesList() {
  return (
    <ul className="list">
      <CategoriesListElement label={"Men"} quantity={"2,220"} />
      <CategoriesListElement label={"Woman"} quantity={"2,550"} />

      <CategoriesListElement label={"Children"} quantity={"2,124"} />
    </ul>
  );
}
