"use client";

import React, { useEffect, useState } from "react";

import { BigSale } from "@/components/big-sale/comopnent";

import { Collection } from "@/components/collection/component";

import FadeOnVisible from "@/components/effects/fade-on-visible/component";
import "@/styles/globals.scss";
import "@/components/collection/style.scss";
import HomePromotion from "@/components/home-promotion/component";
import { FeaturedProducts } from "@/components/home/featured-products/featured-products";
import { Divider, Flex, Row } from "antd";
import { Benefit } from "@/components/benefit/component";
import CollectionSection from "@/components/collection/section";

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  });
  return ready ? (
    <div>
      <main>
        <div className="home-content">
          <HomePromotion />
          <div className="shopping_benefits">
            <Benefit
              title={"FREE SHIPPING"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
              }
              index={1}
            />

            <Benefit
              title={"FREE RETURNS"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
              }
              index={2}
            />
            <Benefit
              title={"CUSTOMER SUPPORT"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
              }
              index={3}
            />
          </div>
          <Divider></Divider>

          <CollectionSection />
          <FadeOnVisible
            children={
              <FeaturedProducts
                props={{
                  products: [
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Aank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },
                    {
                      image: "/images/cloth_3.jpg",
                      label: "Aank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },
                    {
                      image: "/images/cloth_2.jpg",
                      label: "Aank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },
                    {
                      image: "/images/cloth_2.jpg",
                      label: "Aank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },
                    {
                      image: "/images/cloth_2.jpg",
                      label: "Zank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },

                    {
                      image: "/images/cloth_3.jpg",
                      label: "Hank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Gank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
                    },

                    {
                      image: "/images/cloth_2.jpg",
                      label: "Lank top",
                      price: 50,
                      description: "Finding perfect product",
                      height: 450,

                      width: 350,
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
