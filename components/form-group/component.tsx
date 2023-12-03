import "../form-group/style.scss";
export default function FormGroup({
  label,
  notNull,
  className,
  placeholder,
}: {
  label: string | undefined;
  notNull: boolean;
  className: string;
  placeholder: string | null;
}) {
  return (
    <div className="form-group">
      {label != null ? (
        <label>
          {label}{" "}
          {notNull ? <span style={{ color: "red" }}>*</span> : <div></div>}
        </label>
      ) : (
        <div></div>
      )}
      <input
        type="text"
        placeholder={placeholder != null ? placeholder : ""}
        className={className}
      ></input>
    </div>
  );
}
