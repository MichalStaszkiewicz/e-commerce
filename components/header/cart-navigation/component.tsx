import useMediaQuery from "@/hooks/use-media-query";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, Drawer, GetProp, Input, Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { runes } from "runes2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal, Button } from "antd";
import Link from "next/link";
import customTheme from "@/theme/theme_config";
import BurgerMenu from "./burger-menu";
import { breakpoints } from "@/utils/breakpoints";
import {
  ShoppingCartOutlined,
  CloseOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LoginModal } from "../login-modal/component";

export default function SideNavigation() {
  const router = useRouter();

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="block-3">
      {" "}
      <ConfigProvider theme={customTheme}>
        <div className="side-nav">
          <ShoppingCartOutlined
            className="side-nav-icon"
            onClick={() => {
              router.push("/cart");
            }}
          />

          <UserOutlined onClick={showModal} className="side-nav-icon" />
          {BurgerMenu()}
          {LoginModal({ isOpened: open, setIsOpen: setOpen })}
        </div>
      </ConfigProvider>
    </div>
  );
}
