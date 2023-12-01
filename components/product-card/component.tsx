"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/product-card/style.scss";

import { useRouter } from "next/navigation";

export default function ProductCard({
  image,
  label,
  description,
  price,
  width,
  height,
}: {
  image: string;
  label: String;
  description: string;
  price: number;
  width: string;
  height: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/shop/product_details");
      }}
      className="product_card_container"
      style={{
        width: width,
        height: height,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="product_card_image"
      ></div>
      <div className="product_card_desc">
        <p className="product_card_name">{label}</p>
        <p className="product_card_description">{description} </p>
        <p className="product_card_price">${price}</p>
      </div>
    </div>
  );
}
