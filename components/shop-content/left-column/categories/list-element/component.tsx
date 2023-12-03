export default function CategoriesListElement({
  label,
  quantity,
}: {
  label: string;
  quantity: string;
}) {
  return (
    <li className="list_element">
      <div>{label}</div> <p>{quantity}</p>
    </li>
  );
}
