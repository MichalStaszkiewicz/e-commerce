import React from "react";


interface PrimaryButtonState {


}
interface PrimaryButtonProps {
    height: number;
    width: number;
    label: string;

}
export class PrimaryButton extends React.Component<PrimaryButtonProps, PrimaryButtonState>{
    constructor(props: PrimaryButtonProps) {
        super(props);


    }
    render() {

        return <div style={{ height: this.props.height, width: this.props.width, backgroundColor: "blueviolet", borderRadius: "10px" }}>
            <p className="primary_button_label">{this.props.label}</p>
        </div>

    }

}