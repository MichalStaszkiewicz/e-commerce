"use client";
import { PrimaryButtonProps } from "@/interfaces/primary_button_props";
import { PrimaryButtonState } from "@/interfaces/primary_button_state";
import React from "react";

export class PrimaryButton extends React.Component<
  PrimaryButtonProps,
  PrimaryButtonState
> {
  constructor(props: PrimaryButtonProps) {
    super(props);
  }
  render() {
    const { height, width, label } = this.props;

    const buttonStyle = {
      height: height,
      width: width,
    };
    return (
      <div className="primary_button" style={buttonStyle}>
        <p style={{ letterSpacing: 2 }} className="primary_button_label">
          {label}
        </p>
      </div>
    );
  }
}
