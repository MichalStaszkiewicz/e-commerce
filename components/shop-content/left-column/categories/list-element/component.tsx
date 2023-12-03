export default function CategoriesListElement({
  label,
  quantity,
}: {
  label: string;
  quantity: string;
}) {
  return (
    <li className="list_element">
      <p className="categories-option-label">{label}</p>
      <p className="categories-option-quantity">({quantity})</p>
    </li>
  );
}
