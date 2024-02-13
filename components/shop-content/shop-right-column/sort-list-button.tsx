import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { SortList } from "./sort-list";
import "@/components/shop-content/style.scss";
import { SortFilterButtonProps } from "./const";
import { clickedInsideElement } from "@/utils/utility-function";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export default function SortListButton(props: SortFilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = React.createRef<HTMLDivElement>();
  const menuRef = React.createRef<HTMLDivElement>();

  window.addEventListener("mousedown", (event: MouseEvent) => {
    const button = buttonRef.current;
    if (button != null) {
      if (isOpen && button.getBoundingClientRect() != null) {
        const buttonRect = button.getBoundingClientRect();
        const menuRect = menuRef!.current!.getBoundingClientRect();

        const isInsideMenu = clickedInsideElement({
          event: event,
          elementRect: menuRect,
        });

        const isInsideButton = clickedInsideElement({
          event: event,
          elementRect: buttonRect,
        });
console.log("IsOpen? : " + isOpen)
        if (isInsideMenu || isInsideButton) {
          
          if (isInsideButton && isOpen) {
        
            //setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        } else {
          setIsOpen(false);
        }
      } else {
        if (button.getBoundingClientRect() != null) {
          const buttonRect = button.getBoundingClientRect();
          const isInsideButton = clickedInsideElement({
            event: event,
            elementRect: buttonRect,
          });
        
          if (isInsideButton) {
            setIsOpen(true);
            
          }
        }
      
      }
    }
  });
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
          console.log('tapped')
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
        <div  ref={menuRef}>
          <SortList
            labels={props.method}
            onRefReady={function (
              sortMenu: React.RefObject<HTMLDivElement>
            ): void { } } setMenuOpen={setIsOpen}          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
