"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SelectProductCount({ size }: { size: string }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function onPathUpdate() {
    router.push(`?size=${size}&productCount=${quantity}`, {
      scroll: false,
    });
  }
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
      <div className="current">
        <p>{quantity}</p>
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
