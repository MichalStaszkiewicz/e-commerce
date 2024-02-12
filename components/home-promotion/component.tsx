import Image from "next/image";
import promotedProduct from "../../public/images/shoes.png";

import React, { useEffect, useRef } from "react";

import { PrimaryButton } from "../primary-button/component";
import "@/components/home-promotion/style.scss";
import "@/styles/globals.scss";

import { Button, ConfigProvider, theme } from "antd";
import customTheme from "@/theme/theme_config";
import { CompoundedComponent } from "antd/es/float-button/interface";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";
export default function HomePromotion() {
  const isDektop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);
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
            <Button
              style={{ width: "200px" }}
              type="primary"
              htmlType="submit"
              size="middle"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
