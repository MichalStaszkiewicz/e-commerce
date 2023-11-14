import Image from "next/image";
import promotedProduct from "../../public/images/shoes.png";

import React, { useRef } from "react";

import { PrimaryButton } from "../primary-button/primary-button";
import "@/components/home-promotion/style.scss";
import "@/styles/globals.scss"
export default function HomePromotion() {
  return (
    <div className="home-promotion-container">
      <Image className="home-promotion-image" src={promotedProduct} alt="" />
      <div className="home-promotion-desc-container">
        <div className="home-promotion-desc">
          <p className="home-promotion-desc-header">
            {" "}
            Finding Your Perfect Shoes{" "}
          </p>
          <p className="home-promotion-desc-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
          <PrimaryButton height={40} width={130} label={"SHOP NOW"} />
        </div>
      </div>
    </div>
  );
}
