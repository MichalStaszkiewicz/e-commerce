import Image from "next/image";
import promotedProduct from "../../public/images/shoes.png";

import React, { useRef } from "react";

import { PrimaryButton } from "../primary-button/component";
import "@/components/home-promotion/style.scss";
import "@/styles/globals.scss";
import { Button, ConfigProvider } from "antd";
import theme from "@/theme/theme_config";
export default function HomePromotion() {
  return (
    <div className="home-promotion-container">
      <ConfigProvider theme={theme}>
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
            <Button
              style={{ height: "45px", width: "130px",}}
              type="primary"
              htmlType="submit"
              size="large"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
