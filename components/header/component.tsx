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

export function Header() {
  const [ready, setReady] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  function getView() {
    console.log(isDesktop, isTablet, isMobile);
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
