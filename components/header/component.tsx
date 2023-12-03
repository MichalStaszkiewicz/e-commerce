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
import CartNavigation from "./cart-navigation/component";

export function Header() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    <div className="header">
      <div className="site-top-block">
        <HeaderSearchBox />
        <HeaderLogoBox />
        <CartNavigation />
      </div>
      <Divider style={{ padding: "0px", margin: "0px" }}></Divider>
      <HeaderNavigationBar />
    </div>
  ) : (
    <div className="header"></div>
  );
}
