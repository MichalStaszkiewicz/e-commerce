import "../../form-group/style.scss";
export default function MessageArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={placeholder} className="message-input"></textarea>
    </div>
  );
}
