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

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.xl})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);
  function DesktopView() {
    return (
      <>
        <div className="site-top-block">
          <HeaderSearchBox />
          <HeaderLogoBox />
          <SideNavigation />
        </div>
        <Divider ></Divider>
        <HeaderNavigationBar />
      </>
    );
  }
  function TabletView() {
    return DesktopView();
  }

  function MobileView() {
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
  function RenderView() {
    if (isDesktop) {
      return DesktopView();
    } else if (isTablet) {
      return TabletView();
    } else if (isMobile) {
      return MobileView();
    }
  }
  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    <div className="header">{RenderView()}</div>
  ) : (
    <div className="header"></div>
  );
}
