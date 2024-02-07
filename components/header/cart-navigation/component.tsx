import useMediaQuery from "@/hooks/use-media-query";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, Drawer, GetProp, Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import customTheme from "@/theme/theme_config";
import BurgerIcon from "./burger-icon";

export default function SideNavigation() {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="block-3">
      {" "}
      <ConfigProvider theme={customTheme}>
        <div className="side-nav">
          <FontAwesomeIcon
            className="cart-icon"
            icon={icons.faShoppingCart}
            onClick={() => {
              router.push("/cart");
            }}
          />
          {BurgerIcon()}
        </div>
      </ConfigProvider>
    </div>
  );
}
