"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../select_product_count/style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function SelectProductCount() {
  const [count, setCount] = useState(1);
  return (
    <div className="select-product-wrapper">
      <div
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
        className="decrease"
      >
        <FontAwesomeIcon
          icon={icons.faMinus}
          style={{ height: "10px", width: "10px", color: "#7c74ea" }}
        />
      </div>
      <div className="current">
        <p>{count}</p>
      </div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className="increase"
      >
        <FontAwesomeIcon
          icon={icons.faPlus}
          style={{ height: "10px", width: "10px", color: "#7c74ea" }}
        />
      </div>
    </div>
  );
}
