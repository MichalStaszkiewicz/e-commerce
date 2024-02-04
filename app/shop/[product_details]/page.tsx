"use client";
import NavigationHistory from "@/components/navigation-history/component";
import ProductDetails from "@/components/product_details/component";
import { useEffect } from "react";

export default function ProductDetailsPage() {
  return (
    <div>
      <NavigationHistory />
      <ProductDetails />
    </div>
  );
}
