import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
export function HeaderNavButton({ label, icon }: { label: string, icon: boolean }) {

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
                <li className="header-menu-label">Element 1</li>
                <li className="header-menu-label">Element 2</li>
                <li className="header-menu-label">Element 3</li>

            </ul>
        )}


    </li>

}