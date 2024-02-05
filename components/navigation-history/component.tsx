"use client";
import { usePathname, useRouter } from "next/navigation";
import "@/components/navigation-history/style.scss";
import "@/styles/globals.scss";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import {
  iconFromString,
  getHrefFromPath,
  capitalize,
} from "@/utils/utility-function";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function NavigationHistory() {
  const pathName = usePathname();
  const [items, setItems] = useState([]);
  useEffect(() => {

    let path = "";
    let tempItems: any = [];
    for (let i = 1; i < pathName.length; i++) {
      if (pathName[i] === "/") {
        if (path.length > 1) {
          let icon = iconFromString(path);
          tempItems.push({
            href: getHrefFromPath(pathName, path),
            title: (
              <>
                {icon != null ? icon : <div></div>}{" "}
                <span>{capitalize(path.replace("_", " "))}</span>
              </>
            ),
          });
          path = "";
        }
      } else {
        path += pathName[i];
      }
    }
    let icon = iconFromString(path);
    tempItems.push({
      title: (
        <>
          {icon != null ? icon : <div></div>}{" "}
          <span>{capitalize(path.replace("_", " "))}</span>
        </>
      ),
    });
    setItems(tempItems);
  }, []);
  return (
    <div className="shop-nav-container">
      <Breadcrumb
        items={[
          {
            href: "/",
            title: (
              <>
                <HomeOutlined /> <span>Home</span>
              </>
            ),
          },
          ...items,
        ]}
      />
    </div>
  );
}
