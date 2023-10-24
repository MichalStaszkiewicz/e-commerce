import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";

export function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="benefit_container">
      <div className="benefit_container_icon">
        <FontAwesomeIcon
          icon={icons.faShippingFast}
          style={{ height: "40px", width: "40px" }}
        />
      </div>
      <div className="benefit_container_desc">
        <p style={{ fontWeight: "bold", fontSize: "20px" }}> {title}</p>
        <p style={{ fontSize: "10px", color: "grey", marginTop: "10px" }}>
          {description}{" "}
        </p>
      </div>
    </div>
  );
}
