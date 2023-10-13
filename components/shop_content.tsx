import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DragEventHandler,
  LegacyRef,
  useCallback,
  useRef,
  useState,
} from "react";

import * as icons from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ShopContent() {
  return (
    <div className="shop_content">
      <div className="container">
        <div className="left_column">
          <div className="categories">
            <p className="categories_header" style={{ marginTop: "20px" }}>
              CATEGORIES
            </p>
            <ul className="list">
              <li className="list_element">
                <div>Men</div> <p style={{ color: "black" }}>(2,220)</p>
              </li>
              <li className="list_element">
                <div>Woman</div> <p style={{ color: "black" }}>(2,550)</p>
              </li>
              <li className="list_element">
                <div>Children</div>
                <p style={{ color: "black" }}>(2,124)</p>
              </li>
            </ul>
          </div>

          <div className="filters">
            <div className="container">
              <p className="categories_header">FILTER BY PRICE</p>
              <div className="slider_container"></div>
              <p style={{ marginTop: "10px", fontSize: "14px" }}>$76 - $262</p>
              <p className="categories_header" style={{ marginTop: "20px" }}>
                SIZE
              </p>
              <div style={{ marginTop: "10px" }}></div>
              <ul className="size_list">
                <CategoriesSize label=" Small (2,319)" />
                <CategoriesSize label=" Medium (1,282)" />
                <CategoriesSize label=" Large (1,392)" />
              </ul>
              <p className="categories_header" style={{ marginTop: "20px" }}>
                COLOR
              </p>
              <div style={{ marginTop: "10px" }}></div>
              <div className="color_list">
                <CategoriesColorIndicator color={"red"} label={"Red"} />
                <CategoriesColorIndicator color={"green"} label={"Green"} />
                <CategoriesColorIndicator color={"aqua"} label={"Blue"} />
                <CategoriesColorIndicator color={"purple"} label={"Purple"} />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>

        <div className="right_column">
          <div className="header">
            <p style={{ width: "100px", fontWeight: "450", fontSize: "18px" }}>
              Shop All
            </p>
            <div className="sort_container">
              <SortButton label={"LATEST"} width={100} height={40} />
              <SortButton label={"REFERENCE"} width={100} height={40} />
            </div>
          </div>
          <div className="list"></div>
        </div>
      </div>
    </div>
  );
}

function CategoriesColorIndicator({
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
function CategoriesSize({ label }: { label: string }) {
  return (
    <li>
      <div style={{}}>
        <input type="checkbox" id="scales" name="scales" checked />
        <label style={{ fontWeight: "350", fontSize: "15px" }}>{label}</label>
      </div>
    </li>
  );
}

interface SortButtonProps {
  width: number;
  height: number;
  label: string;
}
interface SortButtonState {
  isOpen: boolean;
}
class SortButton extends React.Component<SortButtonProps, SortButtonState> {
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
    console.log("executed");

    window.addEventListener("mousedown", (event: MouseEvent) => {
      console.log("begining");
      if (this.state.isOpen) {
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
          console.log("is inside button? : " + isInsideButton);
          console.log("is opened? : " + this.state.isOpen);
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
        const buttonRect = this.buttonRef!.current!.getBoundingClientRect();
        const isInsideButton =
          event.clientX >= buttonRect.left &&
          event.clientX <= buttonRect.right &&
          event.clientY >= buttonRect.top &&
          event.clientY <= buttonRect.bottom;
        console.log("IS CLOSED");
        if (isInsideButton) {
          this.setState((prevState) => ({
            isOpen: true,
          }));
        }
      }
      console.log(this.state.isOpen + " " + this.props.label);
    });
  }
  render() {
    const handleMouseDown = (event: any) => {};
    return (
      <div
        ref={this.buttonRef}
        className="shop_sort_button"
        style={{
          width: this.props.width.toString() + "px",
          height: this.props.height.toString() + "px",
        }}
        onMouseDown={handleMouseDown}
      >
        <p
          style={{
            paddingLeft: "5px",
            paddingRight: "5px",
            fontSize: "13px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.props.label}
        </p>
        <FontAwesomeIcon icon={icons.faAngleDown} style={{ width: "10px" }} />
        {this.state.isOpen ? <SortMenu ref={this.sortMenu} /> : <div></div>}
      </div>
    );
  }
}
interface SortMenuProps {}
interface SortMenuState {}
class SortMenu extends React.Component<SortMenuProps, SortMenuState> {
  menuRef: React.RefObject<HTMLDivElement>;
  constructor(props: SortMenuProps) {
    super(props);
    this.state = {};

    this.menuRef = React.createRef();
  }
  render() {
    return (
      <div
        ref={this.menuRef}
        style={{
          height: "150px",
          width: "150px",
          backgroundColor: "black",
          position: "absolute",
          top: "10px",
        }}
      ></div>
    );
  }
}
