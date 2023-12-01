"use client";
import { usePathname, useRouter } from "next/navigation";
import "@/components/navigation-history/style.scss";
import "@/styles/globals.scss";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function NavigationHistory() {
  const pathName = usePathname();
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(pathName);
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
                <span>{capitalize(path)}</span>
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
          {icon != null ? icon : <div></div>} <span>{capitalize(path)}</span>
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
            href: "/shop/product_details",
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

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function getHrefFromPath(path: string, subpath: string) {
  let endIndex = path.indexOf(subpath);

  return path.substring(0, endIndex) + subpath;
}
function iconFromString(text: string) {
  if (text.toLowerCase() == "cart") {
    return <ShoppingOutlined />;
  } else if (text.toLowerCase() == "shop") {
    return <ShoppingCartOutlined />;
  } else if (text.toLowerCase() == "checkout") {
    return <BankOutlined />;
  } else {
    return null;
  }
}
