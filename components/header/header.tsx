"use client";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { HeaderNavButton } from "../header-navigation/header-nav-button";
import "@/components/header/style.scss";
import { createRef, useEffect, useMemo, useState } from "react";
import { Divider } from "antd";

export function Header() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    <div className="header">
      <div className="site-top-block">
        <div className="block-1">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button className="icon-search">
              <FontAwesomeIcon
                icon={icons.faMagnifyingGlass}
                style={{ width: "45%", height: "45%" }}
              />
            </button>
          </div>
        </div>

        <div className="block-2">
          <div className="site-logo">
            <Link
              href="/"
              style={{ letterSpacing: "5px", fontSize: "15.5px" }}
              className="js-logo-clone"
            >
              SHOPPERS
            </Link>
          </div>
        </div>
        <div className="block-3">
          {" "}
          <div className="side-nav">
            <FontAwesomeIcon
              icon={icons.faShoppingCart}
              style={{ color: "#8c92a0", width: "15%", height: "15%" }}
            />
          </div>
        </div>
      </div>
      <Divider style={{ padding: "0px", margin: "0px" }}></Divider>
      <div className="nav-header">
        <HeaderNavButton label={"HOME"} icon={false} items={[]} />
        <HeaderNavButton label={"ABOUT"} icon={false} items={[]} />
        <HeaderNavButton
          label={"SHOP"}
          icon={true}
          items={[
            { menuItems: ["item 1", "item 2"], label: "item 1" },
            { menuItems: ["item 1", "item 2"], label: "item 2" },
          ]}
        />
        <HeaderNavButton label={"CATALOGUE"} icon={false} items={[]} />
        <HeaderNavButton label={"NEW ARRIVALS"} icon={false} items={[]} />
        <HeaderNavButton label={"CONTACT"} icon={false} items={[]} />
      </div>
    </div>
  ) : (
    <div className="header"></div>
  );
}
