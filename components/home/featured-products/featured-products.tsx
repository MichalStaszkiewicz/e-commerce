"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import { off } from "process";
import { CarouselArrowState, ArrowDirection } from "./enum";

import "@/components/home/featured-products/style.scss";
import ProductCard from "@/components/product-card/component";
import ProductCarousel from "./product-carousel";
import useMediaQuery from "@/hooks/use-media-query";

export function FeaturedProducts({ props }: { props: FeaturedProductProps }) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(min-width: 767px)");

  function DesktopView() {
    return (
      <ProductCarousel
        props={{ products: props.products, slidesAtOnce: 3 }}
      ></ProductCarousel>
    );
  }
  function TabletView() {
    return (
      <ProductCarousel
        props={{ products: props.products, slidesAtOnce: 2 }}
      ></ProductCarousel>
    );
  }
  function MobileView() {
    return (
      <ProductCarousel
        props={{ products: props.products, slidesAtOnce: 1 }}
      ></ProductCarousel>
    );
  }
  function RenderView() {
    if (isDesktop) {
      return DesktopView();
    } else if (isTablet) {
      return TabletView();
    } else {
      return MobileView();
    }
  }
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
      {RenderView()}
    </div>
  );
}
