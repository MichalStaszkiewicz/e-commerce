import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { SortMenu } from "./sort-menu";
import "@/components/shop-content/style.scss";
interface SortButtonProps {
  label: string;
  menuData: string[];
}
interface SortButtonState {
  isOpen: boolean;
}

export default function SortButton(props: SortButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = React.createRef<HTMLDivElement>();

  useEffect(() => {}, []);
  return (
    <div className="sort_button_wrapper">
      {" "}
      <div
        ref={buttonRef}
        className="sort_button"
        style={{
          color: isOpen ? "white" : "black",
          backgroundColor: isOpen ? "#545b62" : "#e6e7e9",
        }}
        onPointerUp={() => {
          setIsOpen(true);
        }}
      >
        <p>{props.label}</p>
        <FontAwesomeIcon
          icon={icons.faAngleDown}
          style={{ width: "12px", height: "12px" }}
        />
      </div>
      {isOpen ? (
        <SortMenu
          labels={props.menuData}
          onRefReady={function (
            sortMenu: React.RefObject<HTMLDivElement>
          ): void {
            window.addEventListener("mousedown", (event: MouseEvent) => {
              if (isOpen && buttonRef!.current! != null) {
                const buttonRect = buttonRef!.current!.getBoundingClientRect();
                const menuRect = sortMenu!.current!.getBoundingClientRect();

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
                  if (isInsideButton && isOpen) {
                    setIsOpen(false);
                  } else {
                    setIsOpen(true);
                  }
                } else {
                  setIsOpen(false);
                }
              } else {
                if (buttonRef!.current?.getBoundingClientRect() != null) {
                  const buttonRect =
                    buttonRef!.current!.getBoundingClientRect();
                  const isInsideButton =
                    event.clientX >= buttonRect.left &&
                    event.clientX <= buttonRect.right &&
                    event.clientY >= buttonRect.top &&
                    event.clientY <= buttonRect.bottom;

                  if (isInsideButton) {
                    setIsOpen(true);
                  }
                }
              }
            });
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
