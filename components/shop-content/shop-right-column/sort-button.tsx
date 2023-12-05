import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SortMenu } from "./sort-menu";
import "@/components/shop-content/style.scss";
interface SortButtonProps {
  label: string;
  menuData: string[];
}
interface SortButtonState {
  isOpen: boolean;
}
export class SortButton extends React.Component<
  SortButtonProps,
  SortButtonState
> {
  buttonRef: React.RefObject<HTMLDivElement>;
  sortMenu: React.RefObject<SortMenu>;
  constructor(props: SortButtonProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.buttonRef = React.createRef();
    this.sortMenu = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("mousedown", (event: MouseEvent) => {
      if (this.state.isOpen && this.buttonRef!.current! != null) {
        const buttonRect = this.buttonRef!.current!.getBoundingClientRect();
        const menuRect =
          this.sortMenu!.current!.menuRef.current!.getBoundingClientRect();

        const isInsideMenu =
          event.clientX >= menuRect.left &&
          event.clientX <= menuRect.right &&
          event.clientY >= menuRect.top &&
          event.clientY <= menuRect.bottom;
        const isInsideButton =
          event.clientX >= buttonRect.left &&
          event.clientX <= buttonRect.right &&
          event.clientY >= buttonRect.top &&
          event.clientY <= buttonRect.bottom;

        if (isInsideMenu || isInsideButton) {
          if (isInsideButton && this.state.isOpen) {
            this.setState((prevState) => ({
              isOpen: false,
            }));
          } else {
            this.setState((prevState) => ({
              isOpen: true,
            }));
          }
        } else {
          this.setState((prevState) => ({
            isOpen: false,
          }));
        }
      } else {
        if (this.buttonRef!.current?.getBoundingClientRect() != null) {
          const buttonRect = this.buttonRef!.current!.getBoundingClientRect();
          const isInsideButton =
            event.clientX >= buttonRect.left &&
            event.clientX <= buttonRect.right &&
            event.clientY >= buttonRect.top &&
            event.clientY <= buttonRect.bottom;

          if (isInsideButton) {
            this.setState((prevState) => ({
              isOpen: true,
            }));
          }
        }
      }
    });
  }
  render() {
    const handleMouseDown = (event: any) => {};
    return (
      <div className="sort_button_wrapper">
        {" "}
        <div
          ref={this.buttonRef}
          className="sort_button"
          style={{
            color: this.state.isOpen ? "white" : "black",
            backgroundColor: this.state.isOpen ? "#545b62" : "#e6e7e9",
          }}
          onMouseDown={handleMouseDown}
        >
          <p>{this.props.label}</p>
          <FontAwesomeIcon
            icon={icons.faAngleDown}
            style={{ width: "12px", height: "12px" }}
          />
        </div>
        {this.state.isOpen ? (
          <SortMenu ref={this.sortMenu} labels={this.props.menuData} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
