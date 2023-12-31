"use client";

import React, { useEffect, useState } from "react";

import { BigSale } from "@/components/big-sale/comopnent";

import { Collection } from "@/components/collection/component";

import FadeOnVisible from "@/components/effects/fade-on-visible/component";
import "@/styles/globals.scss";
import "@/components/collection/style.scss";
import HomePromotion from "@/components/home-promotion/component";
import { FeaturedProducts } from "@/components/home/featured-products/featured-products";
import { Divider } from "antd";
import { Benefit } from "@/components/benefit/component";

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  });
  return ready ? (
    <div>
      <main>
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
          <Divider></Divider>
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
  ) : (
    <></>
  );
}
