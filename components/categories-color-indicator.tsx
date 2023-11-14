
export function CategoriesColorIndicator({
    color,
    label,
  }: {
    color: string;
    label: string;
  }): JSX.Element {
    return (
      <div className="color_container">
        <div className="color_indicator" style={{ backgroundColor: color }}></div>
        <div style={{ marginLeft: "10px" }}></div>
        <p style={{ fontWeight: "350", fontSize: "15px" }}>{label} (2,429)</p>
      </div>
    );
  }
  export function CategoriesSize({ label }: { label: string }) {
    return (
      <li>
        <div style={{}}>
          <input type="checkbox" checked />
          <label style={{ fontWeight: "350", fontSize: "15px" }}>{label}</label>
        </div>
      </li>
    );
  }
  
  