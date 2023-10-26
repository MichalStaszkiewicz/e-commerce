import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./header_nav_button";


export function HeaderNavLabel({props}:{props:NavItem}
 ) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (props.menuItems.length>0?true:false) {
      setIsOpen(!isOpen)

    }
  };
  const createMenu = ():NavItem[] =>{
    const menuItems:NavItem[] = [];
    props.menuItems.map((item,index)=>{
     const newMenuItem:NavItem ={
       label:item,
       menuItems:props.menuItems
     }
      menuItems.push(newMenuItem)

   })
   return menuItems;

  }
  const menuItems = createMenu()
  return (
    
    <div onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
     {props.menuItems.length>0 ? (
        <div className="header-menu-label">
          {" "}
          <p>{props.label}</p>
          <FontAwesomeIcon icon={icons.faArrowRight} />
          {isOpen && (
            <ul className="header_button_menu_label animate-label-button">
              {<HeaderNavLabel props={menuItems[0]} />}
            </ul>
          )}
        </div>
      ) : (
        <ul className="header-menu-label">{props.label}</ul>
      )} 
    </div>
  
  );
}
