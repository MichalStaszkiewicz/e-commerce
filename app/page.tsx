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

          {
            <div className="collections">
              <Collection
                label={"Women"}
                image={"/images/women.jpg"}
                index={1}
              />
              <Collection
                label={"Children"}
                image={"/images/children.jpg"}
                index={2}
              />
              <Collection label={"Men"} image={"/images/men.jpg"} index={3} />
            </div>
          }
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
                    },
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Zank top",
                      price: 50,
                      description: "Finding perfect product",
                    },

                    {
                      image: "/images/cloth_1.jpg",
                      label: "Hank top",
                      price: 50,
                      description: "Finding perfect product",
                    },
                    {
                      image: "/images/cloth_1.jpg",
                      label: "Gank top",
                      price: 50,
                      description: "Finding perfect product",
                    },

                    {
                      image: "/images/cloth_1.jpg",
                      label: "Lank top",
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
