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
import { breakpoints } from "@/utils/breakpoints";

export default function SideNavigation() {
  const router = useRouter();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);

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
