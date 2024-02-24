"use client";
import { Button, ConfigProvider, Input, Menu, MenuProps, Space } from "antd";
import "./style.scss";
import {
  ShoppingCartOutlined,
  CloseOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import customTheme from "@/theme/theme_config";
import { useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Account Details", 0, <UserOutlined />),

  getItem("Wallet", 1, <WalletOutlined />),
];
export default function ProfileContent() {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);
  const [index, setSelectedIndex] = useState(0);
  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedIndex(parseInt(e.key));
    console.log("click ", e.key);
  };
  function getProfileContent() {
    if (index == 0) {
      return ProfileAccountDetails();
    } else {
      return ProfileWallet();
    }
  }
  function ViewDesktop() {
    return (
      <div className="profile-content-wrapper">
        <div className="profile-content">
          <div className="profile-list-wrapper">
            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["0"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="profile-selected-menu-content">
            {getProfileContent()}
          </div>
        </div>
      </div>
    );
  }
  function ViewTablet() {
    return (
      <div className="profile-content-wrapper">
        <div className="profile-content">
          <div className="profile-list-wrapper">
            <Menu
              onClick={onClick}
              style={{ width: "100%" }}
              defaultSelectedKeys={["0"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="profile-selected-menu-content">
            {getProfileContent()}
          </div>
        </div>
      </div>
    );
  }

  function ViewMobile() {
    return (
      <div className="profile-content-wrapper">
        <div className="profile-content">
          <div className="profile-list-wrapper">
            <Menu
              onClick={onClick}
              style={{ width: "100%" }}
              defaultSelectedKeys={["0"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="profile-selected-menu-content">
            {getProfileContent()}
          </div>
        </div>
      </div>
    );
  }

  function RenderView() {
    if (isDesktop) {
      return ViewDesktop();
    } else if (isTablet) {
      return ViewTablet();
    } else {
      return ViewMobile();
    }
  }
  return <ConfigProvider theme={customTheme}>{RenderView()}</ConfigProvider>;
}
function ProfileAccountDetails() {
  return (
    <div className="account-details-wrapper">
      <p className="title">Account Details</p>
      <Space direction="vertical" size={"small"}>
        {ProfileFormField({ label: "Name", obscure: false })}
        {ProfileFormField({ label: "E-mail", obscure: false })}
        {ProfileFormField({ label: "Password", obscure: true })}
      </Space>
      <div className="logOut-button-wrapper">
        <Button className="logOut-button" type="primary" size="small">
          Log out
        </Button>
      </div>
    </div>
  );
}
function ProfileWallet() {
  return (
    <div className="wallet-wrapper">
      <p className="title">Wallet</p>
      <Space direction="vertical" size={"small"}>
        {ProfileFormField({ label: "Card Number", obscure: false })}
        {ProfileFormField({ label: "MM/RR", obscure: false })}
        {ProfileFormField({ label: "CVV", obscure: false })}
      </Space>
      <div className="save-button-wrapper">
        <Button className="logOut-button" type="primary" size="small">
          Save
        </Button>
      </div>
    </div>
  );
}
function ProfileFormField({
  label,
  obscure,
}: {
  label: string;
  obscure: boolean;
}) {
  return (
    <ConfigProvider theme={customTheme}>
      {obscure ? (
        <>
          {" "}
          <Space direction="vertical" size={"small"}>
            <p>{label}</p>

            <Input.Password
              style={{ width: "450px" }}
              size="large"
              placeholder={label}
            ></Input.Password>
          </Space>
        </>
      ) : (
        <>
          <Space direction="vertical" size={"small"}>
            <p>{label}</p>

            <Input
              style={{ width: "450px" }}
              size="large"
              placeholder={label}
            ></Input>
          </Space>
        </>
      )}
    </ConfigProvider>
  );
}
