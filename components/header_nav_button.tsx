import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { HeaderNavLabel } from "./header_nav_label";
import Link from "next/link";

export type NavItem = {
  label: string;
  menuItems: string[];
};
export function HeaderNavButton({
  label,
  icon,
  items,
}: {
  label: string;
  icon: boolean;
  items: NavItem[];
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (items.length > 0) {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <li
      style={{ fontSize: "13px" }}
      className={`header_nav_button ${isMenuOpen ? "menu-open" : ""}`}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <Link href={label == "SHOP" ? "/shop" : ""}>{label}</Link>
      {icon && <FontAwesomeIcon icon={icons.faAngleDown} />}{" "}
      {isMenuOpen && (
        <ul className="header_button_menu animate-header-button">
          {items.map((item, index) => (
            <HeaderNavLabel props={item} />
          ))}
        </ul>
      )}
    </li>
  );
}
export { HeaderNavLabel };
