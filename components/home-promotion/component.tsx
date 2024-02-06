import Image from "next/image";
import promotedProduct from "../../public/images/shoes.png";

import React, { useEffect, useRef } from "react";

import { PrimaryButton } from "../primary-button/component";
import "@/components/home-promotion/style.scss";
import "@/styles/globals.scss";
import { Button, ConfigProvider, theme } from "antd";
import customTheme from "@/theme/theme_config";
import { CompoundedComponent } from "antd/es/float-button/interface";
export default function HomePromotion() {
  return (
    <div className="home-promotion-container">
      <ConfigProvider theme={customTheme}>
        {" "}
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
            <Button style={{height:"45px",paddingLeft:"30px",paddingRight:"30px",borderRadius:"3px"}} type="primary" htmlType="submit" size="middle">
              SHOP NOW
            </Button>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
