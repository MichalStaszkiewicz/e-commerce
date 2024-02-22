import useMediaQuery from "@/hooks/use-media-query";

import { Drawer, GetProp, Menu, MenuProps } from "antd";

import MenuItem from "antd/es/menu/MenuItem";
import router from "next/router";
import { useState } from "react";

import "./style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";

import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { breakpoints } from "@/utils/breakpoints";
type MenuItem = GetProp<MenuProps, "items">[number];
export default function BurgerMenu() {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const items: MenuItem[] = [
    getItem(
      <div
        className="menu-item"
        onClick={() => {
          router.push("/");
          onClose();
        }}
      >
        Home
      </div>,
      "1",
      <HomeOutlined />
    ),

    getItem(<p className="menu-item">About</p>, "2", <HomeOutlined />),
    getItem(
      <p
        onClick={() => {
          router.push("/shop");
          onClose();
        }}
        className="menu-item"
      >
        Shop
      </p>,
      "3",
      <ShoppingCartOutlined className="burger-icon" />
    ),
    getItem(<p className="menu-item">Catalogue</p>, "4", <SettingOutlined />, [
      getItem(<p className="sub-menu-item">Option 1</p>, "7"),
      getItem(<p className="sub-menu-item">Option 2</p>, "8"),
      getItem(<p className="sub-menu-item">Option 3</p>, "9"),
      getItem(<p className="sub-menu-item">Option 4</p>, "10"),
    ]),
    getItem(
      <p className="menu-item">New Arrivals</p>,
      "5",
      <SettingOutlined />
    ),
    getItem(<p className="menu-item">Contact</p>, "6", <MailOutlined />),
  ];
  return isMobile ? (
    <div className="burger-icon-wrapper">
      <MenuOutlined
        onClick={() => {
          showDrawer();
        }}
        className="burger-icon"
      />

      <Drawer
        closable={false}
        size={"default"}
        title={
          <div className="drawer-title">
            <div className="site-logo-wrapper site-logo">SHOPPERS</div>
          </div>
        }
        onClose={onClose}
        open={open}
      >
        <Menu style={{ width: 256 }} mode="inline" items={items} />
      </Drawer>
    </div>
  ) : (
    <div />
  );
}
