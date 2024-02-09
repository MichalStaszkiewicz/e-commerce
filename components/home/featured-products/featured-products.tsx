"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import { off } from "process";
import { CarouselArrowState, ArrowDirection } from "./enum";

import "@/components/home/featured-products/style.scss";
import ProductCard from "@/components/product-card/component";
import ProductCarousel from "./product-carousel";

export function FeaturedProducts({ props }: { props: FeaturedProductProps }) {
  return (
    <div className="featured_products">
      <p
        style={{
          fontWeight: "400",
          fontSize: "30px",
        }}
      >
        Featured Products
      </p>
      <ProductCarousel
        props={{ products: props.products, slidesAtOnce: 3 }}
      ></ProductCarousel>
    </div>
  );
}
