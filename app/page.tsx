"use client";

import { Inter } from "next/font/google";

import React from "react";

import { Benefit } from "@/components/benefit/benefit";

import { FeaturedProducts } from "../components/home/featured_products/featured-products";
import { BigSale } from "@/components/big-sale/big-sale";

import { Collection } from "@/components/collection/collection";
import HomePromotion from "@/components/home-promotion/home-promotion";
import FadeOnVisible from "@/components/fade-on-visible";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center  ${inter.className}`}
      >
        <div className="content">
          <HomePromotion />

          <FadeOnVisible
            children={
              <div className="shopping_benefits">
                <Benefit
                  title={"FREE SHIPPING"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
                  }
                />

                <Benefit
                  title={"FREE RETURNS"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
                  }
                />
                <Benefit
                  title={"CUSTOMER SUPPORT"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
                  }
                />
              </div>
            }
          />

          <FadeOnVisible
            children={
              <div className="collections">
                <Collection label={"Woman"} image={"/images/women.jpg"} />
                <Collection label={"Children"} image={"/images/children.jpg"} />
                <Collection label={"Men"} image={"/images/men.jpg"} />
              </div>
            }
          />

          <FadeOnVisible
            children={
              <FeaturedProducts
                props={{
                  products: [
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Tank top",
                      price: 50,
                      description: "Finding perfect product",
                    },
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Tank top",
                      price: 50,
                      description: "Finding perfect product",
                    },

                    {
                      image: "/images/cloth_1.jpg",
                      label: "Tank top",
                      price: 50,
                      description: "Finding perfect product",
                    },
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Tank top",
                      price: 50,
                      description: "Finding perfect product",
                    },

                    {
                      image: "/images/cloth_1.jpg",
                      label: "Tank top",
                      price: 50,
                      description: "Finding perfect product",
                    },
                  ],
                }}
              />
            }
          />
          <FadeOnVisible children={<BigSale></BigSale>} />
        </div>
      </main>
    </div>
  );
}
