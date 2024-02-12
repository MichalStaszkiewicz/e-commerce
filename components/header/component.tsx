"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { HeaderNavButton } from "../header-navigation/header-nav-button";
import "@/components/header/style.scss";
import { createRef, useEffect, useMemo, useState } from "react";
import { Divider } from "antd";
import HeaderNavigationBar from "./navigation/component";
import HeaderSearchBox from "./search-box/component";
import HeaderLogoBox from "./logo/component";
import SideNavigation from "./cart-navigation/component";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";

export function Header() {
  const [ready, setReady] = useState(false);

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);

  function getView() {
    if (isDesktop) {
      return (
        <>
          <div className="site-top-block">
            <HeaderSearchBox />
            <HeaderLogoBox />
            <SideNavigation />
          </div>
          <Divider style={{ padding: "0px", margin: "0px" }}></Divider>
          <HeaderNavigationBar />
        </>
      );
    } else if (isTablet) {
      return (
        <>
          <div className="site-top-block">
            <HeaderSearchBox />
            <HeaderLogoBox />
            <SideNavigation />
          </div>
          <Divider style={{ padding: "0px", margin: "0px" }}></Divider>
          <HeaderNavigationBar />
        </>
      );
    } else if (isMobile) {
      return (
        <>
          <div className="site-top-block">
            <HeaderSearchBox />
            <HeaderLogoBox />
            <SideNavigation />
          </div>
        </>
      );
    }
  }
  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    <div className="header">{getView()}</div>
  ) : (
    <div className="header"></div>
  );
}
