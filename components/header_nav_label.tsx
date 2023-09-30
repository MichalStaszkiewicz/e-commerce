import React from "react";

export class HeaderNavLabel extends React.Component<HeaderNavLabelProps> {
 
    render() {
     
        return <p className="header-menu-label">{this.props.label}</p>;
    }
}