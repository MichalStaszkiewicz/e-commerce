"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import { HeaderNavLabel } from "./header-nav-label";
import Link from "next/link";
import "@/components/header-navigation/style.scss";

export type NavItem = {
  label: string;
  menuItems: string[];
};
export function HeaderNavButton({
  label,
  icon,
  items,
  href,
}: {
  label: string;
  icon: boolean;
  href: string;
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
      className={`header-nav-button ${isMenuOpen ? "menu-open" : ""}`}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <Link href={href}>{label}</Link>
      {icon && (
        <FontAwesomeIcon
          icon={icons.faAngleDown}
          style={{ height: "10px", width: "10px" }}
        />
      )}{" "}
      {isMenuOpen && (
        <ul className="menu-option">
          {items.map((item, index) => (
            <HeaderNavLabel key={index} props={item} />
          ))}
        </ul>
      )}
    </li>
  );
}
export { HeaderNavLabel };
