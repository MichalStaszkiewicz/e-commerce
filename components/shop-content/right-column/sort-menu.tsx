import React from "react";
import "@/components/shop-content/style.scss";
interface SortMenuProps {
  labels: string[];
}
interface SortMenuState {}

export class SortMenu extends React.Component<SortMenuProps, SortMenuState> {
  menuRef: React.RefObject<HTMLDivElement>;
  constructor(props: SortMenuProps) {
    super(props);
    this.state = {};

    this.menuRef = React.createRef();
  }
  render() {
    return (
      <div ref={this.menuRef} className="sort_menu" style={{}}>
        <ul>
          {this.props.labels.map((item, index) => (
            <li>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
