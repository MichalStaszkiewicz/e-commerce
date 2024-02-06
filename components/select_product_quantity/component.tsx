"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectProductCount({ size }: { size: string }) {
  const [quantity, setQuantity] = useState(1);

  const [focused, setFocused] = useState(false);
  let inputProductRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function onPathUpdate() {
    router.push(`?size=${size}&productCount=${quantity}`, {
      scroll: false,
    });
  }
  useEffect(() => {
    if (inputProductRef.current != null) {
      inputProductRef.current.addEventListener("focus", () => {
        setFocused(true);
      });
      inputProductRef.current.addEventListener("focusout", () => {
        setFocused(false);
      });
    }
  }, [inputProductRef]);
  useEffect(() => {
    onPathUpdate();
  }, [quantity]);
  return (
    <div className="select-product-wrapper">
      <div
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
        className="decrease"
      >
        <FontAwesomeIcon
          icon={icons.faMinus}
          style={{ height: "10px", width: "10px" }}
        />
      </div>
      <div
        className="current"
        style={{
          borderTopColor: focused
            ? "var(--primary-color)"
            : "rgb(213, 213, 213)",

          borderBottomColor: focused
            ? "var(--primary-color)"
            : "rgb(213, 213, 213)",
        }}
      >
        <input
          ref={inputProductRef}
          value={quantity}
      
          onChange={(event) => {
            setQuantity(event.target.valueAsNumber);
            console.log(event.target.focus);
          }}
          type="number"
        ></input>
      </div>
      <div
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="increase"
      >
        <FontAwesomeIcon
          icon={icons.faPlus}
          style={{ height: "10px", width: "10px" }}
        />
      </div>
    </div>
  );
}
