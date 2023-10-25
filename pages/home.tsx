import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import {
  HeaderNavButton,
  HeaderNavLabel,
} from "../components/header_nav_button";
import React from "react";

import { PrimaryButton } from "@/components/primary_button";
import { Benefit } from "@/components/benefit";
import { Collection } from "@/components/collection";
import { FeaturedProducts } from "../components/home/featured_products/featured_products";
import { BigSale } from "@/components/big_sale";
import Link from "next/link";
import Layout from "@/components/layout";
import Head from "next/head";
import HomePromotion from "@/components/home_promotion";
import FadeOnVisible from "@/components/fade_on_visible";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      children={
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
                  <Collection
                    label={"Children"}
                    image={"/images/children.jpg"}
                  />
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
                      },  {
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
      }
    />
  );
}
