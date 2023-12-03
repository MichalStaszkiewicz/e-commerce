export default function SelectCountry() {
  return (
    <div className="form-group">
      <label>
        Country <span style={{ color: "red" }}>*</span>
      </label>
      <select className="select-country">
        <option value="1">Select Country</option>
        <option value="2">Bangladesh</option>
        <option value="3">Algeria</option>
        <option value="4">Afghanistan</option>
        <option value="5">Ghana</option>
        <option value="6">Albania</option>
      </select>
    </div>
  );
}
