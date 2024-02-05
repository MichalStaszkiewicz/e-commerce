"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/product-card/style.scss";

import { useRouter } from "next/navigation";
import { Product } from "@/model/product";

export default function ProductCard({
  product,
  width,
  height,
}: {
  product: Product;
  width: string;
  height: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/shop/${product.name.replace(" ", "_")}`);
      }}
      className="product_card_container"
      style={{
        width: width,
        height: height,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${product.image})`,
        }}
        className="product_card_image"
      ></div>
      <div className="product_card_desc">
        <p className="product_card_name">{product.name}</p>
        <p className="product_card_description">{product.description} </p>
        <p className="product_card_price">${product.price}</p>
      </div>
    </div>
  );
}
