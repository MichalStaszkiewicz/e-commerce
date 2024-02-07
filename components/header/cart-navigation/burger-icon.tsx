import useMediaQuery from "@/hooks/use-media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, GetProp, Menu, MenuProps } from "antd";

import MenuItem from "antd/es/menu/MenuItem";
import router from "next/router";
import { useState } from "react";

import * as icons from "@fortawesome/free-solid-svg-icons";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
type MenuItem = GetProp<MenuProps, "items">[number];
export default function BurgerIcon() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
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
        style={{ marginLeft: "10px" }}
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

    getItem(<p style={{ marginLeft: "10px" }}>About</p>, "2", <HomeOutlined />),
    getItem(
      <p style={{ marginLeft: "10px" }}>Shop</p>,
      "3",
      <ShoppingCartOutlined />,
      [
        getItem(<p style={{ fontSize: "18px" }}>Option 1</p>, "7"),
        getItem(<p style={{ fontSize: "18px" }}>Option 2</p>, "8"),
        getItem(<p style={{ fontSize: "18px" }}>Option 3</p>, "9"),
        getItem(<p style={{ fontSize: "18px" }}>Option 4</p>, "10"),
      ]
    ),
    getItem(
      <p style={{ marginLeft: "10px" }}>Catalogue</p>,
      "4",
      <SettingOutlined />
    ),
    getItem(
      <p style={{ marginLeft: "10px" }}>New Arrivals</p>,
      "5",
      <SettingOutlined />
    ),
    getItem(
      <p style={{ marginLeft: "10px" }}>Contact</p>,
      "6",
      <MailOutlined />
    ),
  ];
  return (
    <div>
      {isMobile ? (
        <FontAwesomeIcon
          onClick={() => {
            showDrawer();
          }}
          className="burger-icon"
          icon={icons.faBars}
        />
      ) : null}
      {
        <Drawer
          closable={false}
          size={"default"}
          title={
            <div style={{ width: "100%", marginLeft: "25px" }}>
              <div
                style={{ width: "150px" }}
                className="site-logo js-logo-clone"
              >
                SHOPPERS
              </div>
            </div>
          }
          onClose={onClose}
          open={open}
        >
          <Menu style={{ width: 256 }} mode="inline" items={items} />
        </Drawer>
      }
    </div>
  );
}
