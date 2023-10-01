import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from '@fortawesome/free-solid-svg-icons';

export class HeaderNavLabel extends React.Component<HeaderNavLabelProps, HeaderNavLabelState> {
    constructor(props: HeaderNavLabelProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    toggleMenu = () => {
        if (this.props.isMenu) {
            this.setState((prevState) => ({
                isOpen: !prevState.isOpen,
            }));
        }
    };
    render() {

        return <div className="header_nav_container" onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}>

            {
                this.props.isMenu
                    ? <div className="header-menu-label">  <ul>{this.props.label}</ul>
                        <FontAwesomeIcon icon={icons.faArrowRight} />

                        {this.state.isOpen && (
                            <ul className="shadow header_button_menu_label animate-opacity" >
                                {
                                    <HeaderNavLabel label={'item.props.label'} isMenu={true} />

                                }

                            </ul>
                        )}

                    </div>
                    : <ul className="header-menu-label">{this.props.label}</ul>
            }


        </div>;
    }
}