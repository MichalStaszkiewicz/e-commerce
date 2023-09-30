import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from '@fortawesome/free-solid-svg-icons';
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { HeaderNavLabel } from "./header_nav_label";

export function HeaderNavButton({ label, icon, items }: { label: string, icon: boolean, items: HeaderNavLabel[] }) {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        if (icon) {
            setMenuOpen(!isMenuOpen);
        }

    };

    return <li className={`header_nav_button ${isMenuOpen ? 'menu-open' : ''}`} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <p>{label}</p>
        {icon && <FontAwesomeIcon icon={icons.faAngleDown} />} {isMenuOpen && (
            <ul className="shadow header_button_menu animate-opacity" >
                {items.map((car, index) => (
                    <HeaderNavLabel label="item" />

                ))}

            </ul>
        )}


    </li>

}
export { HeaderNavLabel };

